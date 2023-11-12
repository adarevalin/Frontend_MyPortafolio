import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Naipes from './Naipes'

function Grid() {
  return (
    <Container>
      <Row>
        <Col><Naipes Href='https://www.facebook.com' title_B='Boton 1'/></Col>
        <Col><Naipes Href='https://www.facebook.com' title_B='Boton 2'/></Col>
        <Col><Naipes Href='https://www.facebook.com' title_B='Boton 3'/></Col>
        <Col><Naipes Href='https://www.facebook.com' title_B='Boton 4'/></Col>
        <Col><Naipes Href='https://www.facebook.com' title_B='Boton 5'/></Col>
        <Col><Naipes Href='https://www.facebook.com' title_B='Boton 6'/></Col>
      </Row>

    </Container>
  );
}

export default Grid;