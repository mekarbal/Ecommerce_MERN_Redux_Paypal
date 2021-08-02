import React from "react";
import { Route } from "react-router-dom";
import DashboardScreen from "../screens/DashboardScreen";
import ProductsScreen from "../ProductsScreen";
import NavBarAdminSide from "./NavBarAdminSide";
import UsersListScreen from "../screens/UsersListScreen";
const AdminSide = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavBarAdminSide />
      {/* <Container> */}
      <Route path="/admin/" component={DashboardScreen} exact></Route>
      <Route path="/admin/users" component={UsersListScreen}></Route>
      {/* </Container> */}
    </div>
  );
};

export default AdminSide;
