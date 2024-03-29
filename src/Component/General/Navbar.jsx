import React from "react";
import "./navbar.css";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Navbar = ({filterItems}) => {
  
  return (
    <>
      <nav class="navbar">
        <div className="nav-search d-flex justify-content-between container">
          <NavLink to="/" className="nav-brand">EASYCHEAPDEAL</NavLink>
          <form action="" className="d-flex gap-0">
            <select
              required="required"
              name="SearchKey"
              className="form-control"
            >
              <option value="Categories" disabled>
                All Categories
              </option>
              <option value="Categories01"> Men's Shopping</option>
              <option value="Categories02"> Women's Shopping</option>
              <option value="Categories02"> Electronic</option>
              <option value="Categories02"> Accessories</option>
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
            <NavLink to="/"  className="nav-link active" aria-current="page" href="#">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="" className="nav-link" >
              Hot Deals
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="" className="nav-link" >
              Categories
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/product" onClick={() => filterItems("men's clothing")} className="nav-link" >
              Men's 
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/product" onClick={() => filterItems("women's clothing")} className="nav-link">
              Womens's
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/product" onClick={() => filterItems("electronics")} className="nav-link">
              Electronic
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/product" onClick={() => filterItems("jewelery")} className="nav-link">
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
