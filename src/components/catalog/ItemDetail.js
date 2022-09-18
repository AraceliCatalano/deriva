import React, { useState } from "react";
import {Link} from "react-router-dom";
import '../../assets/styles/ItemDetail.css';
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

  const [add, setAdd] = useState(false);

  const onAdd = (quantity) => {
    setAdd(!add);
  };
 
  return (

    <Container className="item-detail-container">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Row>
        <Col sm={6}>
          <Carousel>
            <Carousel.Item>
            <img className="d-block w-100"
              src={item.detailImages[0]} 
              alt="PM1"
            />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 "
                src={item.detailImages[1]} 
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 "
                src={item.detailImages[2]} 
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>       
        </Col>
        <Col sm={6}> 
          <p className="context">{item.context}</p> 
          <p className="item-info">{item.duration}</p>
          <p className="item-info">${item.price}</p>
          <Container className="cart-buttons-container">
            <Row className="add-button-container">
                {
                  add ? <p className="success">¡Agregado! </p> : <ItemCount stock={3} initial={1} onAdd={onAdd}/> 
                }  
            </Row>
            <Row className="buy-button">
              <Link to="/cart" >
                <Button variant="dark"  size="lg" > Ir al carrito </Button>
              </Link>                
            </Row>
          </Container>
        </Col>  
      </Row> 
    </Container>
   
  );
};

export default ItemDetail;
