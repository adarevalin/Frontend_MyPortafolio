const token =  localStorage.getItem('token');

async function actualizarDato(url, datosActualizados) {
    try {
      const respuesta = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        Authorization: 'include',
        body: JSON.stringify(datosActualizados),
      });
      const resultado = await respuesta.json();
      return resultado
    } catch (error) {
      console.error('Error al actualizar dato:', error);
    }
  }

export default actualizarDato;

  