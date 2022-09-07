import React from 'react';
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer';
// Imports for Login with Firebase
import Login from './components/loginComponents/Login';
import SignUp from './components/loginComponents/SignUp'
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


function App() {
  return (
   <>
    <Header />
    <ItemListContainer greeting="Próximamente, aquí encontrarás el catálogo de paseos."/>  
     <Container>
        <Row>
          <Col>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </Col>
        </Row>
     </Container>
     
   </>   
  );
}

export default App;
