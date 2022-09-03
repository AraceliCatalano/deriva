import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logoWhite.ico';
import '../assets/Header.css'

import CartWidget from './CartWidget';

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
              <CartWidget/>            
            </Nav.Link>

            <NavDropdown title="Ingresar" id="basic-nav-dropdown" className="justify-conttent-end" variant="dark">
              <NavDropdown.Item href="#action/3.1" variant="dark">Usuario registrado</NavDropdown.Item>           
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2" variant="dark">
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