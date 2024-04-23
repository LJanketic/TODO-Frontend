import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddTodoModal({ show, handleClose, handleAddTodo }) {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    handleAddTodo({ text });
    setText(''); 
    handleClose();
  };

  const handleModalClose = () => {
    setText('');
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

export default AddTodoModal;
