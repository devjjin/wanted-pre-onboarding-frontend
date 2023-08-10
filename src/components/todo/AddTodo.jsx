import React, { useState } from 'react';

export default function AddTodo({ onAdd }) {
  const [todo, setTodo] = useState('');

  const onChangeHandler = (e) => setTodo(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text: todo,
      isCompleted: false,
    };
    onAdd(newTodo);
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
