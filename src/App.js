import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import NavBar from './components/Nav';
import Footer from './components/Footer';
import Home from './paginas/Home';

import Article from './paginas/Article';
import Certificate from './paginas/Certificate';
//import Curriculum from './paginas/Curriculum';
//import Interesting from './paginas/Interesting';
import Prefijo from './paginas/Prefijo';
import PageRedaccion from './paginas/PageRedaccion';
import PageCertificado from './paginas/PageCertificado';

import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Elimina el token al cargar la página
    localStorage.removeItem("token");
  }, []); // El segundo parámetro del useEffect asegura que esto solo se ejecute una vez al cargar la página

  return (
    <Router>
      <Fragment>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          {/*<Route path="/interesting" element={<Interesting />} />*/}
          <Route path="/article/" element={<Article/>} />
          <Route path='/certificate' element={<Certificate/>} />
          {/*<Route path='/curriculum' element={<Curriculum/>} />*/}
          <Route path='/' element={<Prefijo/>} />
          <Route path='/Page/:id/:title' element={<PageRedaccion />} />
          <Route path='/PageC/:id/:title' element={<PageCertificado />} />
          
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
