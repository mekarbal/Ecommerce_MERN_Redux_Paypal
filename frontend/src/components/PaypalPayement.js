import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { transactionRegister } from "../actions/transactionActions";
import { orderRegister } from "../actions/orderActions";
import { removeCartItems } from "../actions/cartActions";

export default function PaypalButton(props) {
  const paypal = useRef();
  const history = useHistory();
  const dispatch = useDispatch();

  const { totalPrice } = props;
  totalPrice && console.log(totalPrice);
  const userLogin = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { userInfo } = userLogin;
  const { shippingAddress } = cart;
  const products = JSON.parse(localStorage.getItem("cartItems"));

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking table",
                amount: {
                  currency_code: "USD",
                  value: totalPrice,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          order &&
            dispatch(transactionRegister(order.id)).then(() => {
              dispatch(
                orderRegister(
                  products,
                  totalPrice,
                  userInfo._id,
                  shippingAddress
                )
              );
              dispatch(removeCartItems());

              history.push("/");
            });
        },
        onError: (err) => {
          history.push("/");
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
}
