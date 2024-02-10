import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../style.css';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="xl" className='fixed-top' variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className='custom-Nav'>
            <span translate="no" style={{ display: 'inline-block', textAlign: 'center' }}>
              Port<span style={{ verticalAlign: 'middle', fontSize: '2rem', fontStyle: 'italic' }}>A</span>folio
            </span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">

        <Nav>
          
          <Nav>
            <div className="nav-item">
              <Link to={"/"} className='custom-Nav'>Publicaciones</Link>
            </div>
            {/*<div className="nav-item">
              <Link to={"/interesting"} className='custom-Nav'>Intereses</Link>
            </div>*/}

            <NavDropdown title="Desplegable" className='Desplegable'>
              <div className="nav-item">
                <Link to={"/article"} className='custom-Nav'>Artículos</Link>
              </div>
              <div className="nav-item">
                <Link to={"/certificate"} className='custom-Nav'>Certificados</Link>
              </div>
            </NavDropdown>
          </Nav>  

          <Nav> {/* Alineación horizontal centrada */}
            {/*<div className="nav-item">
              <Link to={"/curriculum"} className='custom-Nav'>Curriculum</Link>
          </div>*/}
            <div className="nav-item">
              <Link to={'/prefijo'} className='custom-Nav'>Acerca de mí</Link>
            </div>
          </Nav>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
