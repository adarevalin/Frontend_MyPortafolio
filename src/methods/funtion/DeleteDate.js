const token =  localStorage.getItem('token');

async function eliminarDato(url, id) {
  try {
    const respuesta = await fetch(`${url}${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      credentials: 'include',
      Authorization: 'include',
    });

    if (respuesta.ok) {
      console.log('Dato eliminado exitosamente.');
    } else {
      console.error('Error al eliminar dato. Estado:', respuesta.status);
    }
  } catch (error) {
    console.error('Error al eliminar dato:', error);
  }
}

export default eliminarDato;
