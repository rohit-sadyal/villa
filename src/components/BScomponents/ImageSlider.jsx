import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/banner-01.jpg'
import slider2 from '../images/banner-02.jpg'
import slider3 from '../images/banner-03.jpg'
import imageslider from '../css/ImageSlider.module.css' 


function ImageSlider() {
  return (
    <Carousel>
      <Carousel.Item>
     <img src={slider1} alt="sliderimage" width="100%" height="600px" />
        <Carousel.Caption>
        <p className={imageslider.p}>Tronto, <span className={imageslider.span1}>Canada</span></p>
          <h3 className={imageslider.h3}  >HURRY ! <br /> GET THE  <br />BEST <br />  VILLA FOR <br /> YOU</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider2} alt="sliderimage"  width="100%" height="600px" />
        <Carousel.Caption>
        <p className={imageslider.p}>Melbourne, <span className={imageslider.span1}>Australia</span></p>
          <h3 className={imageslider.h3}>BE QUICK ! <br /> GET THE  <br />BEST <br />  VILLA IN <br /> TOWN</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={slider3} alt="sliderimage"  width="100%" height="600px" />
        <Carousel.Caption>
        <p className={imageslider.p}>
        Miami, <span className={imageslider.span1}>South Florida</span>
          </p>
          <h3 className={imageslider.h3}>ACT ! <br /> NOW! <br />GET THE  <br />  HIGHEST <br /> LEVEL <br/>PENTHOUSE</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
  );
}

export default ImageSlider;