async function actualizarDato(url, datosActualizados) {
    try {
      const respuesta = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosActualizados),
      });
      const resultado = await respuesta.json();
      return resultado
    } catch (error) {
      console.error('Error al actualizar dato:', error);
    }
  }

export default actualizarDato;

  