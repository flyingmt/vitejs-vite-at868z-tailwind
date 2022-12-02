import { useSelector } from 'react-redux';
import { RootState } from '../redux';
import { Task } from '../redux/tasksSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: RootState) => {
    return state.tasks;
  });

  return (
    <div id="tasks" className="my-5">
      {todos.map((todo: Task) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
