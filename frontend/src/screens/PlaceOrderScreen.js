import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import StepsCheckout from "../components/StepsCheckout";
import { transactionRegister } from "../actions/transactionActions";
import PayPalPayement from "../components/PaypalPayement";
import { orderRegister } from "../actions/orderActions";
const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [id, setId] = useState("");
  const methodsList = useSelector((state) => state.methodsList);
  const { transaction } = useSelector((state) => state.transaction);
  const transactionsaved = transaction;

  const addDecimatAfterPoint = (number) => {
    return (Math.round(number * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimatAfterPoint(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  const shippingPrice =
    itemsPrice > 100 ? addDecimatAfterPoint(20) : addDecimatAfterPoint(5);

  const tax = addDecimatAfterPoint(Number((0.2 * itemsPrice).toFixed(2)));

  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(tax)
  ).toFixed(2);

  useEffect(() => {
    transactionsaved && setId(transactionsaved.transactionsaved._id);
    id && console.log(id);
  }, [id]);
  id && console.log(id);
  const placeOrderHandler = async () => {
    id && console.log(id);

    dispatch(transactionRegister("PAY_ID")).then(() => {
      dispatch(
        orderRegister(
          [
            {
              product: "6059e75c9874fb2228f8e94c",
              name: "Acer Gamer",
              image: ["acer-aspire-gx-781-gaming-pc.jpg"],
              price: 1222,
              countInStock: 12,
              qty: 1,
            },
            {
              product: "6059e75c9874fb2228f8e94c",
              name: "Acer Gamer",
              image: ["acer-aspire-gx-781-gaming-pc.jpg"],
              price: 1222,
              countInStock: 12,
              qty: 1,
            },
          ],
          12333,
          "6059e75c9874fb2228f8e941",
          {
            address: "N 145 block 6 quartier riyad",
            city: "Safi",
            country: "Maroc",
            phone: "0697802293",
            postalCode: "46000",
          },
          "SUCCESS"
        )
      );
    });
  };
  return (
    <>
      <StepsCheckout step1 step2 step3 step4 />
      <Row className="mt-5">
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>Shipping</h2>
              <p>
                <strong>Address :</strong>
                {cart.shippingAddress.address}, {cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{" "}
                {cart.shippingAddress.country}
              </p>
              <p>
                <strong>Phone :</strong>
                {cart.shippingAddress.phone}
              </p>
            </ListGroupItem>

            <ListGroupItem>
              <h2>Payement Method :</h2>

              <strong>Method :</strong>
              {methodsList.payementMethod.name}
            </ListGroupItem>
            <ListGroupItem>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your Cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={"/images/" + item.image[0]}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.price * item.qty}
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>Order Summary</ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Items</Col>
                  <Col>${itemsPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${shippingPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Tax</Col>
                  <Col>${tax}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Total Price</Col>
                  <Col>${totalPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type="submit"
                  className="btn-block"
                  disabled={cart.cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  {" "}
                  Place Order
                </Button>
                <PayPalPayement totalPrice={totalPrice} />
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
