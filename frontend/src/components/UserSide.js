import React from "react";
import { Route } from "react-router-dom";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import PayementMethodsScreen from "../screens/PayementMethodsScreen";
import PlaceOrderScreen from "../screens/PlaceOrderScreen";
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ShippingScreen from "../screens/ShippingScreen";
import SubCategory from "./SubCategory";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const UserSide = () => {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Route path="/login" component={LoginScreen} exact></Route>
          <Route path="/shipping" component={ShippingScreen} exact></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route
            path="/payement"
            component={PayementMethodsScreen}
            exact
          ></Route>
          <Route path="/register" component={RegisterScreen} exact></Route>
          <Route path="/profile" component={ProfileScreen} exact></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/subcat/:id" component={SubCategory}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default UserSide;
