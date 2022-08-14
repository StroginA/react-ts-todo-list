import { useContext, useState } from "react";
import { Selected } from "./SelectedProvider";
import { Todo } from "./types";

export default function TodoListItem (props: {
    element: Todo, 
}) {
    const {selected, setSelected} = useContext(Selected);

    const selectElement = (e: React.MouseEvent) => {
        setSelected(props.element);
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
        ${props.element === selected ?
        'selectable-list__element_selected' :
        ''}
        `}
        onClick={selectElement}>
            {props.element.title}
        </div>
    );
}