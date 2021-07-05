import {
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

    default:
      return state;
  }
};
