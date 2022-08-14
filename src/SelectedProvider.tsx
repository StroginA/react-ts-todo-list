import { createContext, FC, useState } from "react";
import type { ReactNode } from "react";
import type { TodoContext, Todo } from "./types";

const defaultState = {
    todos: [] as Todo[],
    selected: -1,
    addTodo: () => {},
    removeTodo: () => {},
    updateTodo: () => {},
    setSelected: () => {}
}
export const Selected = createContext<TodoContext>(defaultState)

export default function SelectedProvider({children}: { children: ReactNode }) {
    /*
    Context tracking the todos and current selected todo
    */
    const [todos, setTodos] = useState([
        {
          title: "Todo awaiting",
          status: "awaiting"
        },
        {
          title: "Todo in progress",
          status: "inProgress"
        },
        {
          title: "Todo done (very long name lorem ipsum)",
          status: "done"
        }
    ] as Todo[]);
    const [selected, setSelected] = useState(defaultState.selected);
    const addTodo = (todo: Todo) => {
    }
    const removeTodo = (todo: Todo) => {
    }
    const updateTodo = (todo: Todo, index: number) => {
        setTodos([...todos.slice(0, index), todo, ...todos.slice(index+1)])
    }
    const toggleSelected = (id: number) => {
        setSelected(id);
    }
    return (
        <Selected.Provider value={{
            todos: todos,
            addTodo: addTodo,
            removeTodo: removeTodo,
            updateTodo: updateTodo,
            selected: selected, 
            setSelected: toggleSelected
            }}>
            {children}
        </Selected.Provider>
    )
}