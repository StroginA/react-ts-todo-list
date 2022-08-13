export interface Todo {
    id: number
    title: string
    description: string
    status: "awaiting" | "inProgress" | "done"
}