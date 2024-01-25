import React, { useState } from "react";
import "./card.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "./assets/product01.png/";
import { Col, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";

const Carddetail = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Navbar />
      <div className="conatiner py-5 card-detail">
        <Row className="g-5">
          <Col lg={6}>
            <img src={img} alt="" style={{height:500}} />
          </Col>
          <Col lg={6} className="d-flex flex-column gap-2">
            <div className="card-category">Category / Title </div>
            <div className="card-title">Title of the product</div>
            <div className="d-flex gap-2">
              <div className="card-rating d-flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </div>
              <div className="card-rating-number">2k</div>
            </div>
            <h2>Product Description</h2>
            <div className="card-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              quaerat nisi dolorem obcaecati libero distinctio vel possimus quae
              ex explicabo beatae esse dicta, soluta natus. Sapiente architecto
              quos quae, velit error ipsum! Molestias, facilis libero excepturi
              tempora aut quaerat odio!
            </div>
            <div className="card-price d-flex align-items-center gap-2">
              $ 5000 <span>$ 100</span>
            </div>
            <div className="item-quantity d-flex gap-3 align-items-center">
              <button className="count-btn bg-dark"  onClick={increaseCount}><FaPlus/></button>
              <div className="count"> {count}</div>
              <button className="count-btn"  onClick={decreaseCount}><FaMinus/></button>
            </div>
            <div className="primary-btn">Add to cart</div>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Carddetail;
