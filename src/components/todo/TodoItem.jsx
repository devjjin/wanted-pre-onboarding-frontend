import React, { useState } from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.todo);

  const toggleEditMode = () => {
    if (!isEdit) {
      setEditedText(todo.todo);
    }
    setIsEdit(!isEdit);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleUpdateTodo = () => {
    if (editedText.trim() !== '') {
      onUpdate({ ...todo, todo: editedText });
      setIsEdit(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedText(todo.todo);
    setIsEdit(false);
  };

  const handleDeleteTodo = (id) => {
    onDelete(id);
  };

  const handleCheckboxChange = () => {
    onUpdate({ ...todo, isCompleted: !todo.isCompleted });
  };

  return (
    <li>
      {isEdit ? (
        <input
          type="text"
          value={editedText}
          onChange={handleInputChange}
          data-testid="modify-input"
        />
      ) : (
        <label htmlFor={todo.id}>
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleCheckboxChange}
          />
          <span>{todo.todo}</span>
        </label>
      )}
      <div>
        {isEdit ? (
          <div>
            <button
              type="button"
              data-testid="submit-button"
              onClick={handleUpdateTodo}
            >
              제출
            </button>
            <button
              type="button"
              data-testid="cancel-button"
              onClick={handleCancelEdit}
            >
              취소
            </button>
          </div>
        ) : (
          <div>
            <button
              type="button"
              data-testid="modify-button"
              onClick={toggleEditMode}
            >
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
