import React, { useState } from 'react';
import { createTodoAPI } from '../../apis/todos';

export default function AddTodo({ onAdd }) {
  const [todo, setTodo] = useState('');

  const onChangeHandler = (e) => setTodo(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    try {
      await createTodoAPI(todo);
      onAdd(todo);
      setTodo('');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        value={todo}
        data-testid="new-todo-input"
        onChange={onChangeHandler}
      />
      <button type="submit" data-testid="new-todo-add-button">
        추가
      </button>
    </form>
  );
}
