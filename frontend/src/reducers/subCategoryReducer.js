import {
  SUBCATEGORY_LIST_FAIL,
  SUBCATEGORY_LIST_REQUEST,
  SUBCATEGORY_LIST_SUCCESS,
} from "../constants/subCategoryConstants";

export const subcategoryListReducer = (state = { subcategories: [] }, action) => {
  switch (action.type) {
    case SUBCATEGORY_LIST_REQUEST:
      return { loading: true, subcategories: [] };
    case SUBCATEGORY_LIST_SUCCESS:
      return { loading: false, subcategories: action.payload };
    case SUBCATEGORY_LIST_FAIL:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};
