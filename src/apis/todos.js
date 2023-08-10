import instance from './instance';

export const createTodoAPI = (todo) => {
  return instance.post('/todos', { todo });
};

export const getTodoAPI = () => {
  return instance.get('/todos');
};

export const updateTodoAPI = (id, todo, isCompleted) => {
  return instance.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoAPI = (id) => {
  return instance.delete(`/todos/${id}`);
};
