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
  const [cat, setCat] = useState(product);
  const [topSellingCat, setTopSellingCat] = useState(product);
  const [showScrollButton, setShowScrollButton] = useState(false);


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setCat(data);
        setTopSellingCat(data)
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

  const topSellingFilter = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category == catItem;
    });
    setProduct(product);
    setTopSellingCat(updateItem);
  };

  const popularFilter = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category == catItem;
    });
    setProduct(product);
    setCat(updateItem);
  };

  const displaySideCards = (catItem) => {
    const filteredProducts = product.filter((curItem) => curItem.category === catItem);
    return filteredProducts.slice(0, 4).map((card, index) => (
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
      <div className="container ">
        <div className="d-flex justify-content-between align-items-center section-margin">
          <h2 className="main-heading">TOP SELLING</h2>
          <div className="catbutton d-flex gap-3">
            <button className="btns" onClick={() => topSellingFilter("electronics")}>
            Electronics
            </button>
            <button
              className="btns"
              onClick={() => topSellingFilter("men's clothing")}
            >
              Men's 
            </button>
            <button
              className="btns"
              onClick={() => topSellingFilter("women's clothing")}
            >
              Women's 
            </button>
            <button className="btns" onClick={() => topSellingFilter("jewelery")}>
              Accessories
            </button>
          </div>
        </div>
        <Row className="gx-4 p-gy-5 ">
          {topSellingCat.slice(0, 4).map((card, index) => {
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
            <button className="btns" onClick={() => popularFilter("electronics")}>
             Electronics
            </button>
            <button
              className="btns"
              onClick={() => popularFilter("men's clothing")}
            >
              Men's
            </button>
            <button
              className="btns"
              onClick={() => popularFilter("women's clothing")}
            >
              Women's 
            </button>
            <button className="btns" onClick={() => popularFilter("jewelery")}>
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
