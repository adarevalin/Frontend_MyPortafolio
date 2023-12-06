import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Naipes from './Naipes'

function Grid(props) {
  return (
    <Container>
      <Row>
        <Col><Naipes Src={props.Src} Id={props.Id} Title_B={props.Title_B} Title={props.Title} P={props.P}/></Col>
      </Row>

    </Container>
  );
}

export default Grid;