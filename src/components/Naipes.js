import Card from 'react-bootstrap/Card';
import '../components/styles/stylesNaipes.css';

function Naipes(props) {
  return (
    <div className="card-container">
    <Card>
      <div className='ImagenCard'>
      <Card.Img className='Img' variant="top" src={props.Src}/>
      <Card.Body>
        <div className='CardGeneral'>
        <Card.Title className='Title'>{props.Title}</Card.Title>
        <Card.Text className='CardText'>{props.P}</Card.Text>
        </div>
      </Card.Body>
      </div>
    </Card>
    </div>
  );
}

export default Naipes;