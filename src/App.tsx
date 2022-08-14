import SelectedProvider from './TodosProvider';
import TodoEditView from './TodoEditView';
import TodoListView from './TodoListView';

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
