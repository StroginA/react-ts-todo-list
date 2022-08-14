import React, { createContext, useContext, useEffect, useState } from 'react';
import SelectedProvider from './SelectedProvider';
import TodoEditView from './TodoEditView';
import TodoListView from './TodoListView';
import type { Todo } from './types';

export default function App() {
  const [todos, setTodos] = useState([] as Todo[]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTodos([
      {
        title: "Todo awaiting",
        status: "awaiting"
      },
      {
        title: "Todo in progress",
        status: "inProgress"
      },
      {
        title: "Todo done (very long name lorem ipsum)",
        status: "done"
      }
    ])
  }, [])

  return (
    <SelectedProvider>
      <div className="App">
        <div className="container">
          <TodoListView todos={todos} />
          <TodoEditView />
        </div>
      </div>
    </SelectedProvider>
  );
}
