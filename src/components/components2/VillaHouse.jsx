import React from 'react'
import Cardcss from '../css/Card.module.css'
import image1 from '../images/card1img.jpg'
import image2 from '../images/property-02.jpg'
import image3 from '../images/property-03.jpg'
import image4 from '../images/property-04.jpg'
import image5 from '../images/property-05.jpg'
import image6 from '../images/property-06.jpg'
import Zoom from 'react-reveal/Zoom';


function VillaHouse() {
  return (
    <>


<Zoom>
<div className={Cardcss.card1}>
   
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
    
    </div>
    </Zoom>



    <Zoom>
    <div className={Cardcss.card1}>
    
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
   
    </div>
    </Zoom>   



<Zoom>
    <div className={Cardcss.card1}>
    
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
    
    </div>
    </Zoom>

    

    <div className={Cardcss.card1}>
   
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
     
    </div>


    </>
  )
}

export default VillaHouse
