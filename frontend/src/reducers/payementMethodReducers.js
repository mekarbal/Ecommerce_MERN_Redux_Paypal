import {
  PAYEMENT_METHOD_FAIL,
  PAYEMENT_METHOD_REQUEST,
  PAYEMENT_METHOD_SUCCESS,
  SAVE_PAYEMENT_METHOD,
} from "../constants/payementMethodConstants";

export const payementMethodListReducer = (
  state = { payementMethods: [] ,payementMethod:{}},
  action
) => {
  switch (action.type) {
    case PAYEMENT_METHOD_REQUEST:
      return { loading: true, payementMethods: [] };
    case PAYEMENT_METHOD_SUCCESS:
      return { loading: false, payementMethods: action.payload };
    case PAYEMENT_METHOD_FAIL:
      return { loading: true, error: action.payload };
    case SAVE_PAYEMENT_METHOD:
      return { loading: false, payementMethod: action.payload };
    default:
      return state;
  }
};
