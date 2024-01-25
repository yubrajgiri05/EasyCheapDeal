import {React,useState,useEffect} from "react";
import Navbar from "../../General/Navbar";
import Footer from "../../General/Footer";
import Card from "../../General/Card";
import { Row } from "react-bootstrap";

const Product = ({url}) => {
 const [product,setProduct]=useState([]);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setProduct(data);
    })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navbar />
      <div className="products-card container my-4">
        <Row className="gx-5 p-gy-5">
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
      <Footer />
    </>
  );
};

export default Product;
