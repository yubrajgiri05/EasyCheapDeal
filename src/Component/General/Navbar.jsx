import React from "react";
import "./navbar.css";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <nav class="navbar">
        <div className="nav-search d-flex justify-content-between container">
          <NavLink to="" className="nav-brand">EASYCHEAPDEAL</NavLink>
          <form action="" className="d-flex gap-0">
            <select
              required="required"
              name="SearchKey"
              className="form-control"
            >
              <option value selected disabled>
                All Categories
              </option>
              <option value="Categories01"> Categories 01</option>
              <option value="Categories02"> Categories02</option>
            </select>
            <div className="input-group md-form form-sm form-2 pl-0">
              <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="form-control search-box">Search</div>
            </div>
          </form>
          <div className="navbutton d-flex gap-3">
            <div className="wishlist d-flex  gap-1 align-items-center flex-column">
              <CiHeart />
              <p>Your wishlist</p>
            </div>
            <div className="wishlist d-flex  gap-1 align-items-center flex-column">
              <CiShoppingCart />
              <p>Your Cart</p>
            </div>
          </div>
        </div>
      </nav>

      <div className=" navbar-main">
        <div className="container">
        <ul className="d-flex gap-3">
          <li className="nav-item">
            <NavLink to="" className="nav-link active" aria-current="page" href="#">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Hot Deals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Laptops
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Smartphones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Cameras
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Accessories
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
