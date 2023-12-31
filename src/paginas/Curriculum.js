import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import '../style.css';
import '../components/styles/styleCurriculum.css'
import { Container} from 'react-bootstrap';
import FetchDate from '../methods/FetchDate';

function Curriculum () {
    return (
        <Container className="general">
            {/* Displaying the title and subtitle of the curriculum */}
            <div className="DivTitulo">
                <h1 className="Titulo">Ingeniero Electrónico</h1>
                <h2 className="subTitulo">Andrés David Arévalo Rosero</h2>
            </div>

            {/* Displaying the description of the curriculum */}
            <div className="DivDescrip">
                <p className="Description">
                Soy egresado en Ingeniería Electrónica con experiencia en inteligencia artificial y programación full-stack (React, Express). Mi pasión por aprender me impulsa a integrar estos conocimientos para desarrollar soluciones innovadoras. Busco oportunidades para aplicar mis habilidades en proyectos que unifiquen la electrónica y la inteligencia artificial y el diseño web, contribuyendo al avance tecnológico.
                </p>
            </div>

            {/* Displaying the accordion with different sections of the curriculum */}
            <Accordion defaultActiveKey="0" className="generalAc">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className="items_prin">Datos personales</span></Accordion.Header>
                    <Accordion.Body>
                        <FetchDate url="http://localhost:8000/api/portafolio/date/"/>
                    </Accordion.Body>
                </Accordion.Item>

                {/* The following sections are populated with data from a database */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header><span className="items_prin">Educación Profesional</span></Accordion.Header>
                    <Accordion.Body>
                        <FetchDate url="http://localhost:8000/api/portafolio/studios/"/>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header><span className="items_prin">Formación Complementaria</span></Accordion.Header>
                    <Accordion.Body>
                        <FetchDate url="http://localhost:8000/api/portafolio/certificados/"/>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header><span className="items_prin">Participación en eventos</span></Accordion.Header>
                    <Accordion.Body>
                        alimentado por base de datos
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                    <Accordion.Header><span className="items_prin">Proyectos Profesionales</span></Accordion.Header>
                    <Accordion.Body>
                        <FetchDate url="http://localhost:8000/api/portafolio/articulo/"/>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header><span className="items_prin">Datos interesantes</span></Accordion.Header>
                    <Accordion.Body>
                        alimetado por base de datos
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Curriculum;

//
//This code has been updated with proper commenting. Comments have been added to provide clarity and guide the reader through the code..</s>