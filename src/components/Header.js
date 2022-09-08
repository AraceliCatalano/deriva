import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/images/logoWhite.ico';
import '../assets/App.css'
import { Link } from 'react-router-dom';

import CartWidget from './CartWidget';

function Header() {
  return (
    <>
      <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <img src={logo} alt="logo" className="logo"/>
        <Navbar.Brand href="/">Deriva</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Text>
            <Link to="/" className="link">Home</Link>
            </Navbar.Text>
            <Navbar.Text>
            <Link to="/paseos" className="link" >Paseos</Link>
            </Navbar.Text>
            <Navbar.Text>
            <Link to="/bonusTracks" className="link" >Bonus Track</Link>
            </Navbar.Text>
            
            </Nav>
            <Nav className="justify-content-end">

            <Nav.Link href="#link">
              <CartWidget/>            
            </Nav.Link>

            <Navbar.Text>
            <Link to="/login" className="link" >Ingresar</Link>
            </Navbar.Text>

            {/* <NavDropdown title="Ingresar" id="basic-nav-dropdown" className="justify-conttent-end" variant="dark">
              <NavDropdown.Item  variant="dark"><Link to="/itemlist" style={ddlist} >Usuario registrado</Link></NavDropdown.Item>           
              <NavDropdown.Divider />
              <NavDropdown.Item variant="dark">
                <Link to="/itemlist" style={ddlist} >Registrarse</Link>
              </NavDropdown.Item>
            </NavDropdown> */}

            </Nav>
            
          

        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  );


}
    

// const ddlist = {
//   color: "black",
//   textDecoration: "none",
// }
  

export default Header;