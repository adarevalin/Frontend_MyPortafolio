const token =  localStorage.getItem('token');

async function crearNuevoDato(url, nuevoDato) {
    try {
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        credentials: 'include',
        Authorization: 'include',
        body: JSON.stringify(nuevoDato),
      });
      const resultado = await respuesta.json();
      return resultado

    } catch (error) {
      console.error('Error al crear nuevo dato:', error);
    }
  }

export default crearNuevoDato;
