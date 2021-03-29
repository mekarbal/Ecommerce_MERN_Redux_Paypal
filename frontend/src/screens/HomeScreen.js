import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import { listCategories } from "../actions/categoryActions";
import Category from "../components/Category";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  

  useEffect(() => {
    dispatch(listProducts);
    dispatch(listCategories);
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <h1>All Categories</h1>
          <Row>
            {categories.map((category) => (
              <Col sm={12} md={6} lg={4} xl={3} key={category._id}>
                <Category category={category} />
              </Col>
            ))}
          </Row>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default HomeScreen;
