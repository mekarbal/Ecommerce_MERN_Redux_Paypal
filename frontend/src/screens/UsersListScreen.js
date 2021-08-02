import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {
  getUserDetails,
  getUsersList,
  deleteUser,
} from "../actions/userActions";

const UsersListScreen = () => {
  const dispatch = useDispatch();
  const usersList = useSelector((state) => state.usersList);
  const userLogin = useSelector((state) => state.userLogin);
  const userDetails = useSelector((state) => state.userDetails);
  const { users, loading, error } = usersList;
  const { userInfo } = userLogin;
  const { user } = userDetails;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const deleteHandler = (id) => {
    dispatch(deleteUser(id)).then(() => dispatch(getUsersList()));
  };

  const getUserInfo = (id) => {
    setShow(true);
    dispatch(getUserDetails(id));
  };

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <Container style={{ flexDirection: "column" }}>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}
      {users && (
        <>
          <h1>Users</h1>
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
                <th>Address</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map(
                  (user, index) =>
                    user.email !== userInfo.email && (
                      <tr key={index}>
                        <td>
                          <img
                            src={"/images/" + user.image}
                            alt={user.image}
                            style={{
                              width: "30px",
                              height: "30",
                              borderRadius: 50,
                            }}
                          />
                        </td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        <td>
                          <Button
                            variant="danger"
                            className="btn-sm mr-2 "
                            onClick={() => deleteHandler(user._id)}
                          >
                            <i className="fa fa-trash"></i>
                          </Button>
                          <Button
                            variant="success    "
                            className="btn-sm"
                            onClick={() => getUserInfo(user._id)}
                          >
                            <i class="fas fa-info-circle"></i>
                          </Button>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title
                style={{ color: "#9da39e", textAlign: "center" }}
              >{`Info of ${user && user.name}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  padding: "12px",
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <img
                  src={user && `/images/${user.image}`}
                  alt={user.image}
                  style={{ width: "120px", height: "120px" }}
                />
                <div>
                  <h4>
                    <i class="fas fa-user"></i> {user && user.name}
                  </h4>
                  <h4>
                    <i class="fas fa-address-card"></i> {user && user.address}
                  </h4>
                  <h4>
                    <i class="fas fa-envelope"></i> {user && user.email}
                  </h4>
                </div>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </Container>
  );
};

export default UsersListScreen;
