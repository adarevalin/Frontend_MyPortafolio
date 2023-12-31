async function crearObjetoInsertar (items) {
    try {
        const objetoEntrada = await items[0];

        // Asegúrate de que haya un objeto de entrada
        if (objetoEntrada) {
            const propiedades = Object.keys(objetoEntrada);

        // Crea un nuevo objeto utilizando reduce
        const objetoInsertar = propiedades.reduce((nuevoObjeto, propiedad) => {
        nuevoObjeto[propiedad] = objetoEntrada[propiedad];
        return nuevoObjeto;
        }, {});
        return objetoInsertar

        } else {
        console.error("El arreglo está vacío o no contiene objetos.");
        }
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

export default crearObjetoInsertar;