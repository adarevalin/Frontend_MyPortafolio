import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Naipes from './Naipes'

function Grid() {
  return (
    <Container>
      <Row>
        <Col><Naipes/></Col>
        <Col><Naipes/></Col>
        <Col><Naipes/></Col>
        <Col><Naipes/></Col>
        <Col><Naipes/></Col>
        <Col><Naipes/></Col>
      </Row>

    </Container>
  );
}

export default Grid;