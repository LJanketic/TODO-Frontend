import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function EditTodoModal({ show, handleClose, handleUpdateTodo, selectedTodo }) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setDone(selectedTodo.done);
    }
  }, [selectedTodo]);

  useEffect(() => {
    const isTodoChanged = selectedTodo && (text !== selectedTodo.text || done !== selectedTodo.done);
    setIsDirty(isTodoChanged);
  }, [selectedTodo, text, done]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDoneChange = (e) => {
    setDone(e.target.checked);
  };

  const handleUpdate = () => {
    const updatedTodo = { ...selectedTodo, text, done };
    handleUpdateTodo(updatedTodo);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
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
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleUpdate} disabled={!isDirty}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTodoModal;
