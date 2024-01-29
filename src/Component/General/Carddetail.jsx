import React, { useEffect, useState } from "react";
import "./card.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "./assets/product01.png/";
import { Col, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";

const Carddetail = ({ url }) => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <Navbar />
      {/* {product.map((card) => {
        return (
          <>
            <h1>{card.title}</h1>
          </>
        );
      })} */}
      <div className="conatiner py-4 card-detail">
        <Row className="g-5">
          <Col lg={6}>
            <img src={img} alt="" style={{ height: 500 }} />
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
              great outerwear jackets for Spring/Autumn/Winter, suitable for
              many occasions, such as working, hiking, camping, mountain/rock
              climbing, cycling, traveling or other outdoors. Good gift choice
              for you or your family member. A warm hearted love to Father,
              husband or son in this thanksgiving or Christmas Day.
            </div>
            <div className="card-price d-flex align-items-center gap-2">
              $ 5000 <span>$ 100</span>
            </div>
            <div className="item-quantity d-flex gap-3 align-items-center">
              <button className="count-btn bg-dark" onClick={increaseCount}>
                <FaPlus />
              </button>
              <div className="count"> {count}</div>
              <button className="count-btn" onClick={decreaseCount}>
                <FaMinus />
              </button>
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
