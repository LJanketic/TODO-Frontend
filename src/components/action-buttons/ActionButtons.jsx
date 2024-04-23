import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AddTodoModal from '../add-modal/addModal';

function ActionButtons({ setTodos }) {
    const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCreateTodo = (newTodo) => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
    handleCloseModal();
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Button variant="primary" className="me-2" style={{ width: '150px' }} onClick={handleShowModal}>Create new</Button>
      <Button variant="success" style={{ width: '150px' }}>Update</Button>
      <AddTodoModal show={showModal} handleClose={handleCloseModal} handleCreate={handleCreateTodo} />
    </Container>
  );
}

export default ActionButtons;
