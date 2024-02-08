import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../style.css'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl"  className='fixed-top'>
      <Container >
        <Navbar.Brand ><Link to={"/"} className='custom-Nav'><span  translate="no" style={{ display: 'inline-block', textAlign: 'center' }}>
      Port<span style={{ verticalAlign: 'middle', fontSize:'2rem', fontStyle: 'italic' }}>A</span>folio
    </span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to={"/"} className='custom-Nav'>Publicaciones</Link></Nav.Link>
            <Nav.Link><Link to={"/interesting"} className='custom-Nav'>Intereses</Link></Nav.Link>
            <NavDropdown title="Desplegable"  className='Desplegable'>
              <NavDropdown.Item> <Link to={"/article"} className='custom-Nav'>Artículos</Link></NavDropdown.Item>
              <NavDropdown.Item> <Link to={"/certificate"} className='custom-Nav'>Certificados</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link><Link to={"/curriculum"} className='custom-Nav'>Curriculum</Link></Nav.Link>
            <Nav.Link eventKey={2}><Link to={'/prefijo'} className='custom-Nav'>Acerca de mí</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

  export default NavBar;

