import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import Home from './paginas/Home';
import Interesting from './paginas/Interesting';
import Studios from './paginas/Studios';
import Article from './paginas/Article';
import Certificate from './paginas/Certificate';
import Curriculum from './paginas/Curriculum';
import Prefijo from './paginas/Prefijo';
import Estruct from './components/Estruct';

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
          <Route path="/studios" element={<Studios/>} />
          <Route path="/article" element={<Article/>} />
          <Route path='/certificate' element={<Certificate/>} />
          <Route path='/curriculum' element={<Curriculum/>} />
          <Route path='/prefijo' element={<Prefijo/>} />
          <Route path='/Estruct' element={<Estruct />} />
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
