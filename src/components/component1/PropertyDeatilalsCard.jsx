import React from 'react'
import propcard from '../css/PropertyDetailsCard.module.css'
import photo1 from '../images/card1img.jpg'
import photo2 from '../images/info-icon-01.png'
import photo3 from '../images/info-icon-02.png'
import photo4 from '../images/info-icon-03.png'
import photo5 from '../images/info-icon-04.png'
import BSAccordion from '../BScomponents/BSAccordion'
import Rotate from 'react-reveal/Rotate';


function PropertyDeatilalsCard() {
  return (
    <>

      <div className={propcard.div1}>
      
      <Rotate top left>
        <div className={propcard.img}><br />

          <img src={photo1} alt="" /><br /><br />
          <BSAccordion />
        </div></Rotate>

        <Rotate top right>
        <div className={propcard.div2}>
          <h6><img src={photo2} alt="" /> 250 m2 <br />Total Flate Space</h6><hr />
          <h6><img src={photo3} alt="" /> Contract <br />Contract Ready</h6><hr />
          <h6> <img src={photo4} alt="" />Payment <br />Payment Process</h6><hr />
          <h6> <img src={photo5} alt="" />Safety <br />Safety 24/7 Under Control</h6><hr />
        </div>
</Rotate>
      </div>
    </>
  )
}

export default PropertyDeatilalsCard
