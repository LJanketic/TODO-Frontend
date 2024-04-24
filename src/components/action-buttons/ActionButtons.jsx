import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container } from 'react-bootstrap';
import AddTodoModal from '../add-modal/addModal';

ActionButtons.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

function ActionButtons({ handleAddTodo }) {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <Container className="d-flex justify-content-center mt-3">
      <Button variant="primary" className="me-2" style={{ width: '150px' }} onClick={handleShowModal}>Create new</Button>
      <AddTodoModal show={showModal} handleClose={handleCloseModal} handleAddTodo={handleAddTodo} />
    </Container>
  );
}

export default ActionButtons;
