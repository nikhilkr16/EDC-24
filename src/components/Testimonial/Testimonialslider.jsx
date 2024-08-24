import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import img from './Ellipse.png'

function Testimonialslider() {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex flex-col justify-center items-center text-center p-16">
            <p>Engaging in environmental strategies. </p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>John Smith</h1>
                    <p>Industrialist</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-16">
            <p>The WasteWise has been a pivotal part of our development journey. Their well-organized events, such as Startup Mela, IPL Auction, Bit Thon etc. have enriched our skills and knowledge in various aspects. The club's dedication to fostering innovation, strategic thinking, and personal growth is truly commendable.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>BIT Student</h1>
                    
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-16">
            <p>The Startup Mela gave others funding and exposure, the IPL Auction event enhanced our strategic skills, and Bit Thon inspired creative and technical innovation. The club's commitment to fostering growth is evident in all their well-organized events.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>BIT Student</h1>
                    
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-16">
            <p>WasteWisely is not just any other platform. Its a breeding ground for future innovators and problem solvers. The culture, the mindest and the whole persona of the society is mind-boggling.</p>
            <div className="flex flex-row justify-center items-center mt-8 gap-2">
                <img src={img} alt="" />
                <div className="flex flex-col">
                    <h1>BIT Student</h1>
                    
                </div>
            </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonialslider;

