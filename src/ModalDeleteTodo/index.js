import React from 'react';
import ReactDOM from 'react-dom';
import './ModalDeleteTodo.css';

function ModalDeleteTodo({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('modal')
  );
}

export { ModalDeleteTodo };
