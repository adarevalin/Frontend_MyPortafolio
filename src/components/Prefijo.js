import React from "react";
import '../style.css'

function Prefijo () {
    return(
        <>
            <div className="general">
                <div className="DivTitulo">
                    <h1 className="Titulo">Andrés David Arévalo Rosero</h1>
                    <h3 className="subTitulo">Ing. Electronico</h3>
                </div>
                <div className="DivImagen">
                    <img alt="Mi foto" src="../img/yo.jpg" className="imgYo"/>
                </div>
                <div className="DivDescrip">
                    <p className="Description">
                        Profesional con sólida formación en electrónica, análisis de datos, seguridad informática, inteligencia
                        artificial y ciencias fisicomatemáticas. Mi experiencia se centra en la creación y diseño de modelos implementados en 
                        inteligencia artificial, programación en JavaScript, HTML y CSS para el desarrollo web, programación de 
                        microcontroladores, y diseño electrónico. Además, poseo conocimientos en aspectos económico-administrativos que complementan mi perfil. He 
                        demostrado mi capacidad para organizar, gestionar y comprometerme con mis responsabilidades, lo que ha resultado en logros significativos a 
                        lo largo de mi carrera. Mi enfoque en la excelencia y la dedicación me ha permitido obtener los mejores resultados en estas áreas.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Prefijo;