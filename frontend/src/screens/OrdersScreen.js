import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllorders } from "../actions/orderActions";
import { getUsersList } from "../actions/userActions";
import Loader from "../components/Loader";
import Message from "../components/Message";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const ordersList = useSelector((state) => state.order);
  const usersList = useSelector((state) => state.usersList);
  const { orders, loading, error } = ordersList;
  const { users } = usersList;
  const [showModal, setShowModel] = useState(false);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  useEffect(() => {
    dispatch(getAllorders());
  }, []);
  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);
  const showOrderHandler = (user, order) => {
    setShowModel(true);
    setUser(user);
    setOrder(order);
  };
  return (
    <Container style={{ flexDirection: "column" }}>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {orders && (
        <>
          <h1>orders</h1>
          <Table
            striped
            hover
            responsive
            className="table-sm"
            style={{ textAlign: "center" }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Buyer Name</th>
                <th>Address</th>
                <th>Amount</th>
                <th>Full Details</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, index) => (
                  <tr key={index}>
                    <td>
                      {order.updatedAt.slice(0, 10)}{" "}
                      {order.updatedAt.slice(11, 16)}
                    </td>
                    <td>
                      {users &&
                        users?.map(
                          (user) => user._id === order.id_user && user.name
                        )}
                      {/* {order.id_user} */}
                    </td>
                    <td>{order.address.address}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {" "}
                      <Button
                        variant="primary"
                        className="btn-sm mr-2 "
                        onClick={() => {
                          users &&
                            users?.map(
                              (user) =>
                                user._id === order.id_user &&
                                showOrderHandler(user, order)
                            );
                        }}
                      >
                        <i class="fas fa-eye"></i> View
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <Modal show={showModal} onHide={() => setShowModel(false)}>
            <Modal.Header closeButton>
              <Modal.Title style={{ color: "#9da39e", textAlign: "center" }}>
                {user?.name} Order
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <>
                <h3 className="text-center">Full Details</h3>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "grey",
                  }}
                ></div>
                <Table
                  striped
                  hover
                  responsive
                  className="table-sm"
                  style={{ textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order &&
                      order?.products?.map((product, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              src={"/images/" + product.image}
                              alt={product.image}
                              style={{
                                width: "30px",
                                height: "30",
                                borderRadius: 50,
                              }}
                            />
                          </td>
                          <td>{product.name}</td>
                          <td>${product.price}</td>
                          <td>{product?.qty}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
                <div
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "grey",
                    marginTop: 15,
                  }}
                ></div>
                <Table
                  striped
                  hover
                  responsive
                  className="table-sm mt-4"
                  style={{ textAlign: "center" }}
                >
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>City</th>
                      <th>Postal Code</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{order?.address?.address}</td>
                      <td>{order?.address?.phone}</td>
                      <td>{order?.address?.city}</td>
                      <td>{order?.address?.postalCode}</td>
                      <td>{order?.address?.country} </td>
                    </tr>
                  </tbody>
                </Table>
                <div
                  style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: order?.isLivred ? "green" : "red",
                    padding: 9,
                    justifyContent: "center",
                    alignSelf: "center",
                    flexDirection: "row",
                  }}
                >
                  <h3 className="primary" style={{ color: "#fff" }}>
                    {order?.isLivred ? "Livred" : "Not yet"}
                  </h3>
                </div>
              </>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModel(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default OrdersScreen;
