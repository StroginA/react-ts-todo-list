import React, { useState } from 'react';
import TodoEditView from './TodoEditView';
import TodoListView from './TodoListView';
import type { Todo } from './types';


export default function App() {
  const [state, setState] = useState({
    todoList: [] as Todo[],
    searchTerm: "",
    isCreatingNew: true
  });

  return (
    <div className="App">
      <div className="container">
        <TodoListView />
        <TodoEditView />
      </div>
    </div>
  );
}
