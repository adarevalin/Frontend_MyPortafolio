import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../style.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl" bg="dark" data-bs-theme="dark" className='fixed-top'>
      <Container >
        <Navbar.Brand ><Link to={"/"} className='custom-link'>Mi Portafolio</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"} className='custom-link'>Publicaciones</Link></Nav.Link>
            <Nav.Link><Link to={"/interesting"} className='custom-link'>Intereses</Link></Nav.Link>
            <NavDropdown title="Desplegable" id="collasible-nav-dropdown">
              <NavDropdown.Item><Link to={"/Studios"} className='custom-link'>Estudios</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item> <Link to={"/article"} className='custom-link'>Articulos</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to={"/certificate"} className='custom-link'>Certificados</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><Link to={"/curriculum"} className='custom-link'>Curriculum</Link></Nav.Link>
            <Nav.Link eventKey={2}><Link to={'/prefijo'} className='custom-link'>Acerca de mí</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  export default NavBar;

