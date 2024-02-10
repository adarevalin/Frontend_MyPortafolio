import { Container, Row, Col } from 'react-bootstrap';
import '../style.css'
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="astro-SZ7XMLTE footer">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} className="icon-flipcat"> {/* Este es el logo*/}
            <img alt="flipcat-logo" src="../img/logo.png" className='imgFooter'/>
          </Col>

          <Col xs={12} sm={6} md={4} className="social-media">
            {/* columna de texto */}
              <div className="astro-SZ7XMLTE footer-title">Síguenos</div>

              <div>
                <div> andres.arevalo@unipamplona.edu.co</div>
              </div> 

               {/* columna de redes */}
              <div className="astro-SZ7XMLTE media-row">

                  <Button variant="link" href="https://wa.me/573142838763" className="icon" aria-label="Contactanos a nuestro whatsapp">
                    <img alt='Whatsapp' src='https://i.imgur.com/HUSq9xe.png' className='imgIcons'/>
                  </Button>

                  <Button variant="link" href="https://www.linkedin.com/in/andres-david-4735aa1a6/" className="icon" aria-label="Contactanos a nuestro whatsapp">
                    <img alt='Linkedin'  src='https://i.imgur.com/KbPvHpB.png' className='imgIcons' />
                  </Button>

                  <Button variant="link" href="https://github.com/adarevalin" className="icon" aria-label="Visita mi repositorio">
                    <img alt='Github'  src='https://i.imgur.com/RSR2T2R.png'  className='imgIcons'/>
                  </Button>

              </div>
          </Col>
          <Col xs={12} sm={6} md={4} className="icon-flipcat">
            <img alt="flipcat-logo" src="https://i.imgur.com/UPOhRE4.png" className='imgFooter' />
          </Col>
      </Row>

    </Container>


      <div className="astro-SZ7XMLTE after-footer">
        Copyright © 2024 Mi PortAfolio. Reservados todos los derechos.
      </div>
    </footer>
  );
}

export default Footer;
