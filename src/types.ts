export interface Todo {
    title: string;
    description?: string;
    status: "awaiting" | "inProgress" | "done";
}

export interface SelectedTodoContext {
    selected: Todo | null;
    setSelected: (todo: Todo | null) => void;
}