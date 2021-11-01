import { Carousel } from "react-bootstrap";
import React from "react";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";

class CarouselCrossfade extends React.Component {
  render() {
    return (
      <Carousel fade>
        <Carousel.Item>
          <div className="fotocarousel">
            <img className="d-block w-100" src={photo2} alt="Second slide" />
          </div>

          <Carousel.Caption>
            <h3 className="carousel-title">LA JUSTICIA CONDENÓ A SHELL</h3>
            <p className="carousel-desc">
              La Haya condenó a ala empresa petrolera Shell a reducir sus
              emisiones de CO2 un 45% en menos de una década por identificarla
              responsable de la crisis climatica.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export { CarouselCrossfade };
