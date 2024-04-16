import React from 'react'
import propertiescss from '../components/css/Properties.module.css'
import ContactCss from '../components/css/Contact.module.css'
import photo1 from '../components/images/phone-icon.png'
import photo2 from '../components/images/email-icon.png'
import Footer from './component1/Footer'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

function Contact() {
  return (
    <>
     <Bounce top left>
      <div className={propertiescss.div1}>

        <p>HOME / Contact US</p>
        <h1>CONTACT US</h1><br /><br />
      </div> <br /><br />
      </Bounce>


      <div className={ContactCss.div1}>

        <Rotate top left>
        <div className={ContactCss.contact1}>
          <h6>|CONTACT US</h6><br />
          <h1>Get In Touch  With Our <br /> Agents</h1><br />
          <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us.</p>
<div className={ContactCss.number}>
  <img src={photo1} height="50px" alt="" /><br />
  <h5>010-020-0340</h5>
</div><br />

<div className={ContactCss.email}>
  <img src={photo2} height="40px" alt="" /><br />
 <h5>info@gmail.co</h5>

</div>
        </div>
        </Rotate>

<Rotate top right>
        <div className={ContactCss.contact2}>
        <form>
<label> Full Name</label><br /> <br />
<input type="text" placeholder='Your Name...' /><br /> <br />

<label>Email Address</label><br /><br />
<input type="email" placeholder='Your E-mail...' /><br /><br />

<label>Subject</label><br /><br />
<input type="Subject" placeholder='Subject...' /> <br /><br />

<label>Message</label> <br /><br />
<textarea name=" Messege" rows="3">Your Message</textarea><br /> <br />

<a href=""><button  className={ContactCss.button}>Message
</button></a>

</form>
</div>
</Rotate>

      </div><br />


      <div className={ContactCss.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6984433294124!2d-3.699663224904611!3d40.41553075571377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422883cd2acc11%3A0xb4d2c92c1f132a08!2sHotel%20Villa%20Real!5e0!3m2!1sen!2sin!4v1705929946716!5m2!1sen!2sin" width="1000px" height="500px"></iframe>
        </div>


        <Footer/>
    </>

    
  )
}

export default Contact
