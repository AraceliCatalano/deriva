import React, { useContext } from 'react';
import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import '../../assets/styles/Cart.css'

function Cart () {
    // Traigo las constantes pasadas como value en CartProvider y accedo por CartContext.
    const { items, removeItem, clearItems } = useContext(CartContext); 

    return (
       <> 
       <Container className="cart-container p-3">
         <Row>
            <Col sm={8}>
                <h3>Tu selección</h3>
            </Col>
            <Col sm={4}>
            </Col>
         </Row>
         <Row>
            <Col sm={8}>
                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th>Paseo seleccionado</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th> Eliminar </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.map((item) => (
                    <tr  key={item.id}>
                        <td> {item.name}</td>
                        <td>{item.quantity}</td>
                        <td>${item.price}</td>
                        <td>
                            <Button variant="danger" onClick={() => removeItem(item.id)}> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                            </svg>
                            </Button>
                        </td>
                    </tr>
                    ))
                }
                    </tbody>
                </Table>
            </Col>
            <Col sm={4  }>
                <Button className="cart-button" variant="dark" onClick={() => clearItems()}>Vaciar carrito</Button>
                <Row className="p-3 cart-total">
                    <h5>Total a pagar:  $0000</h5>
                </Row>
                <Button className="cart-button" variant="dark">Finalizar compra</Button>
            </Col>    
         </Row>
        </Container>      
       </>
    )
}

export default Cart;