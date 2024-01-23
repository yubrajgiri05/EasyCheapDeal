import React, { useEffect, useState } from "react";
import Navbar from "../../General/Navbar";
import Card from "../../General/Card";
import { Row } from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import Sale from "./Sale";

const Home = () => {
  const url = `https://fakestoreapi.com/products`;
  const[product,setProduct]= useState([]);
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
    setCat(updateItem);

    console.log(updateItem)
  }


  return (
    <>
      <Navbar filterItem={filterItem}/>
      <CategoryCard/>
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
        <Row className="gx-4 p-gy-5 ">
        {cat.slice(0,4).map((card,index)=>{
        return( <>
        <Card key={index} title={card.title} price={card.price} src={card.image}  category={card.category}/></> 
      )})}
        </Row>
      </div>
      <Sale/>
      <div className="container ">
        <div className="d-flex justify-content-between section-margin">
            <h2 className="main-heading">POPULER SELLING</h2>
            <div className="catbutton d-flex gap-3">
                <button className="btns" onClick={()=>filterItem("electronics")}>Laptops</button>
                <button className="btns" onClick={()=>filterItem("men's clothing")}>Smartphones</button>
               < button className="btns" onClick={()=>filterItem("women's clothing")}>Cameras</button>
              < button className="btns" onClick={()=>filterItem("jewelery")}>Accessories</button>
            </div>
        </div>
        <Row className="gx-4 p-gy-5 ">
        {product.slice(0,4).map((card,index)=>{
        return( <>
        <Card key={index} title={card.title} price={card.price} src={card.image}  category={card.category}/></> 
      )})}
        </Row>
      </div>
    </>
  );
};

export default Home;
