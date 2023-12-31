import React from "react";
import FetchGet from "../methods/FetchGet";
import '../style.css';
import { Container} from 'react-bootstrap';

function Certificate () {
    return(
        <>
        <Container>
            <FetchGet url="http://localhost:8000/api/portafolio/certificados"/>
        </Container>
        </>
    )
}

export default Certificate;