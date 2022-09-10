import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/Item.css'

function Item ({tour}) {
    
    return (
       <> 
        <Card className="item">
        <Card.Img variant="top" src={tour.image} />
        <Card.Body>
            <Card.Title>{tour.name}</Card.Title>
            <Card.Text>{tour.description}</Card.Text>
            <Card.Text>${tour.price}</Card.Text>
            <Button variant="dark" className="text-center ">Ver paseo</Button>
        </Card.Body>
        </Card>        
       </>
    )
}

export default Item;