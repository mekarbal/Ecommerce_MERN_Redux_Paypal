import axios from "axios";
import {
  SUBCATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
} from "../constants/subCategoryConstants";

export const listSubCategories = (id) => async (dispatch) => {
  try {
    dispatch({ type: SUBCATEGORY_LIST_REQUEST });
    const { data } = await axios.get(
      "http://localhost:5000/ssCategory/subcat/" + id
    );

    dispatch({
      type: SUBCATEGORY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBCATEGORY_LIST_FAIL,
      payload: error,
    });
  }
};
