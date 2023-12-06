import Carousel from 'react-bootstrap/Carousel';


function Slider (props) {
  return (
    <Carousel data-bs-theme="white" >
      <Carousel.Item>
        <img style={{height:'400px'}}
          className="d-block w-100 "
          src={props.Src}
          alt={props.Alt}
        />
        <Carousel.Caption>
          <h5 className='h1'>{props.Title}</h5>
          <p>{props.P}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;