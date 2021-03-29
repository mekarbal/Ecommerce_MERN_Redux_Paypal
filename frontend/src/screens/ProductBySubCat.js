import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";

const ProductBySubCat = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={"/images/" + product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">{product.name}</Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.countReviews}
              text={` reviews`}
              color="yellow"
            />
          </Card.Text>
          <Card.Text as="h3">$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductBySubCat;
