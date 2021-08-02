import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserSide from "./components/UserSide";
import AdminSide from "./components/AdminSide";
import DeliverySide from "./components/DeliverySide";
const App = () => {
  return (
    <Router>
      <Route path="/login" component={UserSide} exact></Route>
      <Route path="/shipping" component={UserSide} exact></Route>
      <Route path="/placeorder" component={UserSide}></Route>
      <Route path="/payement" component={UserSide} exact></Route>
      <Route path="/register" component={UserSide} exact></Route>
      <Route path="/profile" component={UserSide} exact></Route>
      <Route path="/" component={UserSide} exact></Route>
      <Route path="/search/:keyword" component={UserSide} exact></Route>
      <Route path="/page/:pageNumber" component={UserSide} exact></Route>
      <Route
        path="/search/:keyword/page/:pageNumber"
        component={UserSide}
        exact
      ></Route>
      <Route path="/product/:id" component={UserSide}></Route>
      <Route path="/subcat/:id" component={UserSide}></Route>
      <Route path="/cart/:id?" component={UserSide}></Route>
      <Route path="/admin" component={AdminSide} exact></Route>
      <Route path="/admin/users" component={AdminSide}></Route>
      <Route path="/delivery" component={DeliverySide} exact></Route>
    </Router>
  );
};

export default App;
