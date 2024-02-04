import React, { useState, useEffect } from "react";
import GetDate from "./funtion/GetDate";
import './styles/redaccion.css'
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Container} from 'react-bootstrap';

function FetchGetEx({ Id, url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGetEx = async (url) => {
      try {
        const response = await GetDate(url);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGetEx(url);
  }, [url]);
  
  

  if (isLoading) {
    return <div className="App"><h1>Cargando...</h1></div>;
  }
  // se utiliza para gestionar errores.
  if (error) {
    return <div className="App"><h1>Error al obtener datos: {error.message}</h1></div>;
  }
  // Filtrar los datos para obtener solo aquellos que coinciden con el Id
  const filteredData = data.filter(item => Number(item.id) === Number(Id));
    return (
        <div className="principal">
        <Container>
          <Col>
            <Row >
                <h1>{filteredData[0]?.nombre || ''}</h1>
            </Row>
            <Row>
                <img  alt="imagen" src={filteredData[0]?.img || ''} />
            </Row>
            <Row>
              <p>{filteredData[0]?.abstract || ''}</p>
            </Row>
            <Row>
              <p>{filteredData[0]?.introduccion || ''}</p>
            </Row>
            <Row>
              <p>{filteredData[0]?.nudo || ''}</p>
            </Row>
            <Row>
              <p>{filteredData[0]?.desenlace || ''}</p>
            </Row>
            <Row>
              <a href={filteredData[0]?.pag} target="_blank" rel="noopener noreferrer"><p>Ampliar detalles</p></a>
            </Row>
          </Col>
        </Container>
        </div>
    );  
}
export default FetchGetEx;