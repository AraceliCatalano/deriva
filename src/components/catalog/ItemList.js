import React from 'react';
import Item from './Item'
import { Container, Row,  Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CCRecoleta from '../../assets/images/CCRecoleta.png';
import ItemCount from './ItemCount'
import '../../assets/App.css';


function ItemList () {
    return (
       <> 
       <Container className="mt-3 catalog">
            <Row>
                <Col sm> 
                    <Item/>
                </Col>
                <Col sm> 
                    <Item/>
                </Col>
                <Col sm> 
                    <Item/>
                </Col>
                <Col sm> 
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={CCRecoleta} />
                        <Card.Body>
                            <Card.Title>Gift card</Card.Title>
                            <Card.Text>
                            ¡Regalá uno de nuestros paseos urbanos!
                            </Card.Text>
                            <ItemCount 
                                    initial = {0}
                                    stock = {1}
                                    className="text-center"
                                    />
                            <Button className="text-center" variant="dark">Seleccionar</Button>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row>
        </Container>
        
       </>
    )
}

export default ItemList;