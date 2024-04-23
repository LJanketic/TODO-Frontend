import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './components/todo-list/TodoList';
import ActionButtons from './components/action-buttons/ActionButtons';
import axiosRoutes from './api/routes';

function App() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState('DESC');

  const refreshTodoList = async (sortOrder) => {
    try {
      const fetchedTodos = await axiosRoutes.getAllTodosSorted(sortOrder);
      setTodos(fetchedTodos.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAddTodo = async (todoData) => {
    try {
      await axiosRoutes.createTodo(todoData);
      refreshTodoList(sortOrder);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  useEffect(() => {
    refreshTodoList(sortOrder);
  }, [sortOrder]);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <TodoList todos={todos} refreshTodoList={refreshTodoList} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ActionButtons handleAddTodo={handleAddTodo} />
    </Container>
  );
}

export default App;
