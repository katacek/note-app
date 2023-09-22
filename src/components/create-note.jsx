import React from "react";
import PropTypes from 'prop-types';

export default function CreateNote({ textHandler, saveHandler, inputText }) {
  return (
    <div className='note'>
      <div className="note-text">
      <textarea
        cols="10"
        rows="9"
        placeholder="Type...."
        value={inputText}
        maxLength="100"
        onChange={textHandler}
      ></textarea>
      </div>
      <div className="note-button">
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

CreateNote.propTypes = {
  textHandler: PropTypes.func,
  saveHandler: PropTypes.func,
  inputText: PropTypes.string,
};
