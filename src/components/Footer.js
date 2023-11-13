import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style.css'
import { Button } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="astro-SZ7XMLTE footer">
      <Container>
        <Row>
          {/* Lado izquierdo con el logo */}
          <Col xs={12} sm={6} md={4} className="icon-flipcat">
            <img
              alt="flipcat-logo"
              src="#"
              className="astro-SZ7XMLTE"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="social-media">
            <div className="astro-SZ7XMLTE footer-title">Síguenos</div>
              <div className="astro-SZ7XMLTE media-row">

                <div className="astro-SZ7XMLTE media-icon">
                  <Button variant="link" href="kyfunky1386@gmail.com" className="astro-SZ7XMLTE" aria-label="Este es nuestro mail">
                    Email
                  </Button>
                </div>

              <div className="astro-SZ7XMLTE media-icon">
                  <Button variant="link" href="https://wa.me/573142838763" className="astro-SZ7XMLTE" aria-label="Contactanos a nuestro whatsapp">
                    whatsapp
                  </Button>
              </div>

              <div className="astro-SZ7XMLTE media-icon">
                  <Button variant="link" href="https://www.facebook.com/" className="astro-SZ7XMLTE" aria-label="Contactanos a nuestro whatsapp">
                    facebook
                  </Button>
              </div>
              <div className="astro-SZ7XMLTE media-icon">
                  <Button variant="link" href="https://www.instagram.com/" className="astro-SZ7XMLTE" aria-label="Contactanos a nuestro whatsapp">
                    Instagram
                  </Button>
              </div>
           {/* Agrega más botones según sea necesario */}
            </div>
          </Col>

      <Col xs={12} md={4} className="chat-virtual">
        {/* Puedes usar un componente de chat existente o implementar el tuyo */}
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
