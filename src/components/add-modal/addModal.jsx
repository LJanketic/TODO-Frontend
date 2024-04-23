import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axiosRoutes from '../../api/routes';

function AddTodoModal({ show, handleClose }) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDoneChange = (e) => {
    setDone(e.target.checked);
  };

  const handleSubmit = async () => {
    try {
      const todoData = { text, done };
      await axiosRoutes.createTodo(todoData);
      handleClose(); // Close the modal after creating a new todo
    } catch (error) {
      console.error('Error creating new todo:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTodoModal;
