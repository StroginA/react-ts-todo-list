import { TodoStatus } from "./types";
import React, { useContext, useState, useEffect } from "react";
import { Todos } from "./TodosProvider";

export default function TodoEditView() {
    const {todos, selected, updateTodo, createTodo, deleteTodo} = useContext(Todos);
    const [title, setTitle] = useState(todos[selected]?.title || "");
    const [description, setDescription] = useState(todos[selected]?.description || "");
    const [status, setStatus] = useState(todos[selected]?.status || "awaiting" as TodoStatus);

    useEffect(() => {
        /*
        When another todo is selected, load new values into the fields
        */
        setTitle(todos[selected]?.title || "");
        setDescription(todos[selected]?.description || "");
        setStatus(todos[selected]?.status || "awaiting" as TodoStatus);
    },[todos[selected]])

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setDescription(e.target.value)
    }

    const handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.target.value as TodoStatus)
    }

    const handleUpdateTodo = (e: React.MouseEvent) => {
        /*
        Button should only be rendered with this handler if
        'selected' is a valid index
        */
        updateTodo({
            title: title,
            description: description,
            status: status
        }, selected);
    }

    const handleCreateTodo = (e: React.MouseEvent) => {
        createTodo({
            title: title,
            description: description,
            status: status
        });
    }

    const handleDeleteTodo = (e: React.MouseEvent) => {
        deleteTodo(selected);
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
            aria-placeholder="Подробное описание"
            value={description}
            onChange={handleChangeDescription}></textarea>

            <fieldset // Radio for choosing todo status
            className="input radio-group column-edit__input-status"
            >
                <legend className="input radio-group_legend">Статус заметки</legend>
                
                <input
                className="input input_radio radio-group__radio"
                type="radio"
                id="status1"
                value="awaiting"
                // Setting starting checked value
                checked={status === "awaiting" ? true : false}
                onChange={handleChangeStatus}
                ></input>
                <label className="input input_label radio-group__label"
                htmlFor="status1">Ожидает</label>
                
                <input
                className="input input_radio radio-group__radio"
                type="radio"
                id="status2"
                value="inProgress"
                // Setting starting checked value
                checked={status === "inProgress" ? true : false}
                onChange={handleChangeStatus}
                ></input>
                <label className="input input_label radio-group__label"
                htmlFor="status2">В процессе</label>

                <input
                className="input input_radio radio-group__radio"
                type="radio"
                id="status3"
                value="done"
                // Setting starting checked value
                checked={status === "done" ? true : false}
                onChange={handleChangeStatus}
                ></input>
                <label className="input input_label radio-group__label"
                htmlFor="status3">Выполнена</label>
            </fieldset>
            
            <button 
            /* 
            Dynamic button for updating/creating new todo.
            Active only if title is not empty
            */
            className={`btn btn_primary column-edit__btn-update
            ${title.length===0 ? 'btn_disabled' : ''}`}
            type="button"
            disabled={title.length===0}
            aria-disabled={title.length===0}
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
            onClick={handleDeleteTodo}
            >
                Удалить
            </button> : <></>
            }
            
        </div>
    );
}