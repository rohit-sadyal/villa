import React from 'react'
import Appartmentcss from '../css/AppartmentComo.module.css'
import img3 from '../images/property-03 (1).jpg'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

function PentHouseComp() {
  return (
    <>
     
     <div className={Appartmentcss.container}>
     <Rotate top left>
        <div className={Appartmentcss.card1}>
          <p>total Flat Space  <span className={Appartmentcss.span}>320 m2</span></p>
          <hr />
          <p>Floor number<span className={Appartmentcss.span}>34th</span></p><hr />
          <p>Number of rooms <span className={Appartmentcss.span}>6</span> </p><hr />
          <p>Parking Available<span className={Appartmentcss.span}>yes</span> </p><hr />
          <p>Payment Process<span className={Appartmentcss.span}>Bank</span> </p><hr />
        </div>
</Rotate>

<Bounce top>
        <div className={Appartmentcss.card2}>
          <img src={img3} height="100%" width="100%" />
        </div>
        </Bounce>
        <Rotate top right>
        <div className={Appartmentcss.card3}>
         <h4> Extra Info About Penthouse</h4><br />
         
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.

Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p> 

          <button className={Appartmentcss.button}>Penthouse
</button>
        </div>
</Rotate>

      </div>


    </>
  )
}

export default PentHouseComp
