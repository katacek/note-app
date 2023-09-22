import React from "react";
import PropTypes from 'prop-types';

export default function Modal({ show, close, title, text }) {
  return (
    <>
      {show ? (
        <div onClick={() => close()}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal">
                <header className="modal_header">
                    <h2 className="modal_header-title">{title}</h2>
                </header>
                <main className="modal_content">{text}</main>
                <button className="close" onClick={() => close()}>
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
