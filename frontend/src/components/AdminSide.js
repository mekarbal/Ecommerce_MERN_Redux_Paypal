import React from "react";
import { Route } from "react-router-dom";
import DashboardScreen from "../screens/DashboardScreen";
import ProductsScreen from "../ProductsScreen";
import ProductsScreenDash from "../screens/ProductsScreenDash";
import NavBarAdminSide from "./NavBarAdminSide";
const AdminSide = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBarAdminSide />
      {/* <Container> */}
      <Route path="/admin/" component={DashboardScreen} exact></Route>
      <Route path="/admin/products" component={ProductsScreenDash}></Route>
      {/* </Container> */}
    </div>
  );
};

export default AdminSide;
