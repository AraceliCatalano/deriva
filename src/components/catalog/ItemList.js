import React from 'react';
import Item from './Item'
import { Container, Row,  Col } from 'react-bootstrap';
import '../../assets/styles/App.css'


function ItemList ({ tours = [] }) {
    
    return (
        <>  
        <Container className="mt-3 catalog">
            <Row>
            {tours.map((tour) =>
                <Col sm>
                 <Item tour={tour} key={tour.id}/> 
                </Col>
                )}
            </Row>
        </Container>    
    </>
      
    )  
}

export default ItemList;