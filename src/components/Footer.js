import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css'
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="astro-SZ7XMLTE footer">
      <Container>
        <Row>

          <Col xs={12} sm={6} md={4} className="icon-flipcat"> {/* Este es el logo*/}
            <img alt="flipcat-logo" src="../img/carta-a.png" className='imgFooter'/>
          </Col>

          <Col xs={12} sm={6} md={4} className="social-media">
            {/* columna de texto */}
            <div className="astro-SZ7XMLTE footer-title">Síguenos</div>

               {/* columna de redes */}
              <div className="astro-SZ7XMLTE media-row">

                  <Button variant="link" href="kyfunky1386@gmail.com" className="icon" aria-label="Este es nuestro mail">
                    <img alt='Correo'  src='../img/correo-electronico.png' className='imgIcons'/> 
                  </Button>

                  <Button variant="link" href="https://wa.me/573142838763" className="icon" aria-label="Contactanos a nuestro whatsapp">
                    <img alt='Whatsapp' src='../img/whatsapp.png' className='imgIcons'/>
                  </Button>

                  <Button variant="link" href="https://www.facebook.com/" className="icon" aria-label="Contactanos a nuestro whatsapp">
                    <img alt='Facebook'  src='../img/facebook.png' className='imgIcons' />
                  </Button>

                  <Button variant="link" href="https://www.instagram.com/" className="icon" aria-label="Contactanos a nuestro whatsapp">
                    <img alt='Instagram'  src='../img/instagram.png'  className='imgIcons'/>
                  </Button>

            </div>
          </Col>

      <Col xs={12} sm={6} md={4} className="icon-flipcat">
        <img alt="flipcat-logo" src="../img/bot-conversacional.png" className='imgFooter' />
    </Col>
      </Row>
    </Container>


      <div className="astro-SZ7XMLTE after-footer">
        Copyright © 2023 Mi Portafolio. Reservados todos los derechos.
      </div>
    </footer>
  );
}

export default Footer;
