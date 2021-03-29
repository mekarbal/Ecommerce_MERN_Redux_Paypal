import axios from "axios";
import {
  PAYEMENT_METHOD_FAIL,
  PAYEMENT_METHOD_REQUEST,
  PAYEMENT_METHOD_SUCCESS,
  SAVE_PAYEMENT_METHOD,
} from "../constants/payementMethodConstants";

export const listPayementMethods = async (dispatch) => {
  try {
    dispatch({ type: PAYEMENT_METHOD_REQUEST });
    const { data } = await axios.get("http://localhost:5000/payementMethod/");

    dispatch({
      type: PAYEMENT_METHOD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PAYEMENT_METHOD_FAIL,
      payload: error,
    });
  }
};
export const savePayementMethod = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_PAYEMENT_METHOD,
    payload: data,
  });
  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
