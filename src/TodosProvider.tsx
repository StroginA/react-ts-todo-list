import { createContext, useState, useEffect, useLayoutEffect } from "react";
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
    const [todos, setTodos] = useState([] as Todo[]);
    const [selected, setSelected] = useState(defaultState.selected);
    const [isLoaded, toggleLoaded] = useState(false);

    useEffect(() => {
        // Load data from local storage
        const store = localStorage.getItem('todos');
        const json = JSON.parse(store || '')
        if (json) {
            setTodos([...json]);
            // flip on the loaded flag
            toggleLoaded(true);
        }
    }, [])


    useEffect(() => {
        // save to local storage when the array is updated
        // waits until loading is done to prevent saving an empty state to storage
        if (isLoaded) {
            const json = JSON.stringify(todos);
            localStorage.setItem('todos', json);
        }
    }, [todos, isLoaded])

    // all state array updates are done by creating a new array
    const createTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    }
    const deleteTodo = (index: number) => {
        setTodos([...todos.slice(0, index), ...todos.slice(index+1)]);
    }
    const updateTodo = (todo: Todo, index: number) => {
        setTodos([...todos.slice(0, index), todo, ...todos.slice(index+1)]);
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