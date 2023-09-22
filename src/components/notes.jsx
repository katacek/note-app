import { React, useEffect, useState } from "react";
import Note from "./Note";
import CreateNote from "./create-note";
import Modal from "./modal";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    console.log({savedNotes})
    if (savedNotes) setNotes(JSON.parse(savedNotes));
  }, [])

  // get text and store in state
  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    // return warning modal if no text 
    if (inputText === "") {
      Toggle();
      return;
    }

    const newNotes = [
        ...notes,
        {
          id: Math.random().toString(),
          text: inputText,
        },
      ];
    // set to state
    setNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(newNotes));
    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    localStorage.setItem('notes', JSON.stringify(filteredNotes));
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
