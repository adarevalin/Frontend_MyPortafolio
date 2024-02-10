import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import io from 'socket.io-client';

import NavBar from './components/Nav';
import Footer from './components/Footer';
import Home from './paginas/Home';
import Interesting from './paginas/Interesting';
import Article from './paginas/Article';
import Certificate from './paginas/Certificate';
import Curriculum from './paginas/Curriculum';
import Prefijo from './paginas/Prefijo';
import PageRedaccion from './paginas/PageRedaccion';
import PageCertificado from './paginas/PageCertificado';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  useEffect(() => {
    // Elimina el token al cargar la página
    localStorage.removeItem("token");

    // Configurar WebSocket
    const socket = io('wss://frontend-myportafolio.onrender.com:10000/ws');

    // Evento que se ejecuta cuando se establece la conexión con el servidor WebSocket
    socket.on('connect', () => {
      console.log('Conexión establecida con el servidor WebSocket');
    });

    // Evento que se ejecuta cuando se recibe un mensaje del servidor WebSocket
    socket.on('message', (data) => {
      console.log('Mensaje recibido del servidor WebSocket:', data);
    });

    // Manejar la desconexión del servidor WebSocket
    socket.on('disconnect', () => {
      console.log('Desconectado del servidor WebSocket');
    });

    // Cerrar la conexión al desmontar el componente o salir de la página
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Router>
      <Fragment>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interesting" element={<Interesting />} />
          <Route path="/article/" element={<Article/>} />
          <Route path='/certificate' element={<Certificate/>} />
          <Route path='/curriculum' element={<Curriculum/>} />
          <Route path='/prefijo' element={<Prefijo/>} />
          <Route path='/Page/:id/:title' element={<PageRedaccion />} />
          <Route path='/PageC/:id/:title' element={<PageCertificado />} />
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
