import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

interface BlogPostProps {
    title: string;
    content: string;
    author: string;
    date: string;
}

export function BlogPost({title, content, author, date}: BlogPostProps): JSX.Element {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <p>Written by {author} on {date}</p>
                </Col>
            </Row>
        </Container>
    );
}
