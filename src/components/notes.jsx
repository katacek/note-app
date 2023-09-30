import React, { useEffect, useState } from "react";

import Note from "./note";
import CreateNote from "./create-note";
import Modal from "./modal";
import { db } from "./database";


export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState(false);

  // FEEDBACK: Why does the Toggle function have large T at the start? 
  // That usually indicates a class/component, ale it's better to be clearer in naming. 
  // Something like "toggleModal" or "toggleEditor" would have been better. 
  // Also having toggle instead of open and close sounds like a good idea, but from experience, it usually leads to errors, 
  // because it's very easy to call it at an incorrect time and you lose fine control. 
  // And lastly if you have the function memorized, toggle function changes every time the value changes, 
  // while open/close does not rely on current value and does not change when value changes.
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    // Note: commented, used in local storage solution
    // const savedNotes = localStorage.getItem("notes");

    // Question: is this correct -> or can I get the data from IndexedDB better at the beginning?
    // FEEDBACK: This is exactly the problem react-query is solving. Your solution is correct, 
    // but you do not have any indication whether your data is already loaded or not. 
    // You could have separated this useEffect and useState (notes) into a separate hook, where you would have 2x useState, 
    // once for notes and once for loading state and then this useEffect which will set the loading state to false once you load the notes from DB.
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
        // FEEDBACK: Random number is not a great ID because for how long the string is it does not have 
        // that many options compared to a same length string which contains also letters, 
        // but it's a good enough solution here since you will not have many notes and database space is not a big concern either. 
        // UUID is a good solution, but you are correct, it's an overkill here.
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
