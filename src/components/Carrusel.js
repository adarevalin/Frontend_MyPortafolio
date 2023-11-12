import Carousel from 'react-bootstrap/Carousel';


function Slider () {
  return (
    <Carousel data-bs-theme="white" >
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1584947114153-e9a2a9ec1501?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Proyectos"
        />
        <Carousel.Caption>
          <h5 className='h1'>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1584947114153-e9a2a9ec1501?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Viajes"
        />
        <Carousel.Caption>
          <h5 className='h1'>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1584947114153-e9a2a9ec1501?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Estudios"
        />
        <Carousel.Caption>
          <h5 className='h1'>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;