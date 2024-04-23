import React from 'react';
import { Table } from 'react-bootstrap';

function TodoList({ todos }) {
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
              </tr>
            </thead>
            <tbody>
              {todos.length === 0 ? (
                <tr>
                  <td colSpan="5">No items to display</td>
                </tr>
              ) : (
                todos.map((todo, index) => (
                  <tr key={todo.id}>
                    <td>{index + 1}</td>
                    <td>{todo.text}</td>
                    <td>{todo.done ? 'Yes' : 'No'}</td>
                    <td>{formatDateTime(todo.createdAt)}</td>
                    <td>{formatDateTime(todo.updatedAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }

export default TodoList;
