
async function GetDate(url) {
    try {
      const respuesta = await fetch(url);
      const datos = await respuesta.json();

      return datos
      
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
    
  }

export default GetDate;