import { createContext, FC, useState } from "react";
import type { ReactNode } from "react";
import type { SelectedTodoContext, Todo } from "./types";

const defaultState = {
    selected: null as Todo | null,
    setSelected: () => {}
}
export const Selected = createContext<SelectedTodoContext>(defaultState)

export default function SelectedProvider({children}: { children: ReactNode }) {
    /*
    Context tracking the current selected todo.
    */
    const [selected, setSelected] = useState(defaultState.selected);
    const toggleSelected = (todo: Todo | null) => {
        setSelected(todo);
    }
    return (
        <Selected.Provider value={{selected: selected, setSelected: toggleSelected}}>
            {children}
        </Selected.Provider>
    )
}