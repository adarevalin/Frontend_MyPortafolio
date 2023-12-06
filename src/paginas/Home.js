import React from 'react';
import Slider from '../components/Carrusel'
import Cite from '../components/Cite'
import Grid from '../components/grid'



function Home () {
    return (
        <>
        <Slider Src='../img/audifono.jpg' Alt="imagen de gatito" Title="Esto es el titulo" P="esto es el parrafo donde hay una descripcion"/>
        <Cite/>
        <Grid/>
        </>
    )
}

export default Home;