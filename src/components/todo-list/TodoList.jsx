import React from 'react';
import { Container } from 'react-bootstrap';

function TodoList() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">ToDo App</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
            <th scope="col">Done</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder atm */}
        </tbody>
      </table>
    </Container>
  );
}

export default TodoList;
