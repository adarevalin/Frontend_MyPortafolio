import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import NavBar from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Interesting from './components/Interesting';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/interesting" element={<Interesting />} />
        </Routes>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
