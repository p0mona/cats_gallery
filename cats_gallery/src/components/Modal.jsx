import React from 'react';

const Modal = ({ cat, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <img
        src={cat.url}
        alt="Enlarged cat"
        className="modal-image"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Modal;
