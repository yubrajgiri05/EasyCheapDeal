import {React,useState,useEffect} from "react";
import Navbar from "../../General/Navbar";
import Footer from "../../General/Footer";
import Card from "../../General/Card";
import { Row } from "react-bootstrap";

const Product = ({url}) => {
 const [product,setProduct]=useState([]);
 const [populercat, setPopulercat] = useState(product);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setProduct(data);
      setPopulercat(data);
    })
      .catch((error) => console.log(error));
  }, []);

  const filterItems = (catItem) => {
    const updateItem = product.filter((curItem) => {
      return curItem.category == catItem;
    });
    setProduct(product);
    setPopulercat(updateItem);
  };

  return (
    <>
      <Navbar filterItems={filterItems}/>
      <div className="products-card container my-5">
        <Row className="gx-5 p-gy-5">
          {populercat.map((card) => {
            return (
              <>
                <Card
                  id={card.id}
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
