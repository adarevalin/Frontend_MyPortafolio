import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';


function Footer(props) {
  return <footer>
        <Container className='bg-dark text-center text-white p-4 pb-0'>
          <Row>
              <Col><Button variant="dark" className='bg-while'>Facebook</Button></Col>
          </Row>
        </Container>
        </footer>
}

export default Footer;