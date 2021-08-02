import React, { useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Route } from "react-router-dom";
import { logout } from "../actions/userActions";
import { useHistory } from "react-router-dom";
import SearchBox from "./SearchBox";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    userInfo && userInfo.id_role.name === "admin" && history.push("/admin");
    userInfo &&
      userInfo.id_role.name === "delivery" &&
      history.push("/delivery");
  }, [history]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Pfa ELectronics</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history} />} />
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart"></i> Cart (
                  {cartItems.reduce((acc, item) => acc + item.qty, 0)})
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                userInfo.id_role.name === "user" && (
                  <>
                    <NavDropdown title={userInfo.name} id="username">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>
                          {" "}
                          <Image
                            src={`/images/${userInfo.image}`}
                            style={{
                              width: "21px",
                              height: "21px",
                              borderRadius: "50%",
                            }}
                          />
                          Profile
                        </NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                )
              ) : (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> SignUp
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
