import React from 'react';
import { TodoIcon } from './';

function DeleteIcon({ setOpenModalDeleteTodo }) {
  console.log('llega hasta la funcion delete icon');
  return (
    <TodoIcon
      type="delete"
      color="gray"
      onClick={
        () => {
          setOpenModalDeleteTodo(state => !state);
        }
      }
    />
  );
}

export { DeleteIcon };
