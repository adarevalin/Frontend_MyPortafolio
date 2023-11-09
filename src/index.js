import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Nav'
import Slider from './Carrusel'


const root = createRoot(document.getElementById('root'))

root.render (
    <>
    <header>
        <NavBar />
    </header>
    <main>
        <Slider />
  </main>
  </>
)
