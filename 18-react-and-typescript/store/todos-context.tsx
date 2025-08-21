"use client";

import { createContext, useState, ReactNode } from "react";
import Todo from "@/models/todo";

type TodosContextValue = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextValue>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

const defaultItems = [
  {id: "react",text: "Learn React"},
  {id: "typescript",text: "Learn Typescript"},
  {id: "rest",text: "Get some sleep"},
  {id: "wake",text: "Wake up!"},
]


export const TodosContextProvider = ({ children }: { children: ReactNode }) => {
  // if you don't have default values, you need to specify type! like this:
  // const [items, setItems] = useState<Todo[]>([]);
  const [items, setItems] = useState<Todo[]>(defaultItems);

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Math.random().toString(), text };
    setItems((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setItems((prev) => prev.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextValue = {
    items,
    addTodo,
    removeTodo
  }

  return (
    <TodosContext.Provider value={{items, addTodo, removeTodo}}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
