import React, { useContext, useState } from 'react';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import '../../assets/styles/Cart.css'

function Cart () {
    // Traigo las constantes pasadas como value en CartProvider y accedo por CartContext.
    const { items, removeItem, clearItems, totalCartPrice } = useContext(CartContext); 
    const [ orderStatus, setOrderStatus] = useState(false);

    const order = {
        buyer: {
            name: "Ara",
            email: "test@gmail.com"
        },
        items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: totalCartPrice()
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
         .then(({ id }) => 
            console.log(id)
            )
        setOrderStatus(!orderStatus);
    }
    console.log(orderStatus);

    return (
       <> 
        {
            items.length === 0 ?
            <Container className="cart-container p-5">
                        <Row>
                            <Col>
                                <h3>No seleccionaste ningún paseo aún.</h3>
                            </Col>
                            <Col>
                                <Link to="/">
                                    <Button variant="dark" size="lg"> Volver al catálogo</Button>
                                </Link>
                            </Col>
                        </Row>
            </Container>
            :
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
                                <th>Subtotal</th>
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
                                <td>${item.price * item.quantity}</td>
                                <td>
                                    <Button variant="danger" onClick={() => removeItem(item.id)}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
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
                    {
                            orderStatus === false 
                            ?
                           <Container>
                                <Button className="cart-button" variant="dark" onClick={() => clearItems()}>Vaciar carrito</Button>
                                <Row className="p-3 cart-total">
                                    <h5>Total a pagar:  $ {totalCartPrice()} </h5>
                                </Row>
                            </Container>
                            :
                            <p> {""}</p>
                        }

                        
                        {
                            orderStatus === false 
                            ?
                            <Button className="cart-button" variant="dark" onClick={handleClick}>
                                Generar orden de compra
                            </Button>
                            :
                            <p className="success">¡Orden enviada!</p>
                        }
                    </Col>    
                </Row>
            </Container>      
        }
       </>
    )
}

export default Cart;

