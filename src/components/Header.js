import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logoWhite.ico';
import '../assets/Header.css'

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <img src={logo} alt="logo" className="logo"/>
        <Navbar.Brand href="#home">Deriva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Paseos</Nav.Link>
            <Nav.Link href="#link">Bonus Track</Nav.Link>
            </Nav>
            <Nav className="ustify-conttent-end">
            <Nav.Link href="#link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
            </Nav.Link>
            <NavDropdown title="Ingresar" id="basic-nav-dropdown" className="justify-conttent-end" >
              <NavDropdown.Item href="#action/3.1" variant="dark">Usuario registrado</NavDropdown.Item>           
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Registrarse
              </NavDropdown.Item>
            </NavDropdown>

            </Nav>
            
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );
}
    
      
  

export default Header;