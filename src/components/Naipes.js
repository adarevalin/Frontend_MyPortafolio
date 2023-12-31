import Card from 'react-bootstrap/Card';

function Naipes(props) {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={props.Src} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.P}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Naipes;