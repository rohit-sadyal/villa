import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './css/Navbar.css'
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";




  const Navbar =()=> {
  const[Mobile,setMobile]=useState(false)

  return (
    <>



<nav className='navbar'>
    <div className='villa'>
          <h1>VILLA</h1>
       </div>
     

          <ul className={Mobile? "navLinks-mobile":"nav-NavLinks"} onclick={()=>setMobile(false)}>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/properties'><li>Properties</li> </NavLink>
        <NavLink to='/propertydetail'><li>PropertyDetail</li> </NavLink>
        <NavLink to='/contact'><li>Contact</li></NavLink>
        </ul>

        <button className='mobile-menu-icon' onClick={()=>setMobile(!Mobile)}>{Mobile?<RxCross2/>:<FaBarsStaggered/>}


        </button>
     

        {/* <div>
        <button className='button'>Schedule a visit
        </button>
        </div > */}
        
      </nav>
     
    </>
  )}


export default Navbar
