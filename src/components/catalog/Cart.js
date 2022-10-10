import React, { useContext, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, Table } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import "../../assets/styles/Cart.css";
import swal from "sweetalert";
import { db, updateStock } from "../../firebase-config";

function Cart() {
  // Traigo las constantes pasadas como value en CartProvider y accedo por CartContext.
  const { items, removeItem, clearItems, totalCartPrice } =
    useContext(CartContext);
  const [orderStatus, setOrderStatus] = useState(false);
  const [buyer, setBuyer] = useState({ name: "", email: "", phone: "" });
  const [orderId, setOrderId] = useState("");
 

  const order = {
    ...buyer,
    items: items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    })),
    total: totalCartPrice(),
  };

  const clickPurchase = async (order) => {
    const newOrder = await addDoc(collection(db, "orders"), {
      ...order,
      date: serverTimestamp(),
    });
    return newOrder;
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (order.name !== "" && order.phone !== "" && order.email !== "") {
      clickPurchase(order)
        .then((res) => {
          setOrderId(res.id);
        })
        .then(() =>
          items.forEach((item) => updateStock(item.id, item.quantity))
        )
        .then(() => clearItems())
        .catch(
          (err) => new swal(`Hubo un Error!`, "Inténtalo nuevamente", "error")
        );
    } else {
      new swal({
        title: "Completa los campos correctamente",
        text: "Revisá los datos ingresados y volvé a intentar enviar la orden.",
        icon: "error",
        button: "Ok",
      });
    }
  };

  const handlerChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setOrderStatus(!orderStatus);
  };

  return (
    <>
      {items.length === 0 ? (
        <Container className="cart-container p-5">
          {orderId ? (
            <>
              <Container className="order-successs-container">
                <h4> La orden se registró con el id {orderId} y se envió correctamente</h4>
                
                <Link to={`/order/${orderId}`}>
                      <Button variant="dark" size="md" className="m-2">
                        Ver detalle
                      </Button>
                </Link>
                <Link to="/">
                      <Button variant="dark" size="md"  className="m-2">
                        Seguir comprando
                      </Button>
                </Link>
            </Container>
            </>
          ) : (
            <Row className="no-selection">           
                <h4>No seleccionaste ningún paseo aún.</h4>            
                <Link to="/">
                  <Button variant="dark" size="md">
                    {" "}
                    Volver al catálogo
                  </Button>
                </Link>
             
            </Row>
          )}
        </Container>
      ) : (
        <Container className="cart-container p-3"> 
            
              <h3 className="selection-title">Tu selección</h3>
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
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td> {item.name}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price}</td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() => removeItem(item.id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col sm={6}>
              {orderStatus === false ? (
                <Container>
                  <Button
                    className="cart-button"
                    variant="dark"
                    onClick={() => clearItems()}
                  >
                    Vaciar carrito
                  </Button>
                  <Link to="/">
                      <Button className="cart-button" variant="dark">
                        Seguir comprando
                      </Button>
                   </Link>
                  <Row className="p-3 cart-total">
                    <h5>Total a pagar: $ {totalCartPrice()} </h5>
                  </Row>
                </Container>
              ) : (
                <p> {""}</p>
              )}
              {orderStatus === false ? (
              <Container>
                <Button
                  className="cart-button"
                  variant="dark"
                  onClick={handleClick}
                >
                  Generar orden de compra
                </Button>
                </Container>
              ) : (
                <>
                  <Container className="form-container">
                    <h5>Completá tus datos para finalizar </h5>
                    <form
                      onSubmit={handlerSubmit}
                      onChange={handlerChange}
                      className="d-flex flex-column align-center container mt-2 mb-3"
                    >
                      <input
                        className="form-control mb-2"
                        type="text"
                        placeholder="Nombre completo"
                        name="name"
                        defaultValue={order.name}
                      />
                      <input
                        className="form-control mb-2"
                        type="number"
                        placeholder="Teléfono"
                        name="phone"
                        defaultValue={order.phone}
                      />
                      <input
                        className="form-control mb-2"
                        type="email"
                        placeholder="Dirección email"
                        name="email"
                        defaultValue={order.email}
                      />

                      <button
                        className="btn btn-success d-block mt-2 form-btn"
                        
                      >
                        Finalizar orden
                      </button>
                    </form>
                  </Container>
                </>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default Cart;
