import React from 'react';

export default function TodoItem({ todo, onDelete }) {
  const onDeleteTodo = () => {
    onDelete(todo);
  };

  return (
    <li>
      <label htmlFor={todo.id}>
        <input type="checkbox" checked={todo.isCompleted} />
        <span>{todo.text}</span>
      </label>
      <button type="button" data-testid="delete-button" onClick={onDeleteTodo}>
        삭제
      </button>
    </li>
  );
}
