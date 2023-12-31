import crearNuevoDato from "./PostDate";
import actualizarDato from "./PutDate";
import GetDate from "./GetDate"

// maneja el envio de los datos, se actualiza la lista sin recargar la pagina
async function handleSubmit (e, nuevoDato, data, url) {
    e.preventDefault();

    // Verifica si el nuevo dato tiene un valor y contiene la propiedad 'id'
    if (nuevoDato && nuevoDato.id) {
      // Busca el índice del objeto con el mismo id en la lista data
      const index = data.findIndex((item) => item.id == nuevoDato.id); // eslint-disable-line eqeqeq

      if (index !== -1) {
        data[index] = { ...nuevoDato };
        await actualizarDato(url, nuevoDato);// Si existe, realiza la actualización
        console.log('actualizar')

      } else {
        await crearNuevoDato(url, nuevoDato);// Si no existe, crea un nuevo dato
        console.log('crear')

      }
        const response = await GetDate(url);// Actualiza la lista después de agregar o actualizar un dato
        return response

    } else {
      console.error("El nuevo dato no tiene un valor o no contiene la propiedad 'id'.");
      return null;
    }
}

export default handleSubmit