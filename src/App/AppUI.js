import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';
import { TodoFormDeleteTodo } from '../TodoFormDeleteTodo';
import { ModalDeleteTodo } from '../ModalDeleteTodo';
import { TodoContext } from '../TodoContext';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openModalDeleteTodo, 
    setOpenModalDeleteTodo
  } = React.useContext(TodoContext);
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            setOpenModalDeleteTodo={setOpenModalDeleteTodo}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      
      {/* se muestra si si open modal es true */}
      {openModalDeleteTodo && (
        <ModalDeleteTodo>
          <TodoFormDeleteTodo />
        </ModalDeleteTodo>
      )}

    </>
  );
}

export { AppUI };
