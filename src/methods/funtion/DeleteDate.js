async function eliminarDato(url, id) {
  try {
    const respuesta = await fetch(`${url}${id}`, {
      method: 'DELETE',
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
