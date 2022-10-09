import React from'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {  doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';
import "../../assets/styles/OrderDetail.css";

const OrderDetail = () =>{

    const [orderDetail, setOrderDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();    
    


    useEffect(() => {
        const queryOrder = doc(db , 'orders', id);
        getDoc(queryOrder) 
          .then (res => {
            setOrderDetail({ id: res.id, ...res.data() })},
            setLoading(false))
    }, [id]);

    
      
    return (
        <>
        {
            loading ? 
            <div style={{padding: 100 }}>
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
            : 
            <>
                <Row className="order-title" > <h3>Detalle de tu orden </h3> </Row>
                <Row >
                    <h5>¡Recibirás un email para descargar tu paseo e iniciar tu deriva urbana!</h5>
                </Row>
                <Container className="order-containter">
                    <Row>  
                        <Col sm={4}><h4>Número de orden:</h4></Col> 
                        <Col sm={3}><p className="order-field">{id}</p> </Col> 
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Compra realizada con el email:</p> </Col>
                        <Col sm={3}>{orderDetail.email} </Col>  
                    </Row>
                    <Row>
                        <Col sm={4}> <p className="order-field">Total:</p> </Col>
                        <Col sm={3}>${orderDetail.total}   </Col>  
                   </Row>
                   {/* <Row>
                    <Col sm={4}> <p className="order-field">Paseo/s incluido/s:</p> </Col>
                    <Col>
                        {
                            [orderDetail.items].map((tour, i) =>
                            <Row key={i}>
                                <p> {tour.name}</p>
                                
                            </Row>
                                )
                            }
                     </Col>  
                     </Row> */}
                </Container>
                
            </>
        }
        </>
            
    )
  }
  
  export default OrderDetail;