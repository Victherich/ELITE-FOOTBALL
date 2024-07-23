import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../CSS/Features.css";
import FeatureImg1 from "../Images/Rectangle 156.png";
import FeatureImg2 from "../Images/Rectangle 206.png";
import FeatureImg3 from "../Images/Rectangle 207.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Features = () => {
  return (
    <div className='Features1'>
      <p>Elite Football<span style={{ color: "#00AF07" }}> Features</span></p>
      <div className='Features2'>
        <Carousel 
          responsive={responsive} 
          infinite={true} 
          autoPlay={true} 
          autoPlaySpeed={3000} 
          showDots={true}
          containerClass="carousel-container"
          itemClass="carousel-item"
        >
          <div>
            <img src={FeatureImg1} alt="FeatureImg1" />
          </div>
          <div>
            <img src={FeatureImg2} alt="FeatureImg2" />
          </div>
          <div>
            <img src={FeatureImg3} alt="FeatureImg3" />
          </div>
          {/* Add more images here if needed */}
        </Carousel>
      </div>
    </div>
  );
};

export default Features;
