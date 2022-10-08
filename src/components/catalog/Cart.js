import React, { useContext, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Container, Table } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';
import '../../assets/styles/Cart.css';
import swal from 'sweetalert';
import { db, updateStock } from '../../firebase-config';

function Cart () {
    // Traigo las constantes pasadas como value en CartProvider y accedo por CartContext.
    const { items, removeItem, clearItems, totalCartPrice } = useContext(CartContext); 
    const [ orderStatus, setOrderStatus] = useState(false);
    const [buyer, setBuyer] = useState({name:'', email: '', phone:''});

    const order = {
        ...buyer,
        items: items.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: totalCartPrice()
    }

    const clickPurchase = async (order) =>{
       const newOrder = await addDoc(collection(db, "orders"), {...order, date: serverTimestamp()})                          
        return newOrder;   
    }

    const handlerSubmit = async(e) => {  
        e.preventDefault();
        if (order.name !== "" && order.phone !== "" && order.email !== "") {
            clickPurchase(order)
                .then((res) => {
                    new swal({
                        title: "Orden enviada",
                        text: `Número de de orden: ${res.id}`,
                        icon: "success",
                        button: "Ok",
                    })
                })
                .then(() => items.forEach((item) => updateStock(item.id, item.quantity)))
                .then(() => clearItems())
                .catch(
                    (err) => new swal(`Hubo un Error!`, "Inténtalo nuevamente", "error")
                )
        } else {
            new swal({
                title: "Completa los campos correctamente",
                text: "Revisá los datos ingresados y volvé a intentar enviar la orden.",
                icon: "error",
                button: "Ok",
            })
        }
    }

    const handlerChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
            
        })
    }
            const handleClick= () => {
            setOrderStatus(!orderStatus)
            }

    // const handleClick = () => {
    //     const db = getFirestore();
    //     const ordersCollection = collection(db, 'orders');
    //     addDoc(ordersCollection, order)
    //      .then(({ id }) => 
    //         console.log(id)
    //         )
    //     setOrderStatus(!orderStatus);
    // }
    // console.log(orderStatus);

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
                    <Col sm={6}>
                        <h3>Tu selección</h3>
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={6}>
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
                    <Col sm={6}>

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
                            <>
                            <Container>
                            <h5>Completa con tus datos para finalizar la compra</h5>
								<form
                                    
									onSubmit={handlerSubmit}
									onChange={handlerChange}
									className="d-flex flex-column align-center container mt-2 mb-3"
								>
									<input
										className="form-control mb-2"
										type="text"
										placeholder="Nombre"
										name="name"
										defaultValue={order.name}
									/>
									<input
										className="form-control mb-2"
										type="number"
										placeholder="Telefono"
										name="phone"
										defaultValue={order.phone}
									/>
									<input
										className="form-control mb-2"
										type="email"
										placeholder="Email"
										name="email"
										defaultValue={order.email}
									/>
                                
									<Button className="btn btn-success d-block mt-2" variant="dark" >
										Finalizar orden
									</Button>
								</form>
                                </Container>
                                </>
                        }

                    </Col>    
                </Row>
            </Container>      
        }
       </>
    )
}

export default Cart;

