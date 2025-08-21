"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Todos from "@/components/Todos";
import NewTodo from "@/components/NewTodo";
import Todo from "@/models/todo";

const defaultTodos = [
  {id: "react",text: "Learn React"},
  {id: "typescript",text: "Learn Typescript"},
  {id: "rest",text: "Get some sleep"},
  {id: "wake",text: "Wake up!"},
]

export default function Home() {
  // if you don't have default values, you need to specify type! like this:
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const addTodoHandler = (todoText: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text: todoText,
    };

    setTodos((previousState) => {
      return [...previousState, newTodo];
    })
  }

  const removeTodoHandler = (id: string) => {
    setTodos((previousState) => {
      return previousState.filter(todo => todo.id !== id);
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}></Todos>
    </div>
  );
}

// export default function Home() {
//   // This useContext was added only for learning purposes. This is not a good use case to use the
//   // Context API since it does not perform correctly with often changes.
//   // The Context API should be use for things such as session/login or themes (i.e light, dark)
//   const todosContext = useContext(TodosContext)

//   console.log('TodosContext.items', todosContext.items)

//   return (
//     <TodosContextProvider>
//       <NewTodo onAddTodo={todosContext.addTodo}/>
//       <Todos items={todosContext.items} onRemoveTodo={todosContext.removeTodo}></Todos>
//     </TodosContextProvider>
//   );
// }
