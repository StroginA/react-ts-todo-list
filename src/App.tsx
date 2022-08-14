import React, { createContext, useContext, useEffect, useState } from 'react';
import SelectedProvider from './TodosProvider';
import TodoEditView from './TodoEditView';
import TodoListView from './TodoListView';
import type { Todo } from './types';

export default function App() {

  return (
    <SelectedProvider>
      <div className="App">
        <div className="container">
          <TodoListView />
          <TodoEditView />
        </div>
      </div>
    </SelectedProvider>
  );
}
