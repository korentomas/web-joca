import React from "react";
import { Form, Button, Card } from "react-bootstrap";

class BasicForm extends React.Component {
  render() {
    return (
      <Card className="card" id="card-contact" >
        <Card.Body>
          <Form style={{ color: "black"}}>
            <Form.Group
              controlId="exampleForm.ControlInput1"
              style={{ color: "black" }}
            >
              <Form.Label style={{ fontSize: "1.2em" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                style={{ marginBottom: "10px" }}
              />
              <Form.Label style={{ fontSize: "1.2em" }}>Asunto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Asunto"
                style={{ marginBottom: "10px" }}
              />
              <Form.Label style={{ fontSize: "1.2em" }}>Mensaje</Form.Label>
              <Form.Control
                placeholder="Mensaje"
                as="textarea"
                rows={3}
                style={{
                  marginBottom: "10px",
                  minHeight: "5.5em",
                  maxHeight: "400px"
                }}
              />
            </Form.Group>
            <Button variant="primary" style={{ color: "white" }} type="submit">
              ¡Contáctanos!
            </Button>
          </Form>
        </Card.Body>
      </Card>

    );
  }
}

export { BasicForm };
