// import { useState } from "react";
// import Accordion from 'react-bootstrap/Accordion';
// import '../style.css';
// import '../components/styles/styleCurriculum.css'
// import { Container} from 'react-bootstrap';
// import FetchDate from '../methods/FetchDate';
// import Login from "../components/Login";

// function Curriculum () {
//     const [isEditing, setIsEditing] = useState(false);
//     const [showLogin, setShowLogin] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
    

//     const handleEdit = () => {
//         // Verifica si el usuario está autenticado antes de permitir la edición
//         if (isLoggedIn) {
//           setIsEditing(true);
//         } else {
//           // Si no está autenticado, muestra el componente Login
//           setShowLogin(true);
//         }
//       };

//     const handleSave = () => {
//         setIsEditing(false);
//     };

//     const isUserAuthenticated = () => {
//         setIsLoggedIn(true);
//       };
    

//     return (
//         <Container className="general">
//             {/* Displaying the title and subtitle of the curriculum */}
//             <div className="DivTitulo">
//                 <h1 className="Titulo">Ingeniero Electrónico</h1>
//                 <h2 className="subTitulo">Andrés David Arévalo Rosero</h2>
//             </div>

//             {/* Displaying the description of the curriculum */}
//             <div className="DivDescrip">
//                 <p className="Description">
//                 Soy egresado en Ingeniería Electrónica con experiencia en inteligencia artificial y programación full-stack (React, Express). Mi pasión por aprender me impulsa a integrar estos conocimientos para desarrollar soluciones innovadoras. Busco oportunidades para aplicar mis habilidades en proyectos que unifiquen la electrónica y la inteligencia artificial y el diseño web, contribuyendo al avance tecnológico.
//                 </p>
//             </div>

//             {/* Displaying the accordion with different sections of the curriculum */}
//             <Accordion defaultActiveKey="0" className="generalAc">
//                 <Accordion.Item eventKey="0">
//                     <Accordion.Header><span className="items_prin">Datos personales</span></Accordion.Header>
//                     <Accordion.Body>
//                         <FetchDate url="https://backend-portafolio-abnh.onrender.com/api/portafolio/date/"
//                                    isEditing={isEditing}
//                                    onEdit={handleEdit}
//                                    onSave={handleSave}
//                                 />
//                     </Accordion.Body>
//                 </Accordion.Item>

//                 {/* The following sections are populated with data from a database */}
//                 <Accordion.Item eventKey="1">
//                     <Accordion.Header><span className="items_prin">Educación Profesional</span></Accordion.Header>
//                     <Accordion.Body>
//                         <FetchDate url="https://backend-portafolio-abnh.onrender.com/api/portafolio/studios/"
//                                    isEditing={isEditing}
//                                    onEdit={handleEdit}
//                                    onSave={handleSave}
//                                    />
//                     </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="2">
//                     <Accordion.Header><span className="items_prin">Formación Complementaria</span></Accordion.Header>
//                     <Accordion.Body>
//                         <FetchDate url="https://backend-portafolio-abnh.onrender.com/api/portafolio/certificados/"
//                                     isEditing={isEditing}
//                                     onEdit={handleEdit}
//                                     onSave={handleSave}
//                                     />
//                     </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="3">
//                     <Accordion.Header><span className="items_prin">Participación en eventos</span></Accordion.Header>
//                     <Accordion.Body>
//                     <FetchDate url="https://backend-portafolio-abnh.onrender.com/api/portafolio/eventos/"
//                                isEditing={isEditing}
//                                onEdit={handleEdit}
//                                onSave={handleSave}
//                                />
//                     </Accordion.Body>
//                 </Accordion.Item>

//                 <Accordion.Item eventKey="4">
//                     <Accordion.Header><span className="items_prin">Proyectos Profesionales</span></Accordion.Header>
//                     <Accordion.Body>
//                         <FetchDate url="https://backend-portafolio-abnh.onrender.com/api/portafolio/articulo/"
//                                    isEditing={isEditing}
//                                    onEdit={handleEdit}
//                                    onSave={handleSave}
//                                    />
//                     </Accordion.Body>
//                 </Accordion.Item>
//             </Accordion>
//             {/*En este siguiente div se van a implementar dos botones, uno para editar y otro para guardar cambios
//                osea cuando se pulse edit quiero que FetchDate active el modo ediccion y muestre los botones de añadir
//                y eliminar los datos y cuando se de guardar desaparezcan */}
//             {/* Botones de Editar y Guardar */}
//             <div className="ClassBEdit">
//                 {isEditing ? (
//                     <>
//                         <button onClick={handleSave} className="iconEdit">
//                             <img alt="Editar" src="../img/verificado.png" className="imgEdit" />
//                         </button>
//                         <button onClick={() => setIsEditing(false)} className="iconEdit">
//                             <img alt="Editar" src="https://i.imgur.com/btvSy5F.png" className="imgEdit" />
//                         </button>
//                     </>
//                 ) : (
//                         <div>
//                         {isLoggedIn ? (
//                         <>
//                             <button onClick={handleEdit} className="iconEdit">
//                             <img alt="Editar" src="https://i.imgur.com/kTtX8ex.png" className="imgEdit" />
//                             </button>
//                         </>
//                         ) : (
//                         <Login
//                             show={showLogin}
//                             onHide={() => setShowLogin(false)}
//                             onSuccess={() => {
//                             setIsEditing(true);
//                             isUserAuthenticated();
//                             setShowLogin(false);
//                             }}
//                         />
//                         )}
//                     </div>
//                 )}
//             </div>
//         </Container>
//     )
// }

// export default Curriculum;
