async function crearNuevoDato(url, nuevoDato) {
    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoDato),
      });
      const resultado = await respuesta.json();
      return resultado

    } catch (error) {
      console.error('Error al crear nuevo dato:', error);
    }
  }

export default crearNuevoDato;
