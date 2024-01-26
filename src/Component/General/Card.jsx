import React from "react";
import { Col } from "react-bootstrap";
import "./Card.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Card = ({ title, price, src, category,id }) => {
  return (
    <>
      <Col lg={3} md={6}>
        <NavLink to={`/productdetail/${id}`}>
        <div className="product-card">
            <div className="card-img">
              <img src={src} alt="" />
            </div>
            <div className="card-category">{category}</div>
            <div className="card-title">{title.slice(0, 20)}</div>
            <div className="card-price d-flex align-items-center gap-2">
              $ {price} <span>$ 100</span>
            </div>
            <div className="card-rating d-flex gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <FaRegStar />
            </div>
            <div className="add-card">
              <div className="primary-btn">Add to cart</div>
            </div>
          </div>
        </NavLink>
      </Col>
    </>
  );
};

export default Card;
