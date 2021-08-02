import axios from "axios";
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

export const listProducts =
  (keyword = "", pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get(
        `http://localhost:5000/product?keyword=${keyword}&pageNumber=${pageNumber}`
      );
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error,
      });
    }
  };

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get("http://localhost:5000/product/" + id);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error,
    });
  }
};

export const listProductsBySubCat = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_BY_SUBCATEGORY_REQUEST });
    const { data } = await axios.get(
      "http://localhost:5000/product/productBySub/" + id
    );

    dispatch({
      type: PRODUCT_BY_SUBCATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_BY_SUBCATEGORY_FAIL,
      payload: error,
    });
  }
};
