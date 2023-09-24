import Dexie from "dexie";

// Note: I have tried it without Dexie library but got little bit lost
// Like this, it is pretty straight-forward
export const db = new Dexie("NotesDatabase");
db.version(1).stores({
    notes: "id"
});