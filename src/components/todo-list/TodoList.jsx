import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap';
import axiosRoutes from '../../api/routes';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const fetchedTodos = await axiosRoutes.getAllTodos();
        setTodos(fetchedTodos.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []);

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
            {todos.length === 0 ? (
              <tr>
                <td colSpan="5">No items to display</td>
              </tr>
            ) : (
              todos.map((todo, index) => (
                <tr key={todo._id}>
                  <td>{index + 1}</td>
                  <td>{todo.text}</td>
                  <td>{todo.done ? 'Yes' : 'No'}</td>
                  <td>{todo.createdAt}</td>
                  <td>{todo.updatedAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default TodoList;
