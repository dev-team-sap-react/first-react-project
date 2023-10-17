import React from 'react';
import Slider from "react-slick";

import ava01 from "../../assets/ay.png";

import "./TeamSlider.css";

import { useContext } from "react";
import { AppContext } from "../../AppContext";

const TeamSlider = () => {
    const {processedData} = useContext(AppContext);
    const settings = {
        dots:true,
        autoplay:true,
        infinite:true,
        speed:3000,
        autoplaySpeed:3000,
        swipeToSlide:true,
        slidesToShow:1,
        slidesToScroll:1,
    };
  return (
    <Slider {...settings} style={{height:"250px"}}>
        {
            processedData.map((item)=>{

                return <div key={item.proposal}>

                <div>
                    <p className="review-text">{`Hey, Ich bin ${item.Appl}  
                    ${item.A}. `}</p>
                </div>
                <div className="d-flex align-items-center justify-content-center gap-3 mb-5">
                    <img src={ava01} alt={ava01} style={{width:"250px"}}/>
                </div>
                <div className="slider-content d-flex align-items-center justify-content-center gap-3">

                    <h6>{item.table}</h6>
        
                </div>
                </div>
            })
        }
    </Slider>
  )
}

export default TeamSlider;