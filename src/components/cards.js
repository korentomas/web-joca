import { Card, Button } from "react-bootstrap";
import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <h1 className="quienes-somos">
        ¿quienes somos?
      </h1>
    );
  }
}

class SponsorCard extends React.Component {
  render() {
    return (
      <Card className="card" id="card-sumate">
        <Card.Body>
          <Card.Title className="card-title">
            Estamos buscando voluntarios
          </Card.Title>
          <Card.Text className="card-text">
            ¿Queres formar parte del movimiento activista climatico más grande de la región?
          </Card.Text>
          <Button variant="primary" style={{ color: "white" }} href="/contacto">
            ¡Sumate!
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export { Banner, SponsorCard };
