import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

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
      onUpdate(todo.id, editedText, todo.isCompleted);
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
    onUpdate(todo.id, todo.todo, !todo.isCompleted);
  };

  return (
    <StyledLi>
      <TodoContent>
        {isEdit ? (
          <Input
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
              onChange={handleCheckboxChange}
            />
            <span>{todo.todo}</span>
          </label>
        )}
      </TodoContent>
      <ButtonGroup>
        {isEdit ? (
          <div>
            <Button
              type="button"
              data-testid="submit-button"
              onClick={handleUpdateTodo}
            >
              <FaPencilAlt />
            </Button>
            <Button
              type="button"
              data-testid="cancel-button"
              onClick={handleCancelEdit}
            >
              <GiCancel />
            </Button>
          </div>
        ) : (
          <div>
            <Button
              type="button"
              data-testid="modify-button"
              onClick={toggleEditMode}
            >
              <FaPencilAlt />
            </Button>
            <Button
              type="button"
              data-testid="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <FaTrash />
            </Button>
          </div>
        )}
      </ButtonGroup>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  width: 400px;
`;

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 3px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
