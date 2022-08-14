import { Todo } from "./types";
import React, { ChangeEvent, useContext, useState, useEffect } from "react";
import { Todos } from "./TodosProvider";

export default function TodoEditView() {
    const {todos, selected, updateTodo} = useContext(Todos);
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
        <div className="column container__column column-edit">
            <input // Todo title, as displayed in the list on the left
            className="input column-edit__input-title"
            type="text" 
            placeholder="Наименование"
            aria-placeholder="Наименование"
            value={title} 
            onChange={handleChangeTitle}></input>
            <textarea // Todo description. Optional.
            className="input input_multiline column-edit__input-description"
            placeholder="Подробное описание"
            aria-placeholder="Подробное описание"></textarea>
            <fieldset // Radio for choosing todo status
            className="input radio-group column-edit__input-status"
            defaultValue={"awaiting"}
            >
                <legend className="input radio-group_legend">Статус заметки</legend>
                
                <input
                className="input input_radio radio-group__radio"
                type="radio"
                id="status1"
                value="awaiting"
                ></input>
                <label className="input input_label radio-group__label"
                htmlFor="status1">Ожидает</label>
                
                <input
                className="input input_radio radio-group__radio"
                type="radio"
                id="status2"
                value="inProgress"
                ></input>
                <label className="input input_label radio-group__label"
                htmlFor="status2">В процессе</label>

                <input
                className="input input_radio radio-group__radio"
                type="radio"
                id="status3"
                value="done"
                ></input>
                <label className="input input_label radio-group__label"
                htmlFor="status3">Выполнена</label>
            </fieldset>
            
            <button // Dynamic button for updating/creating new todo
            className="btn btn_primary column-edit__btn-update"
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
            
            {
            todos[selected] ?
            <button // Appears only on existing items
            className="btn btn_danger column-edit__btn-delete"
            >
                Удалить
            </button> : <></>
            }
            
        </div>
    );
}