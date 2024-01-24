import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar";
import Footer from "../../General/Footer";
import { Container, Row } from "react-bootstrap";
import Card from "../../General/Card";

const Product = () => {
  const url = `https://fakestoreapi.com/products`;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setTopcat(data);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <Navbar />
      <Container>
        <div className="section-margin product-box">
        <Row className="gx-4 p-gy-5 ">
          {product.map((card, index) => {
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
      </Container>
      <Footer />
    </>
  );
};

export default Product;
