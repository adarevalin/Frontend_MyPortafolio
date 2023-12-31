import React from 'react';
import Slider from '../components/Carrusel'
import Cite from '../components/Cite'
import FetchGet from '../methods/FetchGet';
import { Container} from 'react-bootstrap';



function Home () {
    return (
        <>
        <Slider url="http://localhost:8000/api/portafolio/intereses/"/>
        <Cite/>
        <Container>    
                <FetchGet url="http://localhost:8000/api/portafolio/articulo"/>  
        </Container>
        </>
    )
}

export default Home;