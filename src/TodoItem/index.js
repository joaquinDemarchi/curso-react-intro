import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={`TodoItem ${props.completed && "TodoItem-p--complete"}`}>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <DeleteIcon
        setOpenModalDeleteTodo ={props.setOpenModalDeleteTodo}
      />
    </li>
  );
}

export { TodoItem };