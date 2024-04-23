import React from 'react';
import { Button, Container } from 'react-bootstrap';

function ActionButtons() {
  return (
    <Container className="d-flex justify-content-center mt-3">
      <Button variant="primary" className="me-2" style={{ width: '150px' }}>Create new</Button>
      <Button variant="success" style={{ width: '150px' }}>Update</Button>
    </Container>
  );
}

export default ActionButtons;
