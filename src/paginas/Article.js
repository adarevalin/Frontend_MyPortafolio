import React from "react";
import { Container} from 'react-bootstrap';
import FetchGet from "../methods/FetchGet";



function Article () {

    return (
        <> 
        <Container>    
                <FetchGet url="http://localhost:8000/api/portafolio/articulo"/>  
        </Container>
        </>
    );
}

export default Article;