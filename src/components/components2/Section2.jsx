import React from 'react'
import section2 from '../css/Section2.module.css'
import photo1 from '../images/pexels-max-rahubovskiy-5997968.jpg'
import photo2 from '../images/info-icon-01.png'
import photo3 from '../images/info-icon-02.png'
import photo4 from '../images/info-icon-03.png'
import photo5 from '../images/info-icon-04.png'
import Slide from 'react-reveal/Slide';



function Section2() {
  return (
    <>
 
      <div className={section2.div1}>
      <Slide left>
<div className={section2.div2}>
    <img src={photo1}  height="100%" width="100%" />
</div>
</Slide>

<Slide left>
<div className={section2.div3}>
  
    <h6>I FEATURED</h6>
    <h1>Best  <br />Appartment & <br /> Sea View</h1>

    <div className={section2.div3_1}>
   
        <h5>Best useful links?<hr /></h5>
        <h5>How does this work?<hr /></h5>
        <h5>Why is villa Agency the best?<hr /></h5>
    </div>
        </div>
        </Slide>

        <Slide right>
    <div className={section2.div1_3}>
   
<h6><img src={photo2} alt="" /> 250 m2 <br />Total Flate Space</h6><hr />
<h6><img src={photo3} alt="" /> Contract <br />Contract Ready</h6><hr />
<h6> <img src={photo4}alt="" />Payment <br />Payment Process</h6><hr />
<h6> <img src={photo5} alt="" />Safety <br />Safety 24/7 Under Control</h6><hr />
</div>
</Slide>

      </div>
    </>
  )
}

export default Section2
