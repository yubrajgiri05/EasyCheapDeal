import React from 'react'
import '../../General/Card.css'
import { Col, Row } from 'react-bootstrap'
import image from '../../General/assets/product.png'
import image01 from '../../General/assets/product01.png'
import { FaArrowAltCircleRight } from "react-icons/fa";

const CategoryCard = () => {
  return (
    <>
      <div className="container">
       <Row className='section-margin g-4'>
          <Col lg={4} md={6}>
            <div className="cat-card" style={{height:255}}>
              <img src={image} alt="" style={{"object-fit": "cover"}}/>
               <div className="clip-card">
                 <div className="card-category">Laptop Collection</div>
                 <div className="shop">Shop Now <FaArrowAltCircleRight/></div>
               </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="cat-card" style={{height:255}}>
              <img src={image01} alt="" style={{"object-fit": "cover"}}/>
               <div className="clip-card">
                 <div className="card-category">Accessories Collection</div>
                 <div className="shop">Shop Now <FaArrowAltCircleRight/></div>
               </div>
            </div>
          </Col>
          <Col lg={4} md={6}>
            <div className="cat-card" style={{height:255}}>
              <img src={image} alt="" style={{"object-fit": "cover"}}/>
               <div className="clip-card">
                 <div className="card-category">Cameras Collection</div>
                 <div className="shop">Shop Now <FaArrowAltCircleRight/></div>
               </div>
            </div>
          </Col>
       </Row>
      </div>
    </>
  )
}

export default CategoryCard
