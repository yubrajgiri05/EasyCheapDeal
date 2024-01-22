import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar";
import Card from "../../General/Card";
import { Row } from "react-bootstrap";

const Home = () => {
  const url = `https://fakestoreapi.com/products`;
  const[product,setProduct]= useState([])
  const[cat,setCat]= useState(product)

  useEffect(()=>{
    fetch(url)
    .then(response=>response.json())
    .then(data =>{
      setProduct(data)
      setCat(data)
    })
    .catch(error=>console.log(error));
  },[])

  const filterItem =(catItem)=>{
    const updateItem=product.filter((curItem)=>{
      return curItem.category== catItem
    });
    setProduct(updateItem);
  }


  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="d-flex justify-content-between section-margin">
            <h2 className="main-heading">TOP SELLING</h2>
            <div className="catbutton d-flex gap-3">
                <button className="btns" onClick={()=>filterItem("electronics")}>Laptops</button>
                <button className="btns" onClick={()=>filterItem("men's clothing")}>Smartphones</button>
               < button className="btns" onClick={()=>filterItem("women's clothing")}>Cameras</button>
              < button className="btns" onClick={()=>filterItem("jewelery")}>Accessories</button>
            </div>
        </div>
        <Row className="g-4 gy-5">
        {product.map((card,index)=>{
        return( <>
        <Card key={index} title={card.title} price={card.price} src={card.image}  category={card.category}/></> 
      )})}
        </Row>
      </div>
    </>
  );
};

export default Home;
