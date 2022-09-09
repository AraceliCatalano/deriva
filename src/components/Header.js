import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logoWhite.ico';
import '../assets/styles/Header.css'
import { Link } from 'react-router-dom';

import CartWidget from '../components/catalog/CartWidget';

function Header() {
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <img src={logo} alt="logo" className="logo"/>
        <Navbar.Brand >Deriva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
            <Link to="/" className="link">Home</Link>
            </Navbar.Text>
            <Navbar.Text>
            <Link to="/" className="link" >Paseos</Link>
            </Navbar.Text>
            <Navbar.Text>
            <Link to="/" className="link" >Bonus Track</Link>
            </Navbar.Text>
            
            </Nav>
            <Nav className="justify-content-end">

            <Nav.Link >
              <CartWidget/>            
            </Nav.Link>

            <Navbar.Text>
            <Link to="/" className="link" >Ingresar</Link>
            </Navbar.Text>

            </Nav>
            
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );


}
    
export default Header;