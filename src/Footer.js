import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Información de Contacto</h5>
            <p>Tu información de contacto aquí.</p>
          </div>
          <div className="col-md-6">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;