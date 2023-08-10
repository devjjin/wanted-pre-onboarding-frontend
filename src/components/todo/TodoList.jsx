import React, { useState } from 'react';
import AddTodo from './AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => setTodos([...todos, todo]);

  return (
    <section>
      <AddTodo onAdd={onAddTodo} />
      <ul>
        {todos.map((item) => (
          <li key={item.id} />
        ))}
      </ul>
    </section>
  );
}
