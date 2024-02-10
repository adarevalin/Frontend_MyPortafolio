// // En tu componente de React
// import { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap"; // O cualquier otro componente de modal que estés utilizando

// function Login({ onSuccess }) {
//   const [showModal, setShowModal] = useState(false);
//   const [user, setUsername] = useState("");
//   const [pass, setPassword] = useState("");

//   const handleEditClick = () => {
//     // Abre el modal al hacer clic en el botón de editar
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     // Cierra el modal al hacer clic en el botón de cerrar o fuera del modal
//     setShowModal(false);
//   };

//   const handleLoginAndEdit = async () => {
//     try {
//       const response = await fetch("https://backend-portafolio-abnh.onrender.com/api/portafolio/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: 'include',
//         Authorization: 'include',
//         body: JSON.stringify({ user, pass }),
//       });
  
//       if (response.ok) {
//         // Verifica si la cabecera 'Authorization' está presente
//         const authorizationHeader = response.headers.get('Authorization');
        
//         if (authorizationHeader) {
//           const tokenFromResponse = authorizationHeader.split('Bearer ')[1];
          
//           localStorage.setItem('token', tokenFromResponse); // Guarda el token en localStorage
  
//           console.log("Autenticación exitosa. Puedes permitir la edición.");
  
//           // Cierra el modal después de manejar la autenticación
//           handleModalClose();
  
//           // Llama a la función onSuccess después de una autenticación exitosa
//           if (onSuccess) {
//             onSuccess(tokenFromResponse);
//           }
//         } else {
//           console.error("La cabecera 'Authorization' no está presente en la respuesta del servidor.");
//         }
//       } else {
//         const errorData = await response.json().catch(() => null);
//         const errorMessage = errorData?.mensaje || "Error de autenticación";
//         console.error(errorMessage);
//         console.error("Error de autenticación");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };
  

//   return (
//     <>
//       <Button onClick={handleEditClick}>Inicio de Sesión</Button>

//       <Modal show={showModal} onHide={handleModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Iniciar sesión</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="formUsername">
//               <Form.Label>Nombre de usuario</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Ingrese su nombre de usuario"
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </Form.Group>

//             <Form.Group controlId="formPassword">
//               <Form.Label>Contraseña</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Ingrese su contraseña"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleModalClose}>
//             Cerrar
//           </Button>
//           <Button variant="primary" onClick={handleLoginAndEdit}>
//             Iniciar sesión y editar
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Login;
