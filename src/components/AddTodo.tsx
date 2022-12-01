import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, Task } from '../redux/tasksSlice';

const AddTodo = () => {
  const [value, setValue] = useState<string>('');

  const dispatch = useDispatch();

  const onSubmit = (event: any) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      alert('Enter a task before adding !!');
      setValue('');
      return;
    }

    const newTask: Task = {
      id: 0,
      name: value,
    };

    dispatch(addTask(newTask));

    setValue('');
  };

  return (
    <div className="max-w-2xl mx-auto my-5">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Input task.."
          required
        ></input>
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
