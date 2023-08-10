import React, { useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => setTodos([...todos, todo]);
  const onUpdateTodo = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const onDeleteTodo = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  return (
    <section>
      <AddTodo onAdd={onAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onUpdate={onUpdateTodo}
            onDelete={onDeleteTodo}
          />
        ))}
      </ul>
    </section>
  );
}
