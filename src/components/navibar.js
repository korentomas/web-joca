import { Nav, Container, Navbar } from "react-bootstrap";
import React from "react";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="\">JOCA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="\blog">Blog</Nav.Link>
              <Nav.Link href="\involucrate">Involucrate</Nav.Link>
              <Nav.Link href="\contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export { NavigationBar };
