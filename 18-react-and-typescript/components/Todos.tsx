import TodoModel from "@/models/todo";
import TodoItem from "./TodoItem"
import classess from "./Todos.module.css";

type TodosProps = {
  items: TodoModel[],
  onRemoveTodo: (text: string) => void,
};


// this could also be achieved by using React.FC
// const Todos: React.FC<{items: Todo[]}> = ({items}) => (
const Todos = ({ items, onRemoveTodo }: TodosProps) => (
  <ul className={classess.todos}>
    {items.map(item => 
      <TodoItem key={item.id} id={item.id} text={item.text} onRemoveTodo={onRemoveTodo}/>
    )}
  </ul>
);

export default Todos;