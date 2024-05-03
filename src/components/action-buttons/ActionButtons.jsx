import React from 'react';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AddTodoModal from '../add-modal/AddModal';
import { useTodoContext } from '../context/TodoContext';

function ActionButtons() {
  const { addTodo } = useTodoContext();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Button
        variant="primary"
        className="me-2"
        style={{ width: '150px' }}
        onClick={handleShowModal}>
        Create new
      </Button>
      <AddTodoModal show={showModal} handleClose={handleCloseModal} handleAddTodo={addTodo} />
    </Container>
  );
}

export default ActionButtons;
