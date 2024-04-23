import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { Trash, PencilSquare } from 'react-bootstrap-icons';
import axiosRoutes from '../../api/routes';
import EditTodoModal from '../edit-modal/editModal';

function formatDateTime(dateTimeString) {
  const dateTime = new Date(dateTimeString);
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return dateTime.toLocaleString('en-GB', options);
}

function TodoList({ todos, refreshTodoList }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleEditModalClose = () => {
    setShowEditModal(false);
    setSelectedTodo(null);
  };

  const handleEditModalShow = (todo) => {
    setSelectedTodo(todo);
    setShowEditModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
    setSelectedTodo(null);
  };

  const handleDeleteModalShow = (todo) => {
    setSelectedTodo(todo);
    setShowDeleteModal(true);
  };

  const handleDeleteTodo = async () => {
    try {
      await axiosRoutes.deleteTodo(selectedTodo.id);
      refreshTodoList();
      handleDeleteModalClose();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleUpdateTodo = async (updatedTodo) => {
    try {
      await axiosRoutes.updateTodo(updatedTodo.id, updatedTodo);
      refreshTodoList();
      handleEditModalClose();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  return (
    <div>
      <h1 className="text-center mb-4">ToDo List</h1>
      <div className="table-container text-center" style={{ maxHeight: '200px', minHeight: '400px', overflow: 'auto' }}>
        <Table striped bordered>
          <thead className='sticky-top'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Description</th>
              <th scope="col">Done</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.length === 0 ? (
              <tr>
                <td colSpan="7">No items to display</td>
              </tr>
            ) : (
              todos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.text}</td>
                  <td>{todo.done ? 'Yes' : 'No'}</td>
                  <td>{formatDateTime(todo.createdAt)}</td>
                  <td>{formatDateTime(todo.updatedAt)}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEditModalShow(todo)}>
                      <PencilSquare />
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => handleDeleteModalShow(todo)}>
                      <Trash />
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
      <EditTodoModal show={showEditModal} handleClose={handleEditModalClose} handleUpdateTodo={handleUpdateTodo} selectedTodo={selectedTodo} />
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this ToDo?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>Cancel</Button>
          <Button variant="danger" onClick={handleDeleteTodo}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TodoList;
