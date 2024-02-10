import { useEffect, useState } from 'react';
import ('./styles/styles.css')


async function GetJoker() {
    try {
      const respuesta = await fetch("https://backend-portafolio-abnh.onrender.com/api/portafolio/chistes");
      const datos = await respuesta.json();
      if (respuesta.ok) {
        console.log('Todo bien Joker');
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
      }
      return datos
      
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
    
  }


function FetchJoker() {
  const [Joker, setJoker] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const datos = await GetJoker();

        setJoker(datos); // Asegúrate de ajustar esto según la estructura real de tus datos

      } catch (error) {
        console.error('Error al obtener datos en useEffect:', error);
      }
    }

    fetchData()

    return () => {
      setJoker([])
    }
  }, []);
 
return (
    <>
        <div key={Joker.id} className="joke-container">
          <h2>{Joker.category}</h2>
          <p>{Joker.type}</p>
          <p>{Joker.setup}</p>
          <p>{Joker.delivery}</p>
        </div>
    </>
  );
}

export default FetchJoker;