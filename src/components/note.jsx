import React from "react";
import PropTypes from 'prop-types';

// import styles from "@/styles/Home.module.css";

export default function Note({ id, text, deleteNote }) {
  return (
    <div className="note">
      <div className="note-text">{text}</div>
      <div className="note-button">
        <button onClick={() => deleteNote(id)}>Delete me</button>
      </div>
    </div>
  );
}

Note.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    deleteNote: PropTypes.func,
  };
