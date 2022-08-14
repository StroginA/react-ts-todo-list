import { Todo } from "./types";
import React, { ChangeEvent, useContext, useState } from "react";
import { Selected } from "./SelectedProvider";

export default function TodoEditView() {
    const {selected, setSelected} = useContext(Selected);
    const [title, setTitle] = useState(selected?.title || "");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleUpdateTodo = (e: React.MouseEvent) => {
        if (selected) {
            setSelected({
                title: title,
                status: selected.status
            });
        }
    }

    const handleCreateTodo = (e: React.MouseEvent) => {

    }

    return (
        <div className="column container__column column_edit">
            <input type="text" value={title} 
            onChange={handleChangeTitle}></input>
            <button onClick={
                selected ?
                handleUpdateTodo :
                handleCreateTodo
            }>
                {
                    selected ?
                    "Обновить..." :
                    "Создать..."
                }
            </button>
        </div>
    );
}