import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CCRecoleta from '../../assets/images/CCRecoleta.png';
import ItemCount from './ItemCount'
import '../../assets/styles/App.css'

function Item () {
    return (
       <> 
        <Card className="item">
        <Card.Img variant="top" src={CCRecoleta} />
        <Card.Body>
            <Card.Title>Título del paseo</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <ItemCount 
                    initial = {0}
                    stock = {10}
                    />
            <Button variant="dark" className="text-center ">Ver paseo</Button>
        </Card.Body>
        </Card>        
       </>
    )
}

export default Item;