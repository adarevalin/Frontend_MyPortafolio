//import Slider from '../components/Carrusel'
//import Cite from '../components/Cite'
import FetchGet from '../methods/FetchGet';
import { Container} from 'react-bootstrap';
import '../methods/styles/stylesHome.css';


function Home () {
    return (
        <>

        <Container>
            {/*<Slider url="https://backend-portafolio-abnh.onrender.com/api/portafolio/intereses"/>*/}
            {/*<Cite />*/}
            <div className='Descripcion'>
                <h1 className='text-center'>Nuestra Experiencia en Desarrollo de Software: Proyectos y Artículos</h1>
                <p className="justificado-p">Bienvenidos a nuestra plataforma, donde presentamos una amplia gama de proyectos y artículos que representan nuestra sólida experiencia en el mundo del desarrollo de software. Nos enorgullece compartir nuestro conocimiento y habilidades adquiridas a lo largo de los años, mostrando nuestra capacidad para crear soluciones innovadoras y eficientes.
                <br/>
                     Cada proyecto exhibido aquí es el resultado de un trabajo arduo, creatividad y dedicación. Desde aplicaciones móviles, páginas web hasta investigaciones, hemos enfrentado desafíos diversos y hemos entregado productos de alta calidad que cumplen con los estándares más exigentes.</p>
            </div>
                <FetchGet url="https://backend-portafolio-abnh.onrender.com/api/portafolio/articulo" style={{ padding: 0 }} />  
        </Container>
        </>
    )
}

export default Home;