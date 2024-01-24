import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar";
import Card from "../../General/Card";
import { Col, Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import Sale from "./Sale";
import SideCard from "./SideCard";
import Newsletter from "./Newsletter";
import Footer from "../../General/Footer";
import "../../../App.css"
import { FaArrowUp} from 'react-icons/fa';

const Home = () => {
  const url = `https://fakestoreapi.com/products`;
  const [product, setProduct] = useState([]);
  const [topcat, setTopcat] = useState(product);
  const [populercat, setPopulercat] = useState(product);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setTopcat(data);
        setPopulercat(data);
      })
      .catch((error) => console.log(error));
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setShowScrollButton(scrollTop > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  }, []);

  const filterItem = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category == catItem;
    });
    setProduct(product);
    setTopcat(updateItem);

  };
  const filterItems = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category == catItem;
    });
    setProduct(product);
    setPopulercat(updateItem);
  };

  const displaySideCards = (catItem) => {
    const filteredProducts = product.filter((curItem) => curItem.category === catItem);
    return filteredProducts.slice(0, 3).map((card, index) => (
      <SideCard
        key={index}
        title={card.title}
        price={card.price}
        src={card.image}
        category={card.category}
      />
    ));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <CategoryCard />
      <div className="container">
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
          {topcat.slice(0, 4).map((card, index) => {
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
            <button className="btns" onClick={() => filterItems("electronics")}>
             Electronics
            </button>
            <button
              className="btns"
              onClick={() => filterItems("men's clothing")}
            >
              Men's
            </button>
            <button
              className="btns"
              onClick={() => filterItems("women's clothing")}
            >
              Women's 
            </button>
            <button className="btns" onClick={() => filterItems("jewelery")}>
              Accessories
            </button>
          </div>
        </div>
        <Row className="gx-4 p-gy-5 ">
          {populercat.slice(0, 4).map((card, index) => {
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
              <h2>MEN SELLING</h2>
              {displaySideCards("men's clothing")}
            </Col>
            <Col lg={4} md={6}>
              <h2>WOMEN SELLING</h2>
              {displaySideCards("women's clothing")}
            </Col>
            <Col lg={4} md={6}>
              <h2>ELECTRONICS</h2>
              {displaySideCards("electronics")}
            </Col>
          </Row>
        </div>
      </div>
      <Newsletter/>
      {showScrollButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp onClick={scrollToTop} className="text-3xl text-gray-500 hover:text-gray-700" />
        </button>
      )}
      <Footer/>
    </>
  );
};

export default Home;
