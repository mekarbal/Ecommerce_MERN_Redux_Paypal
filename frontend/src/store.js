import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productDetailsReducer,
  productListReducer,
  productBySubCategoryReducer,
} from "./reducers/productReducers";

import { cartReducer } from "./reducers/cartReducers";

import { categoryListReducer } from "./reducers/categoryReducers";
import { subcategoryListReducer } from "./reducers/subCategoryReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  usersListReducer,
  userDeleteReducer,
} from "./reducers/userReducers";

import { payementMethodListReducer } from "./reducers/payementMethodReducers";
import { addTransactionReducer } from "./reducers/transactionReducers";
import { orderRegisterReducer } from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  categoryList: categoryListReducer,
  subCategoryList: subcategoryListReducer,
  productsBySubList: productBySubCategoryReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  methodsList: payementMethodListReducer,
  transaction: addTransactionReducer,
  order: orderRegisterReducer,
  usersList: usersListReducer,
  userDeleted: userDeleteReducer,
});

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },

  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
