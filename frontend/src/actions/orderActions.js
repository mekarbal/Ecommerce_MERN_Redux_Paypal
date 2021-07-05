import axios from "axios";
import {
  ORDERS_ADD_FAIL,
  ORDERS_ADD_REQUEST,
  ORDERS_ADD_SUCCESS,
} from "../constants/orderConstants";
import { transactionRegister } from "./transactionActions";

export const orderRegister =
  (products, totalPrice, id_user, address) => async (dispatch, getState) => {
    try {
      //   dispatch(transactionRegister("PAY_ID"));
      const idTra = await getState().transaction.transaction.transactionsaved
        ._id;
      await dispatch({
        type: ORDERS_ADD_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      idTra && console.log(idTra);

      const { data } = await axios.post(
        "http://localhost:5000/order/",
        {
          id_transaction: idTra,
          products: products,
          totalPrice: totalPrice,
          id_user,
          address,
        },
        config
      );

      await dispatch({
        type: ORDERS_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDERS_ADD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
