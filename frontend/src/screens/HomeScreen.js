import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productActions";
import Loader from "../components/Loader";
import { listCategories } from "../actions/categoryActions";
import Category from "../components/Category";
import Paginate from "../components/Paginate";
const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error, page, pages } = productList;

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch(listCategories);
  }, [dispatch, keyword, pageNumber]);
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
          <Paginate pages={pages} page={page} keyword={keyword} />
        </>
      )}
    </>
  );
};

export default HomeScreen;
