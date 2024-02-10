
async function GetDate(url) {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      if (respuesta.ok) {
        console.log('Todo bien', (url));
      } else {
        console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        
      }
      return datos
      
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
    
  }

export default GetDate;