import React, { useEffect, useState } from 'react';
import ('./styles/Notice.css')


async function GetNotice() {
    try {
      const respuesta = await fetch("http://localhost:8000/api/portafolio/notice");
      const datos = await respuesta.json();
      if (respuesta.ok) {
        console.log('Todo bien');
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
      return datos
      
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
    
  }



function FetchNotice() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const datos = await GetNotice();
        setNoticias(datos.data || []); // Asegúrate de ajustar esto según la estructura real de tus datos
      } catch (error) {
        console.error('Error al obtener datos en useEffect:', error);
      }
    }

    fetchData();
  }, []);

return (
    <>
    <div className='generalNotice'>
      <h1>Noticias Generales</h1>
      <table className="noticias-table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Título</th>
            <th>Fecha de Publicación</th>
            <th>Autor</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {noticias.map((item) => (
            <tr key={item.id}>
              <td>
                {item.image ? (
                  <img src={item.image} alt={item.title} style={{ maxWidth: '100px', maxHeight: '100px' }} />
                ) : (
                  <span>No hay imagen</span>
                )}
              </td>
              <td>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </td>
              <td>{new Date(item.published_at).toLocaleDateString()}</td>
              <td>{item.author}</td>
              <td class="descripcion">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default FetchNotice;