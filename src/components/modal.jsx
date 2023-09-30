import React from "react";
import PropTypes from "prop-types";

// Question: probably much better to use existing libraries, right?
// Just wanted to try it like this but the current styling deserves more love..

// FEEDBACK: It's fine to not use libraries for such a simple component. They are usually huge.
// Second point:
// if (!show) return null
// Would have made this much more readable :)
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
    // The close prop is actually required, without it the component will break, so it should be marked as required here too.
    close: PropTypes.func,
    title: PropTypes.string,
    text: PropTypes.string,
  };
