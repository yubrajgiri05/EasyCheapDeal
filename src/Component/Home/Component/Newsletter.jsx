import React from 'react'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
import '../home.css'

const Newsletter = () => {
  return (
    <>
      <div className="section-margin newsletter d-flex flex-column align-items-center gap-4">
        <div className="newsheading">Sign Up for the <span>NEWSLETTER</span></div>
        <form action="" className="d-flex gap-0">
            <div className="input-group md-form form-sm form-2 pl-0">
              <input
                className="form-control my-0 py-1 red-border"
                type="text"
                placeholder="Enter Your Email"
                aria-label="Search"
              />
              <div className=" search-box">Subscribe</div>
            </div>
        </form>
        <div className="d-flex gap-2">
            <div className="newsicon"><FaFacebook/></div>
            <div className="newsicon"><FaInstagram/></div>
            <div className="newsicon"><FaTwitter/></div>
        </div>

      </div>
    </>
  )
}

export default Newsletter
