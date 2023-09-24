import React, { useEffect, useState } from "react";

import Note from "./note";
import CreateNote from "./create-note";
import Modal from "./modal";
import { db } from "./database";


export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    // Note: commented, used in local storage solution
    // const savedNotes = localStorage.getItem("notes");

    // Question: is this correct -> or can I get the data from IndexedDB better at the beginning?
    const getSavedNotes = async () => {
        const savedNotes = await db.notes.toArray();
        if (savedNotes) setNotes(savedNotes);
    }
    getSavedNotes();
  }, [])

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state and to the db
  const saveHandler = async () => {

    // return warning modal if no text 
    if (inputText === "") {
      Toggle();
      return;
    }

    const newNote = {
        // QUESTION: is it worth to import uuid for such a small app?
        id: Math.random().toString(),
        text: inputText,
      };

    const newNotes = [
        ...notes,
        newNote,
      ];
    setNotes(newNotes);

    // Note: commented, used in local storage solution
    // localStorage.setItem('notes', JSON.stringify(newNotes));

    await db.notes.add(newNote);

    setInputText("");
  };

  const deleteNote = async (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);

    // localStorage.setItem('notes', JSON.stringify(filteredNotes));

    await db.notes.delete(id);
  };

  return (
    <>
        <Modal
          show={modal}
          close={Toggle}
          title="Missing text for the note"
          text="Write something..." 
        />       
        <div className="notes">
            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    deleteNote={deleteNote} />
            ))}
            <CreateNote
                textHandler={textHandler}
                saveHandler={saveHandler}
                inputText={inputText} />
        </div>
    </>
  );
}
