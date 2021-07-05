import React, { useEffect, useState } from "react";
import { Form, Button, FormGroup, FormLabel, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import {
  listPayementMethods,
  savePayementMethod,
} from "../actions/payementMethodActions";
import StepsCheckout from "../components/StepsCheckout";
import Loader from "../components/Loader";
import Message from "../components/Message";
const PayementMethodsScreen = ({ history }) => {
  const [payementMethod, setPayementMethod] = useState([
    {
      name: "",
      _id: "",
    },
  ]);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const methodsList = useSelector((state) => state.methodsList);
  const { loading, payementMethods, error } = methodsList;

  if (!shippingAddress) history.push("/shipping");

  useEffect(() => {
    dispatch(listPayementMethods);
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(payementMethod);
    dispatch(savePayementMethod(payementMethod));
    history.push("/placeorder");
  };
  return (
    <FormContainer>
      {loading && <Loader />}
      <StepsCheckout step1 step2 step3 />
      <h1>Payement Method</h1>
      {error && <Message variant="danger">{error}</Message>}
      <FormLabel as="legend">Select Method</FormLabel>
      <Form onSubmit={submitHandler}>
        {payementMethods &&
          payementMethods.map((itemMethod) => (
            <FormGroup key={itemMethod._id}>
              <Col>
                <Form.Check
                  type="radio"
                  label={itemMethod.name}
                  id={itemMethod.name}
                  name={itemMethod.name}
                  value={itemMethod}
                  onChange={(e) => setPayementMethod(itemMethod)}
                ></Form.Check>
              </Col>
            </FormGroup>
          ))}

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PayementMethodsScreen;
