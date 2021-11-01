import { Nav, Container, Navbar } from "react-bootstrap";
import React from "react";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        fixed="top"
        className="m-auto"
      >
        <Container>
          <Navbar.Brand href="\">JOCA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href="\blog">HOME</Nav.Link>
              <Nav.Link href="\blog">BLOG</Nav.Link>
              <Nav.Link href="\involucrate">INVOLUCRATE</Nav.Link>
              <Nav.Link href="\contacto">CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export { NavigationBar };
