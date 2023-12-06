import React from 'react';
import Grid from '../components/grid';
import { Container} from 'react-bootstrap';
import '../style.css';


function Studios () {
   return <>
          <Container className='general generalStudios'>
          <Grid Src='../img/yo.jpg' Id="#" Title_B='Boton_1' Title='Titulo de estudio'
                    P='Este espacio es para una pequeña descripcion de la pagina de enlace'/>
          </Container>
          </>

}

export default Studios;