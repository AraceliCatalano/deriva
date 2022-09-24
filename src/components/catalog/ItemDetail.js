import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import '../../assets/styles/ItemDetail.css';
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button } from 'react-bootstrap';
import ItemCount from "./ItemCount";  
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({item}) => {

  const [add, setAdd] = useState(false);
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    setAdd(!add);
    addItem(item, quantity);
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
                  add 
                  ? 
                  <Row className="buy-button">
                    <p className="success">¡Agregado! </p> 
                    <Link to="/cart" >
                      <Button variant="dark" size="lg">Finalizar compra</Button>
                    </Link>                
                  </Row>
                  : <ItemCount onAdd={onAdd} item={item} stock={3} initial={1} /> 
                }  
            </Row>
          </Container>
        </Col>  
      </Row> 
    </Container>
   
  );
};

export default ItemDetail;