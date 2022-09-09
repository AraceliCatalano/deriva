import React from 'react';
import Header from './components/Header'
import Home from './components/home/Home'
import ItemListContainer from './components/catalog/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


function App() {
  return (
   <>
    <Header />

     <Container>
        <Row>
          <Col>
            
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/paseos" element={<ItemListContainer greeting="Elegí uno de nuestros paseos." />} />    
                 
                </Routes>
            
          </Col>
        </Row>
     </Container>
     
   
   
   </>   
  );
}

export default App;