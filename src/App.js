import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './components/todo-list/TodoList';
import ActionButtons from './components/action-buttons/ActionButtons';
import axiosRoutes from './api/routes';

function TodoApp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const fetchedTodos = await axiosRoutes.getAllTodos();
      setTodos(fetchedTodos.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      await axiosRoutes.createTodo(todoData);
      fetchTodos();
    } catch (error) {
      console.error('Error creating new todo:', error);
    }
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <TodoList todos={todos} />
      <ActionButtons handleAddTodo={handleAddTodo} />
    </Container>
  );
}

export default TodoApp;
