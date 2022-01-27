import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ title, content, actions, onDismiss }) => {
  const modal = (
    <div
      className="modal fade show"
      onClick={onDismiss}
      style={{
        display: "block",
        backgroundColor: "rgba(108,117,125, 0.8)",
      }}
    >
      <div
        className="modal-dialog pt-5"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="modal-body">
            <p>{content}</p>
          </div>
          <div className="modal-footer">{actions}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.querySelector("#modal"));
};

export default Modal;
