import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTodoContext } from '../context/TodoContext';

function AddTodoModal({ show, handleClose }) {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDoneChange = (e) => {
    setDone(e.target.checked);
  };

  const handleSubmit = () => {
    addTodo({ text, done });
    handleClose();
  };

  const handleModalClose = () => {
    setText('');
    setDone(false);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formText">
            <Form.Label>Text</Form.Label>
            <Form.Control type="text" value={text} onChange={handleTextChange} />
          </Form.Group>
          <Form.Group controlId="formDone">
            <Form.Check type="checkbox" label="Done" checked={done} onChange={handleDoneChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AddTodoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default AddTodoModal;
