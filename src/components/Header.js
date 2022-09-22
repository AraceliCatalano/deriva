import React from 'react';
import {Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logoWhite.ico';
import '../assets/styles/Header.css'
import { Link } from 'react-router-dom';

import CartWidget from '../components/catalog/CartWidget';

function Header() {
  return (
    <>
      <div className="header">
          <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
              <img src={logo} alt="logo" className="logo"/>
              <Navbar.Brand ><Link to="/" className="link">Deriva</Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Navbar.Text> <Link to="/" className="link">Home</Link> </Navbar.Text>
                    <NavDropdown title="Paseos" id="basic-nav-dropdown" className="link">
                      <NavDropdown.Item> <Link to="/categoria/Arte" className="dropdown-link">Arte</Link> </NavDropdown.Item>
                      <NavDropdown.Item> <Link to="/categoria/Historia" className="dropdown-link">Historia</Link> </NavDropdown.Item>
                      <NavDropdown.Item> <Link to="/categoria/Arquitectura"className="dropdown-link">Arquitectura</Link> </NavDropdown.Item>
                      <NavDropdown.Item> <Link to="/categoria/Historias en bondi"className="dropdown-link">Historias en bondi</Link> </NavDropdown.Item>
                      {/* <NavDropdown.Divider />
                      <NavDropdown.Item> Gratis </NavDropdown.Item> */}
                  </NavDropdown>
                    <Navbar.Text> <Link to="/bonusTracks" className="link">Bonus Track</Link> </Navbar.Text>
                  </Nav>
                    <Nav className="justify-content-end">
                    <Navbar.Text> <Link to="/cart"> <CartWidget/> </Link>  </Navbar.Text  >
                    <Navbar.Text> <Link to="/login" className="link" >Ingresar</Link> </Navbar.Text>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </div>
    </>
  );


}
    
export default Header;