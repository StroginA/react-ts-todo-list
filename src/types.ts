export interface Todo {
    title: string;
    description?: string;
    status: "awaiting" | "inProgress" | "done";
}

export interface TodoContext {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (todo: Todo) => void;
    updateTodo: (todo: Todo, index: number) => void;
    selected: number;
    setSelected: (id: number) => void;
}