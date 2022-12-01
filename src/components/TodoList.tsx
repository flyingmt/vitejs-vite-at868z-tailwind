import React from 'react';
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
        <TodoItem key={todo.id} id={todo.id} name={todo.name} />
      ))}
    </div>
  );
};

export default TodoList;
