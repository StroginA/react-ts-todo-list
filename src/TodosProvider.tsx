import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { TodoContext, Todo } from "./types";

const defaultState = {
    todos: [] as Todo[],
    selected: -1,
    createTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    setSelected: () => {}
}
export const Todos = createContext<TodoContext>(defaultState)

export default function TodosProvider({children}: { children: ReactNode }) {
    /*
    Context tracking the todos and current selected todo.
    Selected todo is tracked by index for convenience.
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
    // all state array updates are done by creating a new array
    const createTodo = (todo: Todo) => {
        setTodos([...todos, todo])
    }
    const deleteTodo = (index: number) => {
        setTodos([...todos.slice(0, index), ...todos.slice(index+1)])
    }
    const updateTodo = (todo: Todo, index: number) => {
        setTodos([...todos.slice(0, index), todo, ...todos.slice(index+1)])
    }
    const toggleSelected = (id: number) => {
        setSelected(id);
    }
    return (
        <Todos.Provider value={{
            todos: todos,
            createTodo: createTodo,
            deleteTodo: deleteTodo,
            updateTodo: updateTodo,
            selected: selected, 
            setSelected: toggleSelected
            }}>
            {children}
        </Todos.Provider>
    )
}