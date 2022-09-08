import React from 'react';
import {Nav, Navbar, Container}  from 'react-bootstrap';
import '../../assets/App.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="row text-center">
          <Nav defaultActiveKey="/home" className="flex-column col-4">
            <Navbar.Text> <Link to="/ayuda" className="link">Ayuda</Link> </Navbar.Text>
            <Navbar.Text> <Link to="/sobre-deriva" className="link">Sobre Deriva</Link> </Navbar.Text>
            <Navbar.Text> <Link to="/bonusTracks" className="link">Bonus Tracks</Link> </Navbar.Text>
          </Nav>  
          <Nav defaultActiveKey="/home" className="flex-column col-4">
            <Navbar.Text> <Link to="/terminos-y-condiciones" className="link">Términos de uso</Link> </Navbar.Text>
            <Navbar.Text> <Link to="/politica-privacidad" className="link">Política de privacidad</Link> </Navbar.Text>
          </Nav>
          <Nav defaultActiveKey="/home" className="flex-column col-4">
            <Navbar.Text> NUESTRAS REDES </Navbar.Text>
            <Navbar.Text> <Link to="/" className="link">Twitter</Link> </Navbar.Text>
            <Navbar.Text> <Link to="/" className="link">Instagram</Link> </Navbar.Text>
          </Nav>        
        </Container>
      </Navbar>

    </>
  );


}
    


export default Footer;