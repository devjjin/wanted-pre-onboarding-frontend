import React, { useState } from 'react';
import styled from 'styled-components';

export default function AddTodo({ onAdd }) {
  const [todo, setTodo] = useState('');

  const onChangeHandler = (e) => setTodo(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (todo.trim().length === 0) {
      return;
    }
    try {
      onAdd(todo);
      setTodo('');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Input
        type="text"
        value={todo}
        data-testid="new-todo-input"
        onChange={onChangeHandler}
        placeholder="할 일 추가"
      />
      <SubmitButton type="submit" data-testid="new-todo-add-button">
        추가
      </SubmitButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
