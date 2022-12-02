import { useDispatch } from 'react-redux';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { AppDispatch } from './redux';
import { fetchTasks } from './redux/tasksSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  const refreshTask = () => {
    dispatch(fetchTasks());
  };

  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="text-3xl font-medium">Tasks list</h1>
          <button
            className="text-xl font-small"
            onClick={() => {
              refreshTask();
            }}
          >
            Get Data from Server
          </button>
        </div>
      </div>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
