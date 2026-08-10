(function () {
  "use strict";

  const SCHEMA_VERSION = 2;
  const POINTER_KEY = "management-os-operating-model-active-v1";
  const GENERATION_PREFIX = "management-os-operating-model-generation-v1-";
  const MAX_RETAINED_GENERATIONS = 3;
  const PERSON_DELETION_PREFIX = "management-os-person-deletion-v1-";

  const ELEMENT_KINDS = new Set([
    "organization", "department", "role", "process", "system", "sop", "measure",
    "report", "meeting", "interaction", "unknown"
  ]);
  const RELATIONSHIP_FAMILIES = new Set([
    "containment", "reporting", "responsibility", "participation", "dependency",
    "information-flow", "material-flow", "association", "interaction"
  ]);
  const QUALIFICATIONS = new Set(["known", "unknown", "incomplete", "stale", "disputed"]);
  const PEOPLE_RELATIONSHIP_FAMILIES = new Set(["role-occupancy", "department-membership"]);

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
      roleCapacityAssertions: [],
      persons: [],
      peopleRelationships: [],
      deletionLedger: [],
      revisions: [],
      investigations: [],
      improvements: [],
      ui: { savedLens: "structure" }
    };
  }
  function ensureV2State(state) {
    state.roleCapacityAssertions = Array.isArray(state.roleCapacityAssertions) ? state.roleCapacityAssertions : [];
    state.persons = Array.isArray(state.persons) ? state.persons : [];
    state.peopleRelationships = Array.isArray(state.peopleRelationships) ? state.peopleRelationships : [];
    state.deletionLedger = Array.isArray(state.deletionLedger) ? state.deletionLedger : [];
    return state;
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
    const capacityIds = new Set();
    (state.roleCapacityAssertions || []).forEach(assertion => {
      if (!assertion.id || capacityIds.has(assertion.id) || assertion.workspaceId !== workspaceId || assertion.meaning !== "planned") throw new Error("Некоректна планова місткість ролі.");
      if (!Number.isInteger(assertion.plannedCapacity) || assertion.plannedCapacity <= 0) throw new Error("Планова кількість має бути додатним цілим числом.");
      if (!QUALIFICATIONS.has(assertion.qualification) || !["active", "superseded", "withdrawn", "corrected"].includes(assertion.lifecycle)) throw new Error("Планова місткість має невідомий стан.");
      if (!Number.isFinite(new Date(assertion.effectiveFrom).getTime()) || (assertion.effectiveTo && new Date(assertion.effectiveTo).getTime() <= new Date(assertion.effectiveFrom).getTime())) throw new Error("Планова місткість має некоректний інтервал.");
      const role = state.elements.find(item => item.id === assertion.roleId && item.kind === "role");
      const scope = state.elements.find(item => item.id === assertion.scopeId && ["department", "organization"].includes(item.kind));
      if (!role || !scope) throw new Error("Планова місткість містить невідомий контекст.");
      capacityIds.add(assertion.id);
    });
    const applicable = (state.roleCapacityAssertions || []).filter(item => item.lifecycle === "active");
    applicable.forEach((left, index) => applicable.slice(index + 1).forEach(right => {
      if (left.roleId !== right.roleId || left.scopeId !== right.scopeId) return;
      const leftEnd = left.effectiveTo ? new Date(left.effectiveTo).getTime() : Infinity;
      const rightEnd = right.effectiveTo ? new Date(right.effectiveTo).getTime() : Infinity;
      if (new Date(left.effectiveFrom).getTime() < rightEnd && new Date(right.effectiveFrom).getTime() < leftEnd) throw new Error("Перекривні планові місткості потрібно вирішити явно.");
    }));
    const personIds = new Set();
    (state.persons || []).forEach(person => {
      if (!person.id || personIds.has(person.id) || person.workspaceId !== workspaceId || !String(person.displayName || "").trim()) throw new Error("Некоректна особа в моделі організації.");
      personIds.add(person.id);
    });
    (state.peopleRelationships || []).forEach(relationship => {
      if (!relationship.id || relationship.workspaceId !== workspaceId || !PEOPLE_RELATIONSHIP_FAMILIES.has(relationship.family)) throw new Error("Некоректний зв’язок людини.");
      if (relationship.personId && !personIds.has(relationship.personId)) throw new Error("Зв’язок містить невідому особу.");
      if (!relationship.personId && !relationship.deletedPersonId) throw new Error("Зв’язок не має допустимого учасника.");
      const expectedKind = relationship.family === "role-occupancy" ? "role" : "department";
      if (!state.elements.some(item => item.id === relationship.targetId && item.kind === expectedKind)) throw new Error("Зв’язок людини має неправильний контекст.");
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

    deletedPersonIds(workspaceId) {
      const result = new Set();
      for (let index = 0; index < this.storage.length; index += 1) {
        const key = this.storage.key(index);
        if (key?.startsWith(`${PERSON_DELETION_PREFIX}${workspaceId}-`)) result.add(key.slice(`${PERSON_DELETION_PREFIX}${workspaceId}-`.length));
      }
      return result;
    }

    isValidEnvelope(envelope) {
      if (!envelope || ![1, SCHEMA_VERSION].includes(envelope.schemaVersion) || envelope.commitMarker !== "committed") return false;
      if (!Number.isInteger(envelope.generation) || envelope.generation < 1 || !envelope.workspaceId) return false;
      if (checksum(payloadForChecksum(envelope)) !== envelope.checksum) return false;
      validateState(envelope.state, envelope.workspaceId);
      const deletedIds = this.deletedPersonIds(envelope.workspaceId);
      if ((envelope.state.persons || []).some(person => deletedIds.has(person.id))) return false;
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

    erasePerson(workspaceId, personId, sanitizedState) {
      const markerKey = `${PERSON_DELETION_PREFIX}${workspaceId}-${personId}`;
      const priorEnvelope = this.listCandidates().find(item => item.envelope.workspaceId === workspaceId)?.envelope || null;
      this.storage.setItem(markerKey, JSON.stringify({ personId, deletedAt: now() }));
      let sanitizedEnvelope;
      try {
        sanitizedEnvelope = this.commit(ensureV2State(clone(sanitizedState)), priorEnvelope);
      } catch (error) {
        throw error;
      }
      const activeKey = this.storage.getItem(POINTER_KEY);
      const generationKeys = [];
      for (let index = 0; index < this.storage.length; index += 1) {
        const key = this.storage.key(index);
        if (key?.startsWith(`${GENERATION_PREFIX}${workspaceId}-`) && key !== activeKey) generationKeys.push(key);
      }
      generationKeys.forEach(key => this.storage.removeItem(key));
      return sanitizedEnvelope;
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
      if (this.envelope?.schemaVersion === 1) {
        const migrated = ensureV2State(clone(this.envelope.state));
        migrated.revisions.push({ id: id("revision"), command: "migrate-operating-model-v1-to-v2", recordedAt: now(), generation: this.envelope.generation + 1 });
        this.envelope = this.adapter.commit(migrated, this.envelope);
      }
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
      const from = state.elements.find(item => item.id === input.fromId);
      const to = state.elements.find(item => item.id === input.toId);
      const organizational = new Set(["organization", "department", "role"]);
      const work = new Set(["process", "system", "sop", "measure", "report", "meeting"]);
      const validKinds = input.family === "reporting" ? [new Set(["department", "role"]), organizational]
        : ["information-flow", "material-flow", "interaction"].includes(input.family) ? [new Set(["department"]), new Set(["department"])]
          : input.family === "responsibility" ? [new Set(["department", "role"]), work]
            : input.family === "dependency" ? [new Set([...organizational, "process"]), new Set([...organizational, ...work])]
              : input.family === "association" ? [new Set([...organizational, "process"]), new Set([...work, "department"])] : null;
      if (validKinds && (!validKinds[0].has(from.kind) || !validKinds[1].has(to.kind))) throw new Error("Оберіть учасників, які відповідають цьому виду зв’язку.");
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

    moveElement(elementId, parentId, options = {}) {
      return this.transact("move-structural-element", state => {
        const element = state.elements.find(item => item.id === elementId);
        const parent = state.elements.find(item => item.id === parentId);
        if (!element || !parent) throw new Error("Оберіть елемент і нове місце у структурі.");
        const validParentIds = new Set(this.validStructuralParents(elementId).map(item => item.id));
        if (!validParentIds.has(parentId)) throw new Error("Цей елемент не може бути батьківським у структурі.");
        const current = state.relationships.find(item => item.family === "containment" && item.toId === elementId && item.lifecycle === "active");
        if (current?.fromId === parentId) return { element, previousParentId: parentId, parentId, changed: false };
        const previousParentId = current?.fromId || null;
        if (options.effectiveAt && new Date(options.effectiveAt).getTime() > Date.now()) throw new Error("Майбутнє переміщення потребує окремого планування; поточну структуру не змінено.");
        const scopedCapacity = element.kind === "role" ? state.roleCapacityAssertions.find(item => item.roleId === elementId && item.scopeId === previousParentId && item.lifecycle === "active" && !item.effectiveTo) : null;
        if (scopedCapacity && !options.endScopedCapacity) throw new Error("Перед переміщенням завершіть планову кількість у поточному підрозділі або скасуйте переміщення.");
        if (scopedCapacity) { scopedCapacity.lifecycle = "superseded"; scopedCapacity.effectiveTo = options.effectiveAt || now(); scopedCapacity.version += 1; }
        if (current) {
          current.lifecycle = "superseded";
          current.effectiveTo = now();
          current.version += 1;
        }
        this.addRelationshipToState(state, { family: "containment", fromId: parentId, toId: elementId, label: "містить" });
        element.version += 1;
        element.updatedAt = now();
        return { element, previousParentId, parentId, changed: true, endedCapacityId: scopedCapacity?.id || null };
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

    createRoleCapacity(input) {
      return this.transact("create-role-planned-capacity", state => {
        const role = state.elements.find(item => item.id === input.roleId && item.kind === "role");
        const scope = state.elements.find(item => item.id === input.scopeId && ["department", "organization"].includes(item.kind));
        const value = Number(input.plannedCapacity);
        if (!role || !scope) throw new Error("Оберіть роль і підрозділ.");
        if (!Number.isInteger(value) || value <= 0) throw new Error("Планова кількість має бути додатним цілим числом.");
        const effectiveFrom = input.effectiveFrom || now();
        if (!Number.isFinite(new Date(effectiveFrom).getTime())) throw new Error("Вкажіть коректний початок дії плану.");
        const current = state.roleCapacityAssertions.find(item => item.roleId === role.id && item.scopeId === scope.id && item.lifecycle === "active" && !item.effectiveTo);
        if (current && new Date(effectiveFrom).getTime() <= new Date(current.effectiveFrom).getTime()) throw new Error("Перекривний або зворотний інтервал потрібно виправити чи позначити як спірний явно.");
        if (current) { current.effectiveTo = effectiveFrom; if (new Date(effectiveFrom).getTime() <= Date.now()) current.lifecycle = "superseded"; current.version += 1; }
        const assertion = { id: id("capacity"), workspaceId: state.workspaceId, roleId: role.id, scopeId: scope.id, meaning: "planned", plannedCapacity: value, qualification: QUALIFICATIONS.has(input.qualification) ? input.qualification : "known", effectiveFrom, effectiveTo: null, lifecycle: "active", version: 1, recordedAt: now(), ownershipMode: "operating-model-owned", updateOwner: "accountable-local-owner" };
        state.roleCapacityAssertions.push(assertion);
        return assertion;
      });
    }

    endRoleCapacity(assertionId, options = {}) {
      return this.transact("end-role-planned-capacity", state => {
        const assertion = state.roleCapacityAssertions.find(item => item.id === assertionId && item.lifecycle === "active");
        if (!assertion) throw new Error("Актуальний план не знайдено.");
        assertion.lifecycle = options.withdrawn ? "withdrawn" : "superseded";
        assertion.effectiveTo = options.effectiveTo || now();
        assertion.version += 1;
        return assertion;
      });
    }

    correctRoleCapacity(assertionId, plannedCapacity) {
      return this.transact("correct-role-planned-capacity", state => {
        const previous = state.roleCapacityAssertions.find(item => item.id === assertionId && item.lifecycle === "active");
        const value = Number(plannedCapacity);
        if (!previous) throw new Error("Актуальний план не знайдено.");
        if (!Number.isInteger(value) || value <= 0) throw new Error("Планова кількість має бути додатним цілим числом.");
        previous.lifecycle = "corrected"; previous.effectiveTo = now(); previous.version += 1;
        const corrected = { ...clone(previous), id: id("capacity"), plannedCapacity: value, lifecycle: "active", effectiveFrom: previous.effectiveFrom, effectiveTo: null, version: 1, recordedAt: now(), correctsId: previous.id };
        state.roleCapacityAssertions.push(corrected); return corrected;
      });
    }

    disputeRoleCapacity(assertionId) {
      return this.transact("dispute-role-planned-capacity", state => {
        const assertion = state.roleCapacityAssertions.find(item => item.id === assertionId && item.lifecycle === "active");
        if (!assertion) throw new Error("Актуальний план не знайдено.");
        assertion.qualification = "disputed"; assertion.version += 1; return assertion;
      });
    }

    currentRoleCapacity(roleId, scopeId, at = now()) {
      const time = new Date(at).getTime();
      return (this.snapshot()?.roleCapacityAssertions || []).filter(item => item.roleId === roleId && (!scopeId || item.scopeId === scopeId) && item.lifecycle === "active" && new Date(item.effectiveFrom).getTime() <= time && (!item.effectiveTo || new Date(item.effectiveTo).getTime() > time)).sort((a, b) => new Date(b.effectiveFrom) - new Date(a.effectiveFrom))[0] || null;
    }

    createPerson(input) {
      if (input.purpose !== "team-composition") throw new Error("Ця дія недоступна поза контекстом команди.");
      return this.transact("create-person", state => {
        const displayName = String(input.displayName || "").trim();
        if (!displayName) throw new Error("Вкажіть ім’я та прізвище.");
        const createdAt = now();
        const reviewAt = new Date(new Date(createdAt).getTime() + 365 * 86400000).toISOString();
        const person = { id: id("person"), workspaceId: state.workspaceId, displayName, qualification: "known", lifecycle: "active", visibility: "permitted", purpose: "team-composition", ownershipMode: "operating-model-owned", createdAt, updatedAt: createdAt, reviewAt, version: 1 };
        state.persons.push(person);
        if (input.roleId) this.addPeopleRelationshipToState(state, { family: "role-occupancy", personId: person.id, targetId: input.roleId, effectiveFrom: input.effectiveFrom });
        if (input.departmentId) this.addPeopleRelationshipToState(state, { family: "department-membership", personId: person.id, targetId: input.departmentId, effectiveFrom: input.effectiveFrom });
        return person;
      });
    }

    addPeopleRelationshipToState(state, input) {
      if (!PEOPLE_RELATIONSHIP_FAMILIES.has(input.family) || !state.persons.some(item => item.id === input.personId)) throw new Error("Некоректний зв’язок людини.");
      const expectedKind = input.family === "role-occupancy" ? "role" : "department";
      if (!state.elements.some(item => item.id === input.targetId && item.kind === expectedKind)) throw new Error("Оберіть відповідний організаційний контекст.");
      const effectiveFrom = input.effectiveFrom || now();
      const current = state.peopleRelationships.find(item => item.personId === input.personId && item.family === input.family && item.lifecycle === "active" && !item.effectiveTo);
      if (current && new Date(effectiveFrom).getTime() <= new Date(current.effectiveFrom).getTime()) throw new Error("Новий організаційний контекст не може перекривати чинний інтервал.");
      if (current) { current.effectiveTo = effectiveFrom; if (new Date(effectiveFrom).getTime() <= Date.now()) current.lifecycle = "superseded"; current.version += 1; }
      const relationship = { id: id("people-relationship"), workspaceId: state.workspaceId, family: input.family, personId: input.personId, targetId: input.targetId, effectiveFrom, effectiveTo: null, lifecycle: "active", qualification: "known", version: 1, recordedAt: now() };
      state.peopleRelationships.push(relationship);
      return relationship;
    }

    assignPerson(input) {
      if (!["team-composition", "occupancy-selection"].includes(input.purpose)) throw new Error("Ця дія недоступна в поточному контексті.");
      return this.transact("assign-person", state => this.addPeopleRelationshipToState(state, input));
    }

    assignPersonContext(input) {
      if (!['team-composition', 'occupancy-selection'].includes(input.purpose)) throw new Error("Ця дія недоступна в поточному контексті.");
      return this.transact("assign-person-context", state => {
        const occupancy = this.addPeopleRelationshipToState(state, { family: "role-occupancy", personId: input.personId, targetId: input.roleId, effectiveFrom: input.effectiveFrom });
        const membership = this.addPeopleRelationshipToState(state, { family: "department-membership", personId: input.personId, targetId: input.departmentId, effectiveFrom: input.effectiveFrom });
        return { occupancy, membership };
      });
    }

    reattestPerson(personId, options = {}) {
      if (options.purpose !== "retention-review") throw new Error("Підтвердження доступне лише під час перегляду мети.");
      return this.transact("reattest-person-purpose", state => {
        const person = state.persons.find(item => item.id === personId);
        if (!person) throw new Error("Особу не знайдено.");
        person.reviewAt = new Date(Date.now() + 365 * 86400000).toISOString(); person.lifecycle = "active"; person.updatedAt = now(); person.version += 1; return person;
      });
    }

    revisePerson(personId, changes) {
      if (!["person-workbench", "retention-review"].includes(changes.purpose)) throw new Error("Зміна недоступна поза дозволеним контекстом.");
      return this.transact("revise-person", state => {
        const person = state.persons.find(item => item.id === personId);
        if (!person) throw new Error("Особу не знайдено.");
        state.revisions.push({ id: id("revision"), command: "person-snapshot", recordedAt: now(), person: clone(person) });
        if (changes.displayName !== undefined) { const name = String(changes.displayName).trim(); if (!name) throw new Error("Ім’я не може бути порожнім."); person.displayName = name; }
        if (["active", "disputed", "redacted"].includes(changes.lifecycle)) person.lifecycle = changes.lifecycle;
        if (["permitted", "restricted"].includes(changes.visibility)) person.visibility = changes.visibility;
        person.updatedAt = now(); person.version += 1; return person;
      });
    }

    visiblePersons(options = {}) {
      const at = new Date(options.at || now()).getTime();
      if (!['team-composition', 'occupancy-selection', 'person-workbench', 'retention-review'].includes(options.purpose)) return [];
      return (this.snapshot()?.persons || []).filter(person => person.visibility === "permitted" && person.lifecycle !== "redacted" && (new Date(person.reviewAt).getTime() > at || options.purpose === "retention-review"));
    }

    deletePerson(personId, options = {}) {
      if (!["person-workbench", "retention-review"].includes(options.purpose)) throw new Error("Видалення недоступне поза дозволеним контекстом.");
      if (!this.envelope) throw new Error("Модель не відкрита.");
      const state = ensureV2State(clone(this.envelope.state));
      const person = state.persons.find(item => item.id === personId);
      if (!person) throw new Error("Особу не знайдено.");
      state.persons = state.persons.filter(item => item.id !== personId);
      state.peopleRelationships.forEach(item => { if (item.personId === personId) { item.deletedPersonId = personId; item.personId = null; item.lifecycle = "redacted"; item.deletedLabel = "Особу видалено"; item.version += 1; } });
      state.revisions = state.revisions.filter(item => item.person?.id !== personId);
      state.deletionLedger.push({ personId, deletedAt: now(), nonReconstructive: true });
      this.envelope = this.adapter.erasePerson(state.workspaceId, personId, state);
      this.notify();
      return { personId, deleted: true };
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
      return { activeGeneration: this.envelope?.generation || 0, validatedGenerations: candidates.length, schemaVersion: this.envelope?.schemaVersion || SCHEMA_VERSION, recovered: Boolean(this.adapter.lastLoadStatus?.recovered), failed: Boolean(this.adapter.lastLoadStatus?.failed) };
    }
  }

  window.ManagementOSOperatingModel = {
    SCHEMA_VERSION,
    ELEMENT_KINDS: Array.from(ELEMENT_KINDS),
    RELATIONSHIP_FAMILIES: Array.from(RELATIONSHIP_FAMILIES),
    PEOPLE_RELATIONSHIP_FAMILIES: Array.from(PEOPLE_RELATIONSHIP_FAMILIES),
    BrowserPersistenceAdapter,
    OperatingModelRepository
  };
}());
