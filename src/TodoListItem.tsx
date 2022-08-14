import { useContext, useState } from "react";
import { Todos } from "./TodosProvider";
import { Todo } from "./types";

export default function TodoListItem (props: {
    element: Todo,
    id: number 
}) {
    const {todos, selected, setSelected} = useContext(Todos);

    const selectElement = (e: React.MouseEvent) => {
        setSelected(props.id);
    };

    return (
        /* 
        Conditional classes based on selection and 
        completion status
        */
        <div className={`selectable-list__element
        ${props.element.status === 'inProgress' ?
        'selectable-list__element_primary' :
        props.element.status === 'done' ?
        'selectable-list__element_success' :
        ''}
        ${props.id === selected ?
        'selectable-list__element_selected' :
        ''}
        `}
        onClick={selectElement}>
            {props.element.title}
        </div>
    );
}