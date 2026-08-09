(function () {
  "use strict";

  const SCHEMA_VERSION = 1;
  const POINTER_KEY = "management-os-operating-model-active-v1";
  const GENERATION_PREFIX = "management-os-operating-model-generation-v1-";
  const MAX_RETAINED_GENERATIONS = 3;

  const ELEMENT_KINDS = new Set([
    "organization", "department", "role", "process", "system", "sop", "measure",
    "report", "meeting", "interaction", "unknown"
  ]);
  const RELATIONSHIP_FAMILIES = new Set([
    "containment", "reporting", "responsibility", "participation", "dependency",
    "information-flow", "material-flow", "association", "interaction"
  ]);
  const QUALIFICATIONS = new Set(["known", "unknown", "incomplete", "stale", "disputed"]);

  function now() { return new Date().toISOString(); }
  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function id(prefix) {
    if (window.crypto && typeof window.crypto.randomUUID === "function") return `${prefix}-${window.crypto.randomUUID()}`;
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
  }
  function checksum(text) {
    let hash = 2166136261;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(16).padStart(8, "0");
  }
  function payloadForChecksum(envelope) {
    return JSON.stringify({
      schemaVersion: envelope.schemaVersion,
      workspaceId: envelope.workspaceId,
      generation: envelope.generation,
      parentGeneration: envelope.parentGeneration,
      committedAt: envelope.committedAt,
      state: envelope.state
    });
  }
  function createEmptyState(workspaceId) {
    return {
      workspaceId,
      elements: [],
      relationships: [],
      revisions: [],
      investigations: [],
      improvements: [],
      ui: { savedLens: "structure" }
    };
  }
  function validateState(state, workspaceId) {
    if (!state || state.workspaceId !== workspaceId) throw new Error("Сховище належить іншому локальному простору.");
    if (!["elements", "relationships", "revisions", "investigations", "improvements"].every(key => Array.isArray(state[key]))) {
      throw new Error("Структура сховища неповна.");
    }
    const ids = new Set();
    state.elements.forEach(element => {
      if (!element.id || ids.has(element.id) || !ELEMENT_KINDS.has(element.kind) || element.workspaceId !== workspaceId) throw new Error("Некоректний елемент організації.");
      ids.add(element.id);
    });
    state.relationships.forEach(relationship => {
      if (!relationship.id || ids.has(relationship.id) || relationship.workspaceId !== workspaceId || !RELATIONSHIP_FAMILIES.has(relationship.family)) throw new Error("Некоректний зв’язок організації.");
      if (!ids.has(relationship.fromId) || !ids.has(relationship.toId) || relationship.fromId === relationship.toId) throw new Error("Зв’язок містить невідомий кінець.");
      ids.add(relationship.id);
    });
    return true;
  }
  function generationKey(workspaceId, generation) { return `${GENERATION_PREFIX}${workspaceId}-${generation}`; }

  class BrowserPersistenceAdapter {
    constructor(storage) { this.storage = storage || window.localStorage; this.lastLoadStatus = { recovered: false, failed: false }; }

    listCandidates() {
      const result = [];
      for (let index = 0; index < this.storage.length; index += 1) {
        const key = this.storage.key(index);
        if (!key || !key.startsWith(GENERATION_PREFIX)) continue;
        try {
          const envelope = JSON.parse(this.storage.getItem(key));
          if (this.isValidEnvelope(envelope)) result.push({ key, envelope });
        } catch (_) { /* invalid generations are ignored and never merged */ }
      }
      return result.sort((a, b) => b.envelope.generation - a.envelope.generation);
    }

    isValidEnvelope(envelope) {
      if (!envelope || envelope.schemaVersion !== SCHEMA_VERSION || envelope.commitMarker !== "committed") return false;
      if (!Number.isInteger(envelope.generation) || envelope.generation < 1 || !envelope.workspaceId) return false;
      if (checksum(payloadForChecksum(envelope)) !== envelope.checksum) return false;
      validateState(envelope.state, envelope.workspaceId);
      return true;
    }

    load() {
      const pointer = this.storage.getItem(POINTER_KEY);
      const candidates = this.listCandidates();
      if (!candidates.length) {
        const hasStoredGenerations = Array.from({ length: this.storage.length }, (_, index) => this.storage.key(index)).some(key => key?.startsWith(GENERATION_PREFIX));
        this.lastLoadStatus = { recovered: false, failed: hasStoredGenerations };
        if (hasStoredGenerations) throw new Error("Збережену модель не вдалося безпечно відновити.");
        return null;
      }
      const pointed = candidates.find(item => item.key === pointer);
      if (pointed) { this.lastLoadStatus = { recovered: false, failed: false }; return clone(pointed.envelope); }
      const pointerWorkspacePrefix = pointer ? pointer.slice(0, pointer.lastIndexOf("-") + 1) : null;
      const pointerCandidates = pointerWorkspacePrefix ? candidates.filter(item => item.key.startsWith(pointerWorkspacePrefix)) : [];
      const scopedCandidates = pointerCandidates.length ? pointerCandidates : candidates;
      const fallback = scopedCandidates.find(item => item.envelope.generation === 1 || scopedCandidates.some(parent => parent.envelope.workspaceId === item.envelope.workspaceId && parent.envelope.generation === item.envelope.parentGeneration));
      if (!fallback) { this.lastLoadStatus = { recovered: false, failed: true }; throw new Error("Ланцюг збережених станів пошкоджено."); }
      this.lastLoadStatus = { recovered: true, failed: false, recoveredGeneration: fallback.envelope.generation };
      return clone(fallback.envelope);
    }

    listLatestByWorkspace() {
      const latest = new Map();
      this.listCandidates().forEach(candidate => {
        const workspaceId = candidate.envelope.workspaceId;
        const current = latest.get(workspaceId);
        if (!current || candidate.envelope.generation > current.envelope.generation) latest.set(workspaceId, candidate);
      });
      return Array.from(latest.values()).sort((a, b) => String(b.envelope.committedAt).localeCompare(String(a.envelope.committedAt)));
    }

    activateWorkspace(workspaceId) {
      const candidate = this.listLatestByWorkspace().find(item => item.envelope.workspaceId === workspaceId);
      if (!candidate) throw new Error("Організацію не знайдено у цьому браузері.");
      this.storage.setItem(POINTER_KEY, candidate.key);
      const activated = JSON.parse(this.storage.getItem(this.storage.getItem(POINTER_KEY)));
      if (!this.isValidEnvelope(activated) || activated.workspaceId !== workspaceId) throw new Error("Не вдалося перейти до організації.");
      this.lastLoadStatus = { recovered: false, failed: false };
      return clone(activated);
    }

    commit(state, parentEnvelope) {
      const generation = parentEnvelope ? parentEnvelope.generation + 1 : 1;
      validateState(state, state.workspaceId);
      const envelope = {
        schemaVersion: SCHEMA_VERSION,
        workspaceId: state.workspaceId,
        generation,
        parentGeneration: parentEnvelope ? parentEnvelope.generation : null,
        committedAt: now(),
        state: clone(state)
      };
      envelope.checksum = checksum(payloadForChecksum(envelope));
      envelope.commitMarker = "committed";
      const key = generationKey(state.workspaceId, generation);
      this.storage.setItem(key, JSON.stringify(envelope));
      const readBack = JSON.parse(this.storage.getItem(key));
      if (!this.isValidEnvelope(readBack)) throw new Error("Не вдалося підтвердити запис організації.");
      this.storage.setItem(POINTER_KEY, key);
      const active = JSON.parse(this.storage.getItem(this.storage.getItem(POINTER_KEY)));
      if (!this.isValidEnvelope(active) || active.generation !== generation) throw new Error("Не вдалося активувати новий стан.");
      this.prune(state.workspaceId);
      return clone(active);
    }

    prune(workspaceId) {
      this.listCandidates()
        .filter(item => item.envelope.workspaceId === workspaceId)
        .slice(MAX_RETAINED_GENERATIONS)
        .forEach(item => this.storage.removeItem(item.key));
    }
  }

  class OperatingModelRepository {
    constructor(adapter) {
      this.adapter = adapter || new BrowserPersistenceAdapter();
      this.envelope = this.adapter.load();
      this.listeners = new Set();
    }

    snapshot() { return this.envelope ? clone(this.envelope.state) : null; }
    subscribe(listener) { this.listeners.add(listener); return () => this.listeners.delete(listener); }
    notify() { const state = this.snapshot(); this.listeners.forEach(listener => listener(state)); }

    initializeOrganization(label) {
      if (this.envelope) throw new Error("Організацію вже створено.");
      return this.createOrganization(label);
    }

    createOrganization(label) {
      const cleanLabel = String(label || "").trim();
      if (!cleanLabel) throw new Error("Вкажіть назву організації.");
      const workspaceId = id("workspace");
      const state = createEmptyState(workspaceId);
      state.elements.push(this.makeElement(state, "organization", cleanLabel, "known"));
      this.envelope = this.adapter.commit(state, null);
      this.notify();
      return this.snapshot();
    }

    listOrganizations() {
      return this.adapter.listLatestByWorkspace().map(candidate => {
        const organization = candidate.envelope.state.elements.find(item => item.kind === "organization");
        return { workspaceId: candidate.envelope.workspaceId, label: organization?.label || "Організація", active: candidate.envelope.workspaceId === this.envelope?.workspaceId };
      });
    }

    switchOrganization(workspaceId) {
      if (!workspaceId || workspaceId === this.envelope?.workspaceId) return this.snapshot();
      this.envelope = this.adapter.activateWorkspace(workspaceId);
      this.notify();
      return this.snapshot();
    }

    renameOrganization(label) {
      const organization = this.envelope?.state.elements.find(item => item.kind === "organization");
      if (!organization) throw new Error("Поточну організацію не знайдено.");
      return this.reviseElement(organization.id, { label });
    }

    makeElement(state, kind, label, qualification, details) {
      if (!ELEMENT_KINDS.has(kind)) throw new Error("Непідтримуваний тип елемента.");
      const cleanLabel = String(label || "").trim();
      if (!cleanLabel) throw new Error("Назва не може бути порожньою.");
      return {
        id: id(kind), workspaceId: state.workspaceId, kind, label: cleanLabel,
        qualification: QUALIFICATIONS.has(qualification) ? qualification : "known",
        details: Object.assign({}, details || {}), version: 1, createdAt: now(), updatedAt: now(),
        ownershipMode: "operating-model-owned", lifecycle: "active"
      };
    }

    transact(commandName, mutate) {
      if (!this.envelope) throw new Error("Спочатку створіть організацію.");
      const state = clone(this.envelope.state);
      const result = mutate(state);
      validateState(state, state.workspaceId);
      state.revisions.push({ id: id("revision"), command: commandName, recordedAt: now(), generation: this.envelope.generation + 1 });
      this.envelope = this.adapter.commit(state, this.envelope);
      this.notify();
      return clone(result);
    }

    createElement(input) {
      return this.transact("create-element", state => {
        const element = this.makeElement(state, input.kind, input.label, input.qualification, input.details);
        state.elements.push(element);
        if (input.parentId) this.addRelationshipToState(state, { family: "containment", fromId: input.parentId, toId: element.id, label: "містить" });
        return element;
      });
    }

    reviseElement(elementId, changes) {
      return this.transact("revise-element", state => {
        const element = state.elements.find(item => item.id === elementId);
        if (!element) throw new Error("Елемент не знайдено.");
        state.revisions.push({ id: id("revision"), command: "element-snapshot", recordedAt: now(), element: clone(element) });
        if (changes.label !== undefined) {
          const label = String(changes.label).trim();
          if (!label) throw new Error("Назва не може бути порожньою.");
          element.label = label;
        }
        if (changes.qualification !== undefined) {
          if (!QUALIFICATIONS.has(changes.qualification)) throw new Error("Некоректний стан.");
          element.qualification = changes.qualification;
        }
        element.details = Object.assign({}, element.details, changes.details || {});
        element.version += 1;
        element.updatedAt = now();
        return element;
      });
    }

    addRelationshipToState(state, input) {
      if (!RELATIONSHIP_FAMILIES.has(input.family)) throw new Error("Непідтримуваний тип зв’язку.");
      if (!state.elements.some(item => item.id === input.fromId) || !state.elements.some(item => item.id === input.toId)) throw new Error("Оберіть обидва елементи зв’язку.");
      if (input.fromId === input.toId) throw new Error("Елемент не може бути пов’язаний сам із собою.");
      if (input.family === "containment") {
        const childrenByParent = new Map();
        state.relationships.filter(item => item.family === "containment" && item.lifecycle === "active").forEach(item => {
          if (!childrenByParent.has(item.fromId)) childrenByParent.set(item.fromId, []);
          childrenByParent.get(item.fromId).push(item.toId);
        });
        const pending = [input.toId];
        const visited = new Set();
        while (pending.length) {
          const current = pending.pop();
          if (current === input.fromId) throw new Error("Такий зв’язок створить цикл у структурі.");
          if (visited.has(current)) continue;
          visited.add(current);
          pending.push(...(childrenByParent.get(current) || []));
        }
      }
      const duplicate = state.relationships.some(item => item.family === input.family && item.fromId === input.fromId && item.toId === input.toId && item.lifecycle === "active");
      if (duplicate) throw new Error("Такий зв’язок уже існує.");
      const relationship = {
        id: id("relationship"), workspaceId: state.workspaceId, family: input.family,
        fromId: input.fromId, toId: input.toId, label: String(input.label || "").trim(),
        qualification: QUALIFICATIONS.has(input.qualification) ? input.qualification : "known",
        effectiveFrom: input.effectiveFrom || now(), effectiveTo: null, lifecycle: "active",
        version: 1, recordedAt: now()
      };
      state.relationships.push(relationship);
      return relationship;
    }

    createRelationship(input) { return this.transact("create-relationship", state => this.addRelationshipToState(state, input)); }

    validStructuralParents(elementId) {
      const state = this.snapshot();
      const element = state?.elements.find(item => item.id === elementId);
      if (!element || !["department", "role"].includes(element.kind)) return [];
      const childrenByParent = new Map();
      state.relationships.filter(item => item.family === "containment" && item.lifecycle === "active").forEach(item => {
        if (!childrenByParent.has(item.fromId)) childrenByParent.set(item.fromId, []);
        childrenByParent.get(item.fromId).push(item.toId);
      });
      const descendants = new Set();
      const pending = [...(childrenByParent.get(elementId) || [])];
      while (pending.length) {
        const current = pending.pop();
        if (descendants.has(current)) continue;
        descendants.add(current);
        pending.push(...(childrenByParent.get(current) || []));
      }
      return state.elements.filter(candidate => {
        if (candidate.id === elementId || descendants.has(candidate.id)) return false;
        return element.kind === "role" ? candidate.kind === "department" : ["organization", "department"].includes(candidate.kind);
      });
    }

    moveElement(elementId, parentId) {
      return this.transact("move-structural-element", state => {
        const element = state.elements.find(item => item.id === elementId);
        const parent = state.elements.find(item => item.id === parentId);
        if (!element || !parent) throw new Error("Оберіть елемент і нове місце у структурі.");
        const validParentIds = new Set(this.validStructuralParents(elementId).map(item => item.id));
        if (!validParentIds.has(parentId)) throw new Error("Цей елемент не може бути батьківським у структурі.");
        const current = state.relationships.find(item => item.family === "containment" && item.toId === elementId && item.lifecycle === "active");
        if (current?.fromId === parentId) return { element, previousParentId: parentId, parentId, changed: false };
        const previousParentId = current?.fromId || null;
        if (current) {
          current.lifecycle = "superseded";
          current.effectiveTo = now();
          current.version += 1;
        }
        this.addRelationshipToState(state, { family: "containment", fromId: parentId, toId: elementId, label: "містить" });
        element.version += 1;
        element.updatedAt = now();
        return { element, previousParentId, parentId, changed: true };
      });
    }

    createInvestigationContext(elementId) {
      const element = this.snapshot()?.elements.find(item => item.id === elementId);
      if (!element) throw new Error("Контекст не знайдено.");
      return { elementId, title: `Дослідити: ${element.label}`, createdAt: now(), promoted: false };
    }

    createImprovement(input) {
      return this.transact("create-improvement", state => {
        const element = state.elements.find(item => item.id === input.elementId);
        if (!element) throw new Error("Контекст не знайдено.");
        const proposedChange = String(input.proposedChange || "").trim();
        if (!proposedChange) throw new Error("Опишіть запропоновану зміну.");
        const item = { id: id("improvement"), elementId: input.elementId, title: String(input.title || `Вдосконалення: ${element.label}`).trim(), proposedChange, state: "proposed", currentStateMutated: false, createdAt: now() };
        state.improvements.push(item);
        return item;
      });
    }

    query(options) {
      const state = this.snapshot();
      if (!state) return { elements: [], relationships: [] };
      const term = String(options?.term || "").trim().toLocaleLowerCase("uk-UA");
      const kind = options?.kind;
      return {
        elements: state.elements.filter(item => (!kind || item.kind === kind) && (!term || item.label.toLocaleLowerCase("uk-UA").includes(term))),
        relationships: state.relationships.filter(item => item.lifecycle === "active")
      };
    }

    recoveryInfo() {
      const candidates = this.adapter.listCandidates();
      return { activeGeneration: this.envelope?.generation || 0, validatedGenerations: candidates.length, schemaVersion: SCHEMA_VERSION, recovered: Boolean(this.adapter.lastLoadStatus?.recovered), failed: Boolean(this.adapter.lastLoadStatus?.failed) };
    }
  }

  window.ManagementOSOperatingModel = {
    SCHEMA_VERSION,
    ELEMENT_KINDS: Array.from(ELEMENT_KINDS),
    RELATIONSHIP_FAMILIES: Array.from(RELATIONSHIP_FAMILIES),
    BrowserPersistenceAdapter,
    OperatingModelRepository
  };
}());
