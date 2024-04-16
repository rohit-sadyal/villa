import React from 'react'
import DemoComponentcss from '../css/DemoComponent.module.css'
import videoimg from '../images/video-frame.jpg'
import iconimg from '../images/video.png'
import Fade from 'react-reveal/Fade';

function DemoComponent() {
  return (
    <>
     <div className={DemoComponentcss.div1}>
 
     {/* <Fade bottom cascade> */}
  
  <h6 className={DemoComponentcss.text}>  |VIDEO VIEW <br /> <br /> <span className={DemoComponentcss.videotext}> Get Closer View & <br /> Diffrent  Felling</span></h6><b><br /></b>
  <div className={DemoComponentcss.div2}>
<img className={DemoComponentcss.img} src={videoimg}   height='400px'width="800px" alt="" />
<a href="https://www.youtube.com/"><img  className={DemoComponentcss.icon} src={iconimg} height="80px" width="100px" alt="" /></a>
</div>
{/* </Fade> */}
      </div> 
    </>
  )
}

export default DemoComponent
