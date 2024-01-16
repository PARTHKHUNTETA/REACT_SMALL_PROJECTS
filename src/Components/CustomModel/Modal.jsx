import React from "react";

const Modal = ({ id, header, content, footer, onClose }) => {
  return (
    <div id={id || "Modal"} className="modal-popup">
      <div className="modal-content">
        <div className="header-model">
          <span onClick={onClose} className="close-model-icon">
            &times;
          </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="content-model">
          {content ? content : <h2>Some Content</h2>}
        </div>
        <div className="footer-model">{footer ? footer : <h2>Footer</h2>}</div>
      </div>
    </div>
  );
};

export default Modal;
