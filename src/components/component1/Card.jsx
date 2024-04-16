import React from 'react'
import Cardcss from '../css/Card.module.css'
import image1 from '../images/card1img.jpg'
import image2 from '../images/property-02.jpg'
import image3 from '../images/property-03.jpg'
import image4 from '../images/property-04.jpg'
import image5 from '../images/property-05.jpg'
import image6 from '../images/property-06.jpg'
import Fade from 'react-reveal/Fade';

function Card() {
  return (
    <>
 
    <div className={Cardcss.header}>
    <Fade bottom cascade>
     <h1><span className={Cardcss.properties}>PROPERTIES</span><br /><br />
We Provide The Best Property You Like</h1>
</Fade></div><br />

<div className={Cardcss.container}>
    <div className={Cardcss.card1}>
    <Fade bottom cascade>
        <div className={Cardcss.cardimg}>
        <img src={image1} height="100%" width="100%" />
        </div><br />
        <div className={Cardcss.text}>
          <p>Luxury Villa</p>
      <span className={Cardcss.price}>$2.264.000</span>
      </div><br />
     
     <div className={Cardcss.structure}>
     <h4> <a href="">18 new street miami,or 97219</a></h4><br />
<p>Bedroms:8 &nbsp; &nbsp; Bathrooms:8&nbsp; &nbsp;Area:545m &nbsp;<br />Floor:3 &nbsp; &nbsp; Parking:6spots </p> 

<div className={Cardcss.cardbutton}>
<a href=""><button  className={Cardcss.button}>Schedule a visit
</button></a>
</div>
     </div> 
   </Fade>
    </div>





    <div className={Cardcss.card1}>
    <Fade bottom cascade>
        <div className={Cardcss.cardimg}>
        <img src={image2} height="100%" width="100%" />
        </div><br />
        <div className={Cardcss.text}>
          <p>Luxury Villa</p>
      <span className={Cardcss.price}>$1.180.000</span>
      </div><br />
     <h4> <a href="">54 Mid Street Florida ,OR 27001</a></h4><br />
     <div className={Cardcss.structure}>
<p>Bedrroms:8 &nbsp; &nbsp; Bathrooms:8&nbsp; &nbsp;Area:545m &nbsp;<br />Floor:3 &nbsp; &nbsp; Parking:6spots </p> 

<div className={Cardcss.cardbutton}>
<a href=""><button  className={Cardcss.button}>Schedule a visit
</button></a>
</div>
     </div>
     </Fade> 
    </div>




    <div className={Cardcss.card1}>
    <Fade bottom cascade>
        <div className={Cardcss.cardimg}>
        <img src={image3} height="100%" width="100%" />
        </div><br />
        <div className={Cardcss.text}>
          <p>Luxury Villa</p>
      <span className={Cardcss.price}>$1.460.000</span>
      </div><br />
      <h4><a href="3">26 Old Street Miami ,OR 38540</a></h4><br />
     <div className={Cardcss.structure}>
<p>Bedrroms:8 &nbsp; &nbsp; Bathrooms:8&nbsp; &nbsp;Area:545m &nbsp;<br />Floor:3 &nbsp; &nbsp; Parking:6spots </p> 

<div className={Cardcss.cardbutton}>
<a href=""><button  className={Cardcss.button}>Schedule a visit
</button></a>
</div>
     </div> 
     </Fade>
    </div>
    

   
    <div className={Cardcss.card1}>
    <Fade bottom cascade>
        <div className={Cardcss.cardimg}>
        <img src={image4} height="100%" width="100%" />
        </div><br />
        <div className={Cardcss.text}>
          <p>Luxury Villa</p>
      <span className={Cardcss.price}>$1.180.000</span>
      </div><br />
     <h4> <a href="">54 Mid Street Florida ,OR 27001</a></h4><br />
     <div className={Cardcss.structure}>
<p>Bedrroms:8 &nbsp; &nbsp; Bathrooms:8&nbsp; &nbsp;Area:545m &nbsp;<br />Floor:3 &nbsp; &nbsp; Parking:6spots </p> 

<div className={Cardcss.cardbutton}>
<a href=""><button  className={Cardcss.button}>Schedule a visit
</button></a>
</div>
     </div>
     </Fade> 
    </div>


    <div className={Cardcss.card1}>
    <Fade bottom cascade>
        <div className={Cardcss.cardimg}>
        <img src={image5} height="100%" width="100%" />
        </div><br />
        <div className={Cardcss.text}>
          <p>Luxury Villa</p>
      <span className={Cardcss.price}>$1.180.000</span>
      </div><br />
     <h4> <a href="">54 Mid Street Florida ,OR 27001</a></h4><br />
     <div className={Cardcss.structure}>
<p>Bedrroms:8 &nbsp; &nbsp; Bathrooms:8&nbsp; &nbsp;Area:545m &nbsp;<br />Floor:3 &nbsp; &nbsp; Parking:6spots </p> 

<div className={Cardcss.cardbutton}>
<a href=""><button  className={Cardcss.button}>Schedule a visit
</button></a>
</div>
     </div>
     </Fade> 
    </div>




    <div className={Cardcss.card1}>
    <Fade bottom cascade>
        <div className={Cardcss.cardimg}>
        <img src={image6} height="100%" width="100%" />
        </div><br />
        <div className={Cardcss.text}>
          <p>Luxury Villa</p>
      <span className={Cardcss.price}>$1.180.000</span>
      </div><br />
     <h4> <a href="">54 Mid Street Florida ,OR 27001</a></h4><br />
     <div className={Cardcss.structure}>
<p>Bedrroms:8 &nbsp; &nbsp; Bathrooms:8&nbsp; &nbsp;Area:545m &nbsp;<br />Floor:3 &nbsp; &nbsp; Parking:6spots </p> 

<div className={Cardcss.cardbutton}>
<a href=""><button  className={Cardcss.button}>Schedule a visit
</button></a>
</div>
     </div>
     </Fade> 
    </div>


    </div><br /><br /><br />






      
  











    </>
  )
}

export default Card
