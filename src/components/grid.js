//import Container from 'react-bootstrap/Container';
import Naipes from './Naipes';
import '../components/styles/styleCurriculum.css'

function Grid(props) {
  

  return (
    <>   
        <Naipes key={props.id} Src={props.Src} Title={props.Title} P={props.P} />
    </>
  );
}

export default Grid;
