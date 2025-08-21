import classess from "./TodoItem.module.css";

type TodoItemProps = {
  id: string,
  text: string,
  onRemoveTodo: (text: string) => void,
};

const TodoItem = ({id, text, onRemoveTodo}: TodoItemProps) => (
  <li onClick={() => onRemoveTodo(id)} className={classess.item}>{
    text}
  </li>
)

export default TodoItem;