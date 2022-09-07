import React from 'react';
import ItemCount from './ItemCount'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import swal from 'sweetalert';

function ItemListContainer ({greeting}) {

    const onAdd = () => {

        swal({
        title: `Se agregó el item al carrito`,
        icon: 'success',
        button: "Aceptar",        
    })}

    return (
       <> 
       <h1 style={styles.h1}>{greeting}</h1>
        <Container>
            
            <Row>
                <Col sm>
                    <ItemCount 
                    initial = {0}
                    stock = {5}
                    onAdd = {onAdd}
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


