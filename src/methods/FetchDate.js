// Importa los hooks y funciones necesarios desde las bibliotecas y archivos.
import { useState, useEffect } from "react";
import GetDate from "./funtion/GetDate";
import "./styles/styles.css";
import eliminarDato from "./funtion/DeleteDate";
import crearObjetoInsertar from "./funtion/crearObjetoInsertar";
import handleSubmit from "./funtion/handleSubmit";
import CustomPagination from "../components/CustomPagination";

// Define el componente funcional FetchDate y recibe una prop llamada 'url'.
function FetchDate({url}) {
    // Define los estados del componente utilizando el hook useState.
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [nuevoDato, setNuevoDato] = useState(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [ElementPage, setElementPage] = useState(1);
    const itemsPerPage = 3; 

    // Utiliza el hook useEffect para realizar operaciones asíncronas cuando el componente se monta o la URL cambia.
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Realiza una solicitud para obtener datos utilizando la función GetDate.
            const response = await GetDate(url);
            // Actualiza el estado 'data' con los datos obtenidos.
            setData(response);
          } catch (error) {
            // Actualiza el estado 'error' en caso de un error durante la solicitud.
            setError(error);
          } finally {
            // Establece isLoading en false después de completar la solicitud.
            setIsLoading(false);
          }
        };
        
        // Llama a la función fetchData.
        fetchData();
    }, [url]); // La dependencia 'url' asegura que la solicitud se realice cuando cambia la URL.

    // Maneja el cambio de página.
    const handlePageChange = (newPage) => {
      setElementPage(newPage);
    };

    // Maneja el cambio en los campos de entrada del formulario.
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNuevoDato((prevData) => ({ ...prevData, [name]: value }));
    };
    
    // Maneja el envío del formulario.
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Realiza una solicitud para enviar el formulario utilizando la función handleSubmit.
        const response = await handleSubmit(e, nuevoDato, data, url);
        if (response) {
          // Actualiza el estado 'data' con los nuevos datos.
          setData(response);
          // Crea un nuevo objeto para insertar en caso de éxito.
          const objetoInsertar = await crearObjetoInsertar(response);
          setNuevoDato(objetoInsertar);
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      } finally {
        // Después de enviar el formulario, restablece el estado a null y oculta el formulario.
        setNuevoDato(null);
        setMostrarFormulario(false);
      }
    };
    
    // Muestra u oculta el formulario.
    const toggleFormulario = () => {
      setMostrarFormulario(!mostrarFormulario);
    };

    // Maneja la eliminación de un dato.
    const handleDelete = async (id) => {
      await eliminarDato(url,id);
      const response = await GetDate(url);
      setData(response);
    };

    // Se utiliza para gestionar la carga de los datos en caso de tener redes lentas.
    if (isLoading) {
        return <div className="App"><h1>Cargando...</h1></div>;
      }
    // Se utiliza para gestionar errores.
      if (error) {
        return <div className="App"><h1>Error al obtener datos: {error.message}</h1></div>;
      }
      
      // Calcula el índice de inicio y fin para mostrar una cierta cantidad de ítems por página.
      const startIndex = (ElementPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const naipesToDisplay = data.slice(startIndex, endIndex);

      // Renderiza el componente final.
      return (
        <div className="App">
        {data && (
          <table className="styled-table">
            <tbody>
              {naipesToDisplay.map((item, index) => (
                <tr key={index}>
                  {Object.values(item).map((value, index) => (
                    <td key={index}><strong>{value}</strong></td>
                  ))}
                  <td>
                    <button onClick={() => handleDelete(item.id)} className="iconButton"><img alt="Borrar" src="../img/eliminar.png" className="imgIconos"/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="centered-container">
            <button onClick={toggleFormulario} className="iconButton"><img alt="Mas" src="../img/mas.png" className="imgIconos"/></button>
                {mostrarFormulario && (
                  <form onSubmit={handleFormSubmit}>
                    {((data && data.length > 0 && Object.keys(data[0])) || []).map((item) => (
                      <input
                        key={item}
                        type="text"
                        name={item}
                        placeholder={item}
                        onChange={handleInputChange}
                        value={nuevoDato ? nuevoDato[item] : ""}
                      />
                ))}
                  <button type="submit" className="iconButton">
                    <img alt="Ready" src="../img/comprobado.png" className="imgIconos" />
                  </button>
                  </form>
                    )}
        </div>
        <div className="CustomP">
            <CustomPagination totalPages={Math.ceil(data.length / itemsPerPage)} onPageChange={handlePageChange} /> 
          </div>
      </div>
      );
}

// Exporta el componente FetchDate.
export default FetchDate;
