import React from "react";
import { Col } from "react-bootstrap";
import "./Card.css";

const Card = ({title,price,src,category}) => {
  return (
    <>
      <Col lg={3} md={6}>
        <div className="product-card mt-4">
          <div className="card-img">
            <img src={src} alt="" />
          </div>
          <div className="card-category">{category}</div>
          <div className="card-title">{title.slice(0,20)}</div>
          <div className="card-price d-flex align-items-center gap-2">
            $ {price} <span>$ 100</span>
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
