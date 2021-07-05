import {
  TRANSACTION_ADD_FAIL,
  TRANSACTION_ADD_SUCCESS,
  TRANSACTION_ADD_REQUEST,
} from "../constants/transactionConstants";

export const addTransactionReducer = (state = {}, action) => {
  switch (action.type) {
    case TRANSACTION_ADD_REQUEST:
      return { loading: true };
    case TRANSACTION_ADD_SUCCESS:
      return { transaction: action.payload };
    case TRANSACTION_ADD_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
