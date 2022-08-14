import { Todo } from "./types";
import React, { ChangeEvent, useContext, useState, useEffect } from "react";
import { Selected } from "./SelectedProvider";

export default function TodoEditView() {
    const {todos, selected, updateTodo} = useContext(Selected);
    const [title, setTitle] = useState("");

    useEffect(() => {
        /*
        When another todo is selected, load new values into the fields
        */
        setTitle(todos[selected]?.title || "");
    },[todos[selected]])

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleUpdateTodo = (e: React.MouseEvent) => {
        if (todos[selected]) {
            updateTodo({
                title: title,
                description: todos[selected].description,
                status: todos[selected].status
            }, selected)
        }
    }

    const handleCreateTodo = (e: React.MouseEvent) => {

    }

    return (
        <div className="column container__column column_edit">
            <input type="text" value={title} 
            onChange={handleChangeTitle}></input>
            <button // Dynamic button for updating/creating new todo
            className="btn btn_primary"
            onClick={
                todos[selected] ?
                handleUpdateTodo :
                handleCreateTodo
            }>
                {
                    todos[selected] ?
                    "Обновить..." :
                    "Создать..."
                }
            </button>
        </div>
    );
}