import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <>
        <div className="section" key={category._id}>
          <div className="cardG">
            <div className="card-front">
              <Card.Img src={"/images/" + category.image} variant="" />
            </div>
            <div className="card-back">
              <Link to={"/subcat/" + category._id}>
                <h3>{category.name}</h3>
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Category;
