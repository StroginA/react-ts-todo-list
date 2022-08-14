import { useContext, useState } from "react";
import {Todos} from "./TodosProvider";
import TodoListItem from "./TodoListItem";
import type { Todo } from "./types";

export default function TodoListView() {
    const {todos, setSelected} = useContext(Todos);  // Required for 'Create new' button
    const [search, setSearch] = useState(""); 

    const searchFilter = (current: Todo) => {
        // searches todo titles, case insensitive
        return current.title.toLowerCase().includes(search.toLowerCase());
    }

    const todoList = todos.filter(searchFilter).map((element) => {
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

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div className="column container__column container__column_30 column-list">
            <button className="btn btn_primary column-list__btn-create"
            onClick={handleClickCreate}>
                Создать новую...
            </button>

            <input type="text" 
            className="input column-list__input-search"
            placeholder="Поиск по заметкам"
            aria-placeholder="Поиск по заметкам"
            value={search}
            onChange={handleChangeSearch}></input>

            <div className="selectable-list">
                {todoList}
            </div>
        </div>
    );
}