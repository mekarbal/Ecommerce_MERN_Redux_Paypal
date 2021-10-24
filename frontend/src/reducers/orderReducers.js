import {
  GET_ORDERS_FAIL,
  GET_ORDERS_REQUEST,
  GET_ORDERS_SUCCESS,
  ORDERS_ADD_FAIL,
  ORDERS_ADD_REQUEST,
  ORDERS_ADD_SUCCESS,
} from "../constants/orderConstants";

export const orderRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDERS_ADD_REQUEST:
      return { loading: true };
    case ORDERS_ADD_SUCCESS:
      return { order: action.payload };
    case ORDERS_ADD_FAIL:
      return { error: action.payload };
    case GET_ORDERS_REQUEST:
      return { loading: true };
    case GET_ORDERS_SUCCESS:
      return { orders: action.payload.data };
    case GET_ORDERS_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
