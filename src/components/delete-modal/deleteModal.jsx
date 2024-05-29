import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function DeleteTodoModal({ show, handleClose, handleDeleteTodo, selectedTodo }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this ToDo?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleDeleteTodo(selectedTodo.id)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

DeleteTodoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  selectedTodo: PropTypes.object
};

export default DeleteTodoModal;
