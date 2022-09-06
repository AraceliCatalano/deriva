import React from 'react';
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ItemListContainer ({greeting}) {
    return (
       <> 
       <h1 style={styles.h1}>{greeting}</h1>
        <Container>
            
            <Row>
                <Col sm>
                    <ItemCount 
                    initial = {0}
                    stock = {10}
                    />
                </Col>
                {/* <Col sm>Otro paseo</Col>
                <Col sm>Otro paseo</Col> */}
            </Row>
        </Container>
        
        
       </>
    )
    }

    const styles = {
        h1: {
            padding: 30,
            color: "#7FAF9E",
            alignItems: 'center'
        }
    }


export default ItemListContainer;


