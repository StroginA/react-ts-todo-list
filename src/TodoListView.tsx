import { useContext, useState } from "react";
import {Selected} from "./SelectedProvider";
import TodoListItem from "./TodoListItem";
import type { Todo } from "./types";

export default function TodoListView() {
    const {todos, selected, setSelected} = useContext(Selected);  // Required for 'Create new' button

    const todoList = todos.map((element) => {
        // Standard React list rendering
        return (
        <TodoListItem element={element} 
        id={todos.indexOf(element)}
        key={todos.indexOf(element)}/>
        );
    });

    const handleClickCreate = (e: React.MouseEvent) => {
        // Unselect all todos to render a 'new todo' form
        setSelected(-1);
    }

    return (
        <div className="column container__column column_list">
            <button className="btn btn_primary column__btn-create"
            onClick={handleClickCreate}>
                Создать новую...
            </button>
            <input type="text" 
            className="input column__input-search"
            placeholder="Поиск по заметкам"
            aria-placeholder="Поиск по заметкам"></input>
            <div className="selectable-list">
                {todoList}
            </div>
        </div>
    );
}