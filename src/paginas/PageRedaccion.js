import React from "react";
import { useParams } from "react-router-dom";
import { Container} from 'react-bootstrap';
import EstructRedaccion from "../components/EstructRedaccion";

function PageRedaccion () {
    const {id} = useParams();

    return(
        <>
        <Container className='general generalStudios'>
            <EstructRedaccion Id={id} url={"http://localhost:8000/api/portafolio/redaccion"}/>
        </Container>
        </>
    )
}

export default PageRedaccion;