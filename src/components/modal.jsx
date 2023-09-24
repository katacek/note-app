import React from "react";
import PropTypes from "prop-types";

// Question: probably much better to use existing libraries, right?
// Just wanted to try it like this but the current styling deserves more love..
export default function Modal({ show, close, title, text }) {
  return (
    <>
      {show ? (
        <div onClick={() => close()}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal">
                <header>
                    <h2>{title}</h2>
                </header>
                <main>{text}</main>
                <button onClick={() => close()}>
                    I see
                </button>
            </div>
            </div>
          </div>
      ) : null}
    </>
  );
}

Modal.propTypes = {
    show: PropTypes.bool,
    close: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string,
  };
