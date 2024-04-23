import React from 'react';
import { Container } from 'react-bootstrap';
import TodoList from './components/todo-list/TodoList';
import ActionButtons from './components/action-buttons/ActionButtons';

function App() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <TodoList />
      <ActionButtons />
    </Container>
  );
}

export default App;
