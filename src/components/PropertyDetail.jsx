import React from 'react'
import propertiescss from '../components/css/Properties.module.css'
import PropertyDeatilalsCard from './component1/PropertyDeatilalsCard'
import CardSection1 from './component1/CardSection1'
import { Outlet } from 'react-router-dom'
import Footer from './component1/Footer'
import Bounce from 'react-reveal/Bounce';


function PropertyDetail() {
  return (
    <>
    <Bounce top>
      <div className={propertiescss.div1}>

<p>HOME / SINGLE PROPERTY</p>
<h1> SINGLE PROPERTY</h1><br /><br />
</div> <br /><br />
</Bounce>

<PropertyDeatilalsCard/><br />

<CardSection1>
  <Outlet/>
</CardSection1>
<Footer/>
    </> 



  )
}

export default PropertyDetail
