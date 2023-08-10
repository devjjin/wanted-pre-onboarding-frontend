import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <AddTodo onAdd={onAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </ul>
    </section>
  );
}
