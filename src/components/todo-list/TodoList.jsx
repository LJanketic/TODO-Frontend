import React from 'react';
import { Container, Table } from 'react-bootstrap';

const placeholderData = [
    
];

function TodoList() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">ToDo App</h1>
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
            {placeholderData.length === (
              <tr>
                <td colSpan="5">No items to display</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default TodoList;
