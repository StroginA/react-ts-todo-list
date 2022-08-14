export type TodoStatus = "awaiting" | "inProgress" | "done";

export interface Todo {
    title: string;
    description?: string;
    status: TodoStatus;
}

export interface TodoContext {
    todos: Todo[];
    createTodo: (todo: Todo) => void;
    deleteTodo: (index: number) => void;
    updateTodo: (todo: Todo, index: number) => void;
    selected: number;
    setSelected: (id: number) => void;
}