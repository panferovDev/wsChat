import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ChatForm from './ChatForm';
import ChatWindow from './ChatWindow';

export default function ChatWrapper() {
  return (
    <Col md="10" sm="12" className="mt-2 chatWrapper d-flex flex-column justify-content-between">
      <ChatWindow />

      <ChatForm />
    </Col>
  );
}
