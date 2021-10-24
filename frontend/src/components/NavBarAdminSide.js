import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const NavBarAdminSide = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <NavLink style={{ color: "white" }} exact to="/admin">
              Pfa Electronics
            </NavLink>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <NavLink exact to="/admin" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">
                  Dashboard
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/admin/users" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Users</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/admin/orders" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Orders</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/analytics" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="chart-line">
                  Analytics
                </CDBSidebarMenuItem>
              </NavLink>
              <NavLink
                exact
                to="/hero404"
                target="_blank"
                activeClassName="activeClicked"
              >
                <CDBSidebarMenuItem icon="exclamation-circle">
                  404 page
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarMenuItem icon="chart-line" onClick={logoutHandler}>
            Logout
          </CDBSidebarMenuItem>
          <CDBSidebarFooter style={{ textAlign: "center" }}>
            <div
              style={{
                padding: "20px 5px",
              }}
            >
              Elmahdi KARBAL 2021
            </div>
          </CDBSidebarFooter>
        </CDBSidebar>
      </div>
    </>
  );
};

export default NavBarAdminSide;
