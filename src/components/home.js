import { Banner, SponsorCard } from "./cards";
import { CarouselCrossfade } from "./carousel";

import React from "react";

class Home extends React.Component {
  render() {
    return (
      <>
        <CarouselCrossfade />
        <Banner />
        <SponsorCard />
      </>
    );
  }
}

export { Home };
