import Card from 'react-bootstrap/Card';

function Naipes(props) {
  return (
    <Card style={{ width: '16rem', marginTop: '5%'}}>
      <Card.Img variant="top" src={props.Src} style={{height: '18rem'}}/>
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.P}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Naipes;