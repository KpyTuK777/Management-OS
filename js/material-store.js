(function () {
  "use strict";
  const DB_NAME = "management-os-materials";
  const DB_VERSION = 1;
  const META_KEY = "management-os-material-metadata-v1";
  const clone = value => JSON.parse(JSON.stringify(value));
  const id = () => `MAT-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

  function openDb() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => request.result.createObjectStore("payloads", { keyPath: "id" });
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  function metadata() { try { return JSON.parse(localStorage.getItem(META_KEY)) || []; } catch (_) { return []; } }
  function saveMetadata(items) { localStorage.setItem(META_KEY, JSON.stringify(items)); }
  async function putPayload(materialId, blob) {
    if (!blob) return;
    const db = await openDb();
    await new Promise((resolve, reject) => { const tx = db.transaction("payloads", "readwrite"); tx.objectStore("payloads").put({ id: materialId, blob }); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
    db.close();
  }
  async function getPayload(materialId) {
    const db = await openDb();
    const value = await new Promise((resolve, reject) => { const request = db.transaction("payloads").objectStore("payloads").get(materialId); request.onsuccess = () => resolve(request.result?.blob || null); request.onerror = () => reject(request.error); });
    db.close(); return value;
  }
  async function deletePayload(materialId) {
    const db = await openDb();
    await new Promise((resolve, reject) => { const tx = db.transaction("payloads", "readwrite"); tx.objectStore("payloads").delete(materialId); tx.oncomplete = resolve; tx.onerror = () => reject(tx.error); });
    db.close();
  }
  async function create(input) {
    const material = { id: id(), title: input.title.trim(), description: (input.description || "").trim(), kind: input.kind || (input.file ? "file" : input.url ? "link" : "text"), mimeType: input.file?.type || input.mimeType || "text/plain", fileName: input.file?.name || null, size: input.file?.size || 0, url: input.url || null, text: input.text || null, sourcePersonId: input.sourcePersonId || null, sourceName: input.sourceName || null, sourceRole: input.sourceRole || null, sourceDepartment: input.sourceDepartment || null, contributedAt: input.contributedAt || new Date().toISOString(), contexts: clone(input.contexts || []), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), corrections: [] };
    await putPayload(material.id, input.file || null);
    try { const items = metadata(); items.unshift(material); saveMetadata(items); return clone(material); }
    catch (error) { await deletePayload(material.id); throw error; }
  }
  function list(filters = {}) { return metadata().filter(item => !filters.contextId || item.contexts.some(context => context.id === filters.contextId)).map(clone); }
  function get(materialId) { const found = metadata().find(item => item.id === materialId); return found ? clone(found) : null; }
  function link(materialId, context) { const items = metadata(); const item = items.find(entry => entry.id === materialId); if (!item) throw new Error("Матеріал не знайдено."); if (!item.contexts.some(entry => entry.type === context.type && entry.id === context.id)) item.contexts.push(clone(context)); item.updatedAt = new Date().toISOString(); saveMetadata(items); return clone(item); }
  function correct(materialId, text) { const items = metadata(); const item = items.find(entry => entry.id === materialId); if (!item) throw new Error("Матеріал не знайдено."); item.corrections.push({ text: text.trim(), at: new Date().toISOString() }); item.updatedAt = new Date().toISOString(); saveMetadata(items); return clone(item); }
  window.MaterialStore = { create, list, get, link, correct, getPayload };
})();
