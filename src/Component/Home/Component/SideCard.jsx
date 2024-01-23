import React from "react";
import "../home.css";
import img from '../../General/assets/product.png'

const SideCard = ({title,category,price,src}) => {
  return (
    <>
        <div className="side-card d-flex gap-2 align-items-center">
          <div className="card-img">
            <img src={src} alt="img" />
          </div>
          <div className="d-flex flex-column align-items-start">
            <div className="card-category">{category}</div>
            <div className="card-title">{title.slice(0,20)}</div>
            <div className="card-price d-flex flex-row align-items-center gap-2">
              $ {price} 
            </div>
          </div>
        </div>
    </>
  );
};

export default SideCard;
