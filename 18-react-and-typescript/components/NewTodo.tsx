import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "@/store/todos-context";


type NewTodoProps = {
  onAddTodo: (text: string) => void;
};

// 2. Aplica el tipo a las props desestructuradas
const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Here we could have used ? operator if the value could have been null, but
    // in this case the submit handler will only work when it's not null
    const enteredText = todoTextInputRef.current!.value;
    const trimmedText = enteredText.trim()
    if (trimmedText.length === 0 ) {
      return;
    }

    onAddTodo(trimmedText);
    if (todoTextInputRef.current) {
      todoTextInputRef.current.value = "";
    }
  };

  return <form onSubmit={submitHandler} className={classes.form}>
    <label htmlFor="text">Todo text</label>
    <input type="text" id="text" ref={todoTextInputRef}/>
    <button>Add Todo</button>
  </form>
};

export default NewTodo;