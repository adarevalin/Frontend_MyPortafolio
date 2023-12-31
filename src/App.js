import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

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

import './style.css'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
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
