import React, { useState } from 'react';

export default function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const toggleEditMode = () => {
    if (!isEdit) {
      setEditedText(todo.text);
    }
    setIsEdit(!isEdit);
  };

  const handleInputChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleUpdateTodo = () => {
    if (editedText.trim() !== '') {
      onUpdate({ ...todo, text: editedText });
      setIsEdit(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedText(todo.text);
    setIsEdit(false);
  };

  const handleDeleteTodo = () => {
    onDelete(todo);
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
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <span>{todo.text}</span>
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
              onClick={handleDeleteTodo}
            >
              삭제
            </button>
          </div>
        )}
      </div>
    </li>
  );
}
