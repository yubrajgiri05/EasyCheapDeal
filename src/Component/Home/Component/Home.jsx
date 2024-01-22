import React from "react";
import Navbar from "../../General/Navbar";
import Card from "../../General/Card";
import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="d-flex justify-content-between section-margin">
            <h2 className="main-heading">TOP SELLING</h2>
            <div className="catbutton d-flex gap-3">
                <button className="btns">Laptops</button>
                <button className="btns">Smartphones</button>
               < button className="btns">Cameras</button>
              < button className="btns">Accessories</button>
            </div>
        </div>
        <Row className="g-4">
          <Card />
        </Row>
      </div>
    </>
  );
};

export default Home;
