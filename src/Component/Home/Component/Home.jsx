import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar";
import Card from "../../General/Card";
import { Col, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import Sale from "./Sale";
import SideCard from "./SideCard";
import Newsletter from "./Newsletter";
import Footer from "../../General/Footer";

const Home = () => {
  const url = `https://fakestoreapi.com/products`;
  const [product, setProduct] = useState([]);
  const [cat, setCat] = useState(product);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setCat(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filterItem = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category == catItem;
    });
    setProduct(product);
    setCat(updateItem);
  };

  return (
    <>
      <Navbar />
      <CategoryCard />
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center section-margin">
          <h2 className="main-heading">TOP SELLING</h2>
          <div className="catbutton d-flex gap-3">
            <button className="btns" onClick={() => filterItem("electronics")}>
            Electronics
            </button>
            <button
              className="btns"
              onClick={() => filterItem("men's clothing")}
            >
              Men's 
            </button>
            <button
              className="btns"
              onClick={() => filterItem("women's clothing")}
            >
              Women's 
            </button>
            <button className="btns" onClick={() => filterItem("jewelery")}>
              Accessories
            </button>
          </div>
        </div>
        <Row className="gx-4 p-gy-5 ">
          {cat.slice(0, 4).map((card, index) => {
            return (
              <>
                <Card
                  key={index}
                  title={card.title}
                  price={card.price}
                  src={card.image}
                  category={card.category}
                />
              </>
            );
          })}
        </Row>
      </div>
      <Sale />
      <div className="container ">
        <div className="d-flex justify-content-between section-margin align-items-center">
          <h2 className="main-heading">POPULER SELLING</h2>
          <div className="catbutton d-flex gap-3">
            <button className="btns" onClick={() => filterItem("electronics")}>
             Electronics
            </button>
            <button
              className="btns"
              onClick={() => filterItem("men's clothing")}
            >
              Men's
            </button>
            <button
              className="btns"
              onClick={() => filterItem("women's clothing")}
            >
              Women's 
            </button>
            <button className="btns" onClick={() => filterItem("jewelery")}>
              Accessories
            </button>
          </div>
        </div>
        <Row className="gx-4 p-gy-5 ">
          {cat.slice(0, 4).map((card, index) => {
            return (
              <>
                <Card
                  key={index}
                  title={card.title}
                  price={card.price}
                  src={card.image}
                  category={card.category}
                />
              </>
            );
          })}
        </Row>
        <div className="section-margin pt-5">
          <Row className="side">
            <Col lg={4} md={6}>
              <h2>TOP SELLING</h2>
              {product.slice(0, 4).map((card, index) => {
                return (
                  <>
                    <SideCard
                      key={index}
                      title={card.title}
                      price={card.price}
                      src={card.image}
                      category={card.category}
                    />
                  </>
                );
              })}
            </Col>
            <Col lg={4} md={6}>
            <h2>TOP SELLING</h2>
              {product.slice(0, 4).map((card, index) => {
                return (
                  <>
                    <SideCard
                      key={index}
                      title={card.title}
                      price={card.price}
                      src={card.image}
                      category={card.category}
                    />
                  </>
                );
              })}
            </Col>
            <Col lg={4} md={6}>
            <h2>POPULER SELLING</h2>
              {product.slice(0, 4).map((card, index) => {
                return (
                  <>
                    <SideCard
                      key={index}
                      title={card.title}
                      price={card.price}
                      src={card.image}
                      category={card.category}
                    />
                  </>
                );
              })}
            </Col>
          </Row>
        </div>
      </div>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Home;
