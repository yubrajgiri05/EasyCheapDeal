import React from "react";
import "../home.css";

import image from "../../General/assets/product.png";
import image01 from "../../General/assets/product01.png";

const Sale = () => {
  return (
    <>
      <div className="container-fluide sale">
        <div className="d-flex gap-3 align-items-center">
          <img src={image} alt="" />
          <div className="saleitem d-flex flex-column gap-2 align-items-center">
            <div className="d-flex gap-2">
              <div className="sale-box d-flex flex-column">02 <p>DAY</p></div>
              <div className="sale-box d-flex flex-column">10 <p>HOURS</p></div>
              <div className="sale-box d-flex flex-column">45 <p>MINS</p></div>
              <div className="sale-box d-flex flex-column">60 <p>SEC</p></div>
            </div>
            <div className="sale-deal">HOT DEAL THIS WEEK</div>
            <div className="sale-discount">NEW COLLECTION UP TO 50% OFF</div>
            <div className="primary-btn">Shop Now</div>
          </div>
          <img src={image01} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sale;
