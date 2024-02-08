import React from "react";
import FetchGet from "../methods/FetchGet";
import { Container} from 'react-bootstrap';

function Certificate () {
    return(
        <>
        <Container>
            <FetchGet url="https://backend-portafolio-abnh.onrender.com/api/portafolio/certificados"/>
        </Container>
        </>
    )
}

export default Certificate;