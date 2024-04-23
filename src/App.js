import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './components/todo-list/TodoList';
import ActionButtons from './components/action-buttons/ActionButtons';
import axiosRoutes from './api/routes';

function App() {
  const [todos, setTodos] = useState([]);

  const refreshTodoList = async () => {
    try {
      const fetchedTodos = await axiosRoutes.getAllTodos();
      setTodos(fetchedTodos.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  useEffect(() => {
    refreshTodoList();
  }, []);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <TodoList todos={todos} refreshTodoList={refreshTodoList} />
      <ActionButtons refreshTodoList={refreshTodoList} />
    </Container>
  );
}

export default App;
