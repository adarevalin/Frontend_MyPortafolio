import { useParams } from "react-router-dom";
import { Container} from 'react-bootstrap';
import EstructRedaccion from "../components/EstructRedaccion";

function PageRedaccion () {
    const {id} = useParams();

    return(
        <>
        <Container>
            <EstructRedaccion Id={id} url={"https://backend-portafolio-abnh.onrender.com/api/portafolio/redaccion"}/>
        </Container>
        </>
    )
}

export default PageRedaccion;