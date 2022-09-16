import React from 'react';
import Item from './Item'
import { Container, Row,  Col } from 'react-bootstrap';
import '../../assets/styles/App.css'


function ItemList ({ tours = [] }) {
    console.log("tours desde ItemList", tours)
    return (
        <>  
        <Container className="mt-3 catalog">
            <Row>
            {tours.map((tour) =>
                <Col sm key={tour.id}>
                 <Item tour={tour} /> 
                </Col>
                )}
            </Row>
        </Container>    
    </>
      
    )  
}

export default ItemList;