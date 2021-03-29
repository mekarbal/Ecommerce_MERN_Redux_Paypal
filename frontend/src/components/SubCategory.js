import React, { useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { listProductsBySubCat } from "../actions/productActions";
import { listSubCategories } from "../actions/subCategoryActions";
import ProductBySubCat from "../screens/ProductBySubCat";
import Loader from "./Loader";
const SubCategory = ({ match }) => {
  const dispatch = useDispatch();
  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { loading, subcategories, error } = subCategoryList;

  const productsBySubList = useSelector((state) => state.productsBySubList);
  const { productsbySub } = productsBySubList;

  useEffect(() => {
    dispatch(listSubCategories(match.params.id));
  }, [dispatch, match]);

  const getProductsBySubCategory = (id) => {
    dispatch(listProductsBySubCat(id));
    console.log(productsbySub);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <>
          <Row
            style={{
              border: "1px solid #7b8a8b",
            }}
          >
            {subcategories.map((sub) => (
              <Col sm={12} md={6} lg={4} xl={3} key={sub._id}>
                <div className="section">
                  <div className="cardG">
                    <div className="card-front">
                      <Card.Img src={"/images/" + sub.image} variant="" />
                    </div>
                    <div className="card-back">
                      <Button onClick={() => getProductsBySubCategory(sub._id)}>
                        <h3>{sub.name}</h3>
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {productsbySub && (
            <>
              <h1>Latest products</h1>
              <Row>
                {productsbySub.map((product) => (
                  <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                    <ProductBySubCat product={product} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SubCategory;
