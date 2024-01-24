import React from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer ">
        <div className="container">
          <Row className="gx-5 gy-3">
            <Col lg={3} md={6}>
              <div className="footer-title">ABOUT US</div>
              <ul className="d-flex flex-column gap-2">
                <li className="nav-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Autem accusamus voluptatum incidunt, reprehenderi commodi!
                  </p>
                </li>
                <li className="nav-item"></li>
                <li className="nav-item">aa</li>
                <li className="nav-item">aa</li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-title">CATEGORIES </div>
              <ul className="d-flex flex-column gap-2">
                <li className="nav-item">
                  <NavLink to="/">Hot deals</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Laptop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Smartphones</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Cameras</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Accessories</NavLink>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-title">INFORMATION </div>
              <ul className="d-flex flex-column gap-2">
                <li className="nav-item">
                  <NavLink to="/">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Privacy Policy </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Contact Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Privacy Policy</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Terms & Conditions</NavLink>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer-title">SERVICE </div>
              <ul className="d-flex flex-column gap-2">
                <li className="nav-item">
                  <NavLink to="/">My Account</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">View Cart</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Wishlist</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Track My Order</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/">Help
</NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Footer;
