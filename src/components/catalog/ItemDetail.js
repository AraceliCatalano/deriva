import React from "react";
import '../../assets/styles/ItemDetail.css';
import Carousel from "react-bootstrap/Carousel";
// import PM1 from "../../assets/images/PM1.JPG";
// import PM2 from "../../assets/images/PM2.JPG";
// import PM3 from "../../assets/images/PM3.JPG";
// import { Container, Col, Row } from 'react-bootstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ItemDetail = ({item}) => {
  return (

    <Container className="item-detail-container">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <Row>
        <Col sm={7}>
        <Carousel>
        <Carousel.Item>
        <img
          className="d-block w-100 "
          src={item.image[0]} 
          alt="PM1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={item.image[1]} 
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={item.image[2]} 
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
         
        </Col>
        <Col sm={5}> 
          <p className="context">{item.context}</p>
          <Row className="align-items-end">
            <p>{item.duration}</p>
            <p>${item.price}</p>
          </Row>     
          <Row>
            <Button variant="dark" className="text-center"> Comprar </Button>
          </Row>        
        </Col>
      </Row> 
    </Container>
   
  );
};

export default ItemDetail;
