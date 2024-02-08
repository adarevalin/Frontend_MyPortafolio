import React from "react";
import { Container} from 'react-bootstrap';
import FetchGet from "../methods/FetchGet";



function Article () {

    return (
        <> 
        <Container>    
                <FetchGet url="https://backend-portafolio-abnh.onrender.com/api/portafolio/articulo"/>  
        </Container>
        </>
    );
}

export default Article;