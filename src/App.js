import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Interesting from './components/Interesting';
import Studios from './components/Studios';
import Article from './components/Article';
import Certificate from './components/Certificate';
import Curriculum from './components/Curriculum';
import Prefijo from './components/Prefijo'

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
        </Routes>
        <Footer/>
      </Fragment>
    </Router>
  );
}

export default App;
