import { CarouselCrossfade } from "./carousel";

import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <CarouselCrossfade />
        <h1 className="quienes-somos">¿QUIÉNES SOMOS?</h1>
      </>
    );
  }
}

export { Home };
