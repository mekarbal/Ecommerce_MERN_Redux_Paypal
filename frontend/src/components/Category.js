import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  return (
    <div>
      <>
        <section className="categories" key={category._id}>
          <ul>
            <Link to={"/subcat/" + category._id}>
              <li id="categ1" className="buttonfx">
                <div className="card-front">
                  <Card.Img src={"/images/" + category.image} variant="" />
                </div>
                <div className="cont-txt">
                  <h3>{category.name}</h3>
                </div>
              </li>
            </Link>
          </ul>
        </section>
      </>
    </div>
  );
};

export default Category;
