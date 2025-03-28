import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  const todoAllComplete = () => {
      if (completedTodos === totalTodos) 
        {return true }
      else 
        {return false}
    };
  
  if (todoAllComplete()){
    return (
      <h1 className="TodoCounter TodoCounter-allComplete">
          !FELICITACIONES! Has completado todos los To-Do's..
      </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
          Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    );
  }
}


export { TodoCounter };
