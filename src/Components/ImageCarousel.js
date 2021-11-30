import React, { Component } from "react";
import Slider from "react-slick";
import './ImageCarousel.css';


import Image0 from "../images/bg01.png"
import Image1 from "../images/bg02.jpg"
import Image2 from "../images/bg03.jpg"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "black",borderRadius:"100%",right:"4%",width:"40px",height:"30px" }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",zIndex:"2",left:"4%",width:"40px",height:"30px" }}
      onClick={onClick}
    />
  );
}



export default class ImageCarousel extends Component {
  render() {
    const settings = {
      dots: true, 
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings} className="">
          <div>
          <img className="cursor-pointer w-full h-full" src={Image0}/>
          </div>
          <div>
          <img className="cursor-pointer w-full h-full" src={Image1}/>
          </div>
          <div>
          <img className="cursor-pointer w-full h-full" src={Image2}/>
          </div>
        </Slider>
      </div>
    );
  }
}
