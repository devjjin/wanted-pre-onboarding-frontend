import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import { deleteTodoAPI, getTodoAPI } from '../../apis/todos';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = (todo) => setTodos([...todos, todo]);
  const onUpdateTodo = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // const onDeleteTodo = (deleted) =>
  //   setTodos(todos.filter((t) => t.id !== deleted.id));

  const getTodo = async () => {
    try {
      const res = await getTodoAPI();
      setTodos(res.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getTodo();
  }, [todos]);

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
