import React, { useEffect, useState } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import {
  createTodoAPI,
  deleteTodoAPI,
  getTodoAPI,
  updateTodoAPI,
} from '../../apis/todos';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = async (todo) => {
    try {
      const response = await createTodoAPI(todo);
      const newTodo = response.data;
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await deleteTodoAPI(id);
      setTodos(todos.filter((t) => t.id !== id));
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const onUpdateTodo = async (id, updatedTodo, updatedCheck) => {
    try {
      const res = await updateTodoAPI(id, updatedTodo, updatedCheck);
      const newTodos = todos.map((todo) => (todo.id === id ? res.data : todo));
      setTodos(newTodos);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTodoAPI();
        setTodos(res.data);
      } catch (error) {
        alert(error.response.data.message);
      }
    };
    fetchData();
  }, []);

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
