import React, { useState } from 'react';
import { createTodoAPI } from '../../apis/todos';

export default function AddTodo({ onAdd }) {
  const [todo, setTodo] = useState('');

  const onChangeHandler = (e) => setTodo(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }

    createTodoAPI(todo)
      .then(() => {
        onAdd(todo);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
    setTodo('');
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
