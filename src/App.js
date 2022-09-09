import React from 'react';
import Header from './components/Header'
import Banner from './components/home/Banner'
import ItemListContainer from './components/catalog/ItemListContainer';
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';


function App() {
  return (
   <>
    <Header />
    <Banner />
     <Container>
        <Row>
          <Col>
            
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/" element={<ItemListContainer />} />    
                 
                </Routes>
            
          </Col>
        </Row>
     </Container>
     
   
   
   </>   
  );
}

export default App;