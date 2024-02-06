import React, { useState, useEffect } from 'react';
import GetDate from '../methods/funtion/GetDate';
import Carousel from 'react-bootstrap/Carousel';
import TruncateText from './TruncateText'; // Importa el componente TruncateText
import "./styles/carrusel.css"

function Slider({ url }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);

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

    fetchData();
  }, [url]);

  if (isLoading) {
    return <div className="App"><h1>Cargando...</h1></div>;
  }

  if (error) {
    return <div className="App"><h1>Error al obtener datos: {error.message}</h1></div>;
  }

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="ImagenCarrusel d-block w-100"
            src={item.img}
            alt={item.nombre}
          />
          <Carousel.Caption>
            <h3>{item.nombre}</h3>
            {/* Utiliza el componente TruncateText para truncar el texto */}
            <div>
              <TruncateText text={item.texto} maxLength={100} />
            </div>
            <a href={item.pag} target="_blank" rel="noopener noreferrer" className='RefCarrusel'>
              Ingrese aquí
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;


