import React from "react";
import "./footer.css";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

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
                     reprehenderi commodi!
                  </p>
                </li>
                <li className="nav-item d-flex align-items-center gap-2">
                    <FaLocationDot/> Santinagar, Kathmandu
                </li>
                <li className="nav-item d-flex align-items-center gap-2">
                    <FaPhoneAlt/>  <NavLink to="tel:5551234567">9877655432</NavLink>
                </li>
                <li className="nav-item d-flex align-items-center gap-2">
                    <IoIosMail/> <NavLink to="mailto:xyz@abc.com">mailto:xyz@abc.com</NavLink>

                </li>
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
      <div className="copyright">
        <div className="copy-text">
        Copyright ©2024 All rights reserved | This template is made with  by <span>ABC TECONG</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
