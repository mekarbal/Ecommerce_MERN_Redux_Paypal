import {
  PRODUCT_BY_SUBCATEGORY_FAIL,
  PRODUCT_BY_SUBCATEGORY_REQUEST,
  PRODUCT_BY_SUBCATEGORY_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productContants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

export const productBySubCategoryReducer = (
  state = { productsbySub: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_BY_SUBCATEGORY_REQUEST:
      return { loading: true, productsbySub: [] };
    case PRODUCT_BY_SUBCATEGORY_SUCCESS:
      return { loading: false, productsbySub: action.payload };
    case PRODUCT_BY_SUBCATEGORY_FAIL:
      return { loading: true, errors: action.payload };
    default:
      return state;
  }
};
