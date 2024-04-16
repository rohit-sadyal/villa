import React from 'react'
import Appartmentcss from '../css/AppartmentComo.module.css'
import img1 from '../images/property-05 (1).jpg'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';



function AppartmentComp() {
  return (
    <>

      <div className={Appartmentcss.container}>
      <Rotate top left>
        <div className={Appartmentcss.card1}>
        
          <p>total Flat Space  <span className={Appartmentcss.span}>185</span></p>
          <hr />
          <p>Floor number<span className={Appartmentcss.span}>26th</span></p><hr />
          <p>Number of rooms <span className={Appartmentcss.span}>4</span> </p><hr />
          <p>Parking Available<span className={Appartmentcss.span}>yes</span> </p><hr />
          <p>Payment Process<span className={Appartmentcss.span}>Bank</span> </p><hr />
        </div>
        </Rotate>

        <Bounce top>
        <div className={Appartmentcss.card2}>
          <img src={img1} height="100%" width="100%" />
        </div>
        </Bounce>

        <Rotate top right>
        <div className={Appartmentcss.card3}>
       
         <h4> Extra Info About Property</h4><br />
         
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /> <br />

          When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p><br /> 

          <button className={Appartmentcss.button}>Appartment 
</button>

        </div>
        </Rotate>


      </div>

    </>
  )
}

export default AppartmentComp
