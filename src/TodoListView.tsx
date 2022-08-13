export default function TodoListView() {
    return (
        <div className="column container__column column_list">
            <button className="btn btn_primary column__btn-create">
                Создать новую...
            </button>
            <input type="text" 
            className="input column__input-search"
            placeholder="Поиск по заметкам"
            aria-placeholder="Поиск по заметкам"></input>
        </div>
    );
}