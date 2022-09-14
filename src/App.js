import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import Header from './components/Header'
import ItemListContainer from './components/catalog/ItemListContainer';
import ItemDetailContainer from './components/catalog/ItemDetailContainer';


function App() {
  return (
   <>
    <Header />
   
     <Container>
        <Row>
          <Col>           
              <Routes>
                <Route path="/" element={<ItemListContainer />} />    
                <Route exact path="/item" element={<ItemDetailContainer />} />                
              </Routes>      
          </Col>
        </Row>
     </Container>
     
   
   
   </>   
  );
}

export default App;