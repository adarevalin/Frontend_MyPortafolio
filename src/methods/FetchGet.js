import { useState, useEffect, useRef } from "react";
import GetDate from "./funtion/GetDate";
import Grid from "../components/grid";
import "./styles/styles_AC.css";
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CustomPagination from "../components/CustomPagination";
import 'bootstrap/dist/css/bootstrap.min.css';

function FetchGet({ url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; 
  const fetchRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetDate(url);
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!fetchRef.current) {
      fetchRef.current = fetchData;
      fetchRef.current();
    }

    return () => {
      setData(null)
      setCurrentPage(1)
      if (fetchRef.current) {
        fetchRef.current = null;
      }
    }
  }, [url]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <div className="App"><h1>Cargando...</h1></div>;
  }
  // se utiliza para gestionar errores.
  if (error) {
    return <div className="App"><h1>Error al obtener datos: {error.message}</h1></div>;
  }

  const Url = location.pathname;
  
  const renderGrids = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const naipesToDisplay = data.slice(startIndex, endIndex);

    return (
      <>
      <div className="generalElemento">
      <Row>
        {naipesToDisplay.map((item) => {
          const id = item.id || "No contiene un id";
          const img = item.img|| null
          const title = item.curso || item.nombre;
          const Institution = `${item.institucion || item.publicado}`;
          
          switch (Url) {
            case '/article':
            case '/':
              return (
                <Col key={id} xs={12} sm={6} md={4} >
                  <Link to={`/Page/${id}/${title}`} className='custom-link'>
                    <Grid  naipes={data} Src={img} Title={title} P={Institution} />
                  </Link>
                </Col>
              );
            case '/certificate':  
              return (
                <Col key={id} xs={12} sm={6} md={4}>
                  <Link to={`/PageC/${id}/${title}`} className='custom-link'>
                    <Grid naipes={data} Src={img} Title={title} P={Institution} />
                  </Link>
                </Col>
              );
            default:
              return null;
          }
        })}
      </Row>
      </div>
      <div className="CustomP">
      <CustomPagination  totalPages={Math.ceil(data.length / itemsPerPage)} onPageChange={handlePageChange} />
      </div>
      </>
    );
  };

  return <>{data && renderGrids()}</>;
}

export default FetchGet;
