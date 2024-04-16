import React from 'react'
import headercss from '../css/Header.module.css'
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RxInstagramLogo } from "react-icons/rx";

function Header() {
    
  return (
    <>
      <div className={headercss.Header}>
        <div className={headercss.heading}>
        <h6> info@company.com</h6>
        <h6>Sunny Isles Beach, FL 33160</h6>
        </div>
        <div className={headercss.icons}>
       <a href=""><PiFacebookLogoDuotone /></a> 
       <a href=""> <FaLinkedinIn /></a>
       <a href=""> <FaTwitter /></a>
       <a href=""> <RxInstagramLogo /></a>
        </div>

      </div>


    </>
  )
}

export default Header
