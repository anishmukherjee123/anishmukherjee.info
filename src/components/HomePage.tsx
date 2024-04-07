import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import picOfMe from '../images/me.jpg';
import 'animate.css';
import { Col, Container, Fade, Row, Image } from 'react-bootstrap';
import * as emoji from 'node-emoji';

function HomePage(): JSX.Element {
  return (
    <Container fluid className="my-3 bg-white">
      <Row className="align-items-start">
        <Col xs={2}>
          <Fade in appear>
            <Image src={picOfMe} alt="Pic of me!" fluid />
          </Fade>
        </Col>
        <Col xs={7}>
          <div>
            <p className="h1 fw-bolder font-monospace">Welcome!</p>
            <hr className="border border-primary border-3 opacity-75" />
          </div>
          <p>{emoji.emojify('Hey there! :wave:')}</p>
          <p>
            {emoji.emojify(
              `I'm Anish, and this is my little corner of the internet. 
               As someone starting their career as a DevOps Engineer, I want to share my experiences, experiments, 
               and discoveries with anyone else interested in nerdy cloud automation tools.`
            )}
          </p>
          <p>
            This is a hub sharing my interests, whether professional or personal. 
            If you stumble upon anything cool, or if you just wanna chat, please reach out at <a href="mailto: me@anishmukherjee.info">me@anishmukherjee.info</a>. I'd love to hear from you!
          </p>
        </Col>
        <Col xs={3}>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
