import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [quantity, setQuantity] = useState(initial);

    const sumQuantity = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const reduceQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Gift Card</Card.Title>
                <Card.Text>
                ¡Regalá uno de nuestros paseos urbanos!
                </Card.Text>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <ButtonGroup aria-label="Basic example">
                        <Button variant="secondary" onClick={reduceQuantity}>-</Button>
                        <Button variant="secondary">{quantity}</Button>
                        <Button variant="secondary" onClick={sumQuantity}>+</Button>
                    </ButtonGroup>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <div>
                            {
                                quantity > 0 ?
                                <Button variant="dark" onClick={() => onAdd(quantity)}>
                                    Agregar al carrito</Button>
                                :
                                <Button variant="secondary" disabled>
                                    Agregar al carrito</Button>
                            }
                            </div>
                    </ListGroup.Item>
                    
                </ListGroup>               
            </Card.Body>
        </Card>
         
            
        </>
    )

}

export default ItemCount



















// import React from "react";
// import { useState } from "react";
// import ButtonCounter from "./ButtonCounter";
// import Counter from "./Counter";


// function ItemCount() {
//   //Counter functions

//     const [clicksNumber, setClicksNumber] = useState(0);

//     const handleClick = () => {
//         setClicksNumber(clicksNumber + 1);
//     };

//     const restartCounter = () => {
//         setClicksNumber(0);
//     };
//   // END -> Counter functions

//   return (
//     <>
      
//       <div className="counter-container">
//         <h1>Contador de clicks</h1>
//         <Counter clicksNumber={clicksNumber} />
//         <div>
//         <ButtonCounter
//           text="Click"
//           isClickButton={true}
//           handleClick={handleClick}
//         />

//         <ButtonCounter
//           text="Restart"
//           isClickButton={false}
//           handleClick={restartCounter}
//         />
//         </div>
//       </div>
      
//       </>
    
//   );
// }



// export default ItemCount;