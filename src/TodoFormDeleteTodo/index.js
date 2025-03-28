import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoFormDeleteTodo.css';

function TodoFormDeleteTodo() {
  const {
    deleteTodo,
    setOpenModalDeleteTodo,
  } = React.useContext(TodoContext);
  //const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    deleteTodo("terminar proyecto");
    setOpenModalDeleteTodo(false);
  };

  const onCancel = () => {
    setOpenModalDeleteTodo(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>¿ Esta seguro que desea eliminar este To-Do ?</label>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--delete"
        >Eliminar</button>
      </div>
    </form>
  );
}

export { TodoFormDeleteTodo };
