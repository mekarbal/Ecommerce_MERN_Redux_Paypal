import {
  TRANSACTION_ADD_FAIL,
  TRANSACTION_ADD_REQUEST,
  TRANSACTION_ADD_SUCCESS,
} from "../constants/transactionConstants";
import axios from "axios";
export const transactionRegister =
  (idPayementTransaction) => async (dispatch) => {
    try {
      dispatch({
        type: TRANSACTION_ADD_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/transaction/",
        { idPayementTransaction },
        config
      );

      dispatch({
        type: TRANSACTION_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TRANSACTION_ADD_FAIL,
        payload: error,
      });
    }
  };
