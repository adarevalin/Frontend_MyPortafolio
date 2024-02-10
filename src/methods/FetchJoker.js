// import { useEffect, useState } from 'react';
// import ('./styles/styles.css')


// async function GetJoker() {
//     try {
//       const respuesta = await fetch("https://backend-portafolio-abnh.onrender.com/api/portafolio/chistes");
//       return await respuesta.json();

//     } catch (error) {
//       console.error('Error al obtener datos:', error);
//     }
//   }

//  function FetchJoker() {
  
//   const [Joker, setJoker] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
        
//         setJoker(await GetJoker()); // Asegúrate de ajustar esto según la estructura real de tus datos
        
//       } catch (error) {
//         console.error('Error al obtener datos en useEffect:', error);
//       }
//     }

//     fetchData()
    
//     return () => {
//       setJoker([])
//     }
//   }, []);
 
//   // Si Joker es null, muestra un mensaje de carga
//   if (!Joker) {
//     return <div>Loading...</div>;
//   }
  

// return (
//     <>
//     {Joker && (
//         <div key={Joker.id} className="joke-container">
//           <h2>{Joker.category}</h2>
//           <p>{Joker.type}</p>
//           <p>{Joker.setup}</p>
//           <p>{Joker.delivery}</p>
//         </div>
//     )}
//     </>
    
//   );
//  }

// export default FetchJoker;