import axios from "axios";
import {
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
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
export const getAllorders = () => async (dispatch) => {
  try {
    await dispatch({
      type: GET_ORDERS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("http://localhost:5000/order/", config);

    await dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
