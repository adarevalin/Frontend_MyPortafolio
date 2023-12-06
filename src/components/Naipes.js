import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Naipes(props) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.Src} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.P}</Card.Text>
        <Button variant="primary" as={Link} to={'/Estruct'}> {props.Title_B}</Button>
      </Card.Body>
    </Card>
  );
}

export default Naipes;