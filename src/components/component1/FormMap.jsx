import React, { useState } from 'react'
import formapcss from '../css/FormMap.module.css'
import Bounce from 'react-reveal/Bounce';

function FormMap() {
 
  
  return (
    <>
      <div className={formapcss.div1} >
     
        <div className={ formapcss.header}>
     <p>|contact us</p>
     <h1>Get In Touch With Our <br /> Agents</h1>
     </div>
  
     <Bounce bottom>
        <div className={formapcss.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6984433294124!2d-3.699663224904611!3d40.41553075571377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422883cd2acc11%3A0xb4d2c92c1f132a08!2sHotel%20Villa%20Real!5e0!3m2!1sen!2sin!4v1705929946716!5m2!1sen!2sin" width="100%" height="100%"></iframe>
        </div>
        </Bounce>

        <Bounce bottom>
          
        <div className={formapcss.form}>

<form>
<label> Full Name</label><br /> <br />
<input type="text" placeholder='Your Name...' /><br /> <br />

<label>Password</label><br /><br />
<input type="password" placeholder='Your password...'  /><br /><br />

<label>Email Address</label><br /><br />
<input type="email" placeholder='Your E-mail...' /><br /><br />

<label>Subject</label><br /><br />
<input type="subject" placeholder='Subject...'  /> <br /><br />


<div className={formapcss.buttondiv}>
<button  className={formapcss.button}>Signup
</button>

</div>
</form>

        </div>

        </Bounce>
      </div><br /><br />

    </>
  )
}

export default FormMap
