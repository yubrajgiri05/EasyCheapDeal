import React from "react";
import { Col } from "react-bootstrap";
import img from "../General/assets/product.png";
import "./Card.css";

const Card = () => {
  return (
    <>
      <Col lg={3} md={6}>
        <div className="product-card">
          <div className="card-img">
            <img src={img} alt="" />
          </div>
          <div className="card-category">category</div>
          <div className="card-title">title</div>
          <div className="card-price d-flex align-items-center gap-2">
            $ 2000 <span>$ 100</span>
          </div>
          <div className="card-rating">rating</div>
          <div className="add-card">
            <div className="primary-btn">Add to cart</div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default Card;
