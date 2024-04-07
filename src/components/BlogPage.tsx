import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'animate.css';
import { BlogPost } from "./BlogPost";
import { Col, Container, Row } from "react-bootstrap";

export function BlogPage(): JSX.Element {
  return (
    <Container fluid className="my-3 bg-white">
      <Row className="align-items-start">
        <Col xs={2}>
          WIP
        </Col>
        <Col xs={7}>
          <BlogPost title="Welcome to my blog!" content="This is a blog post. It's a work in progress, but I'm excited to share my thoughts with you!" author="Anish Mukherjee" date="04/07/2024"/>
          <BlogPost title="Second Post!" content="This is a blog post. It's a work in progress, but I'm excited to share my thoughts with you!" author="Anish Mukherjee" date="04/07/2024"/>
        </Col>
        <Col xs={2}>
          WIP
        </Col>
      </Row>
    </Container>
  );
}
