import React from 'react'
import {createRoot} from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Nav'
import Slider from './Carrusel'
import Grid from './grid'
import Cite from './Cite'
import Footer from './Footer'


const root = createRoot(document.getElementById('root'))

root.render (
    <>
    <header>
        <NavBar />
    </header>
    <main>
        <Slider />
        <Cite />
        <div style={{padding:'10px'}}>
            <Grid/>
        </div>
    </main>
    <Footer/>
    </>
)
