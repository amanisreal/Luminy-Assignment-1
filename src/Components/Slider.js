import React, { useState } from 'react'
import  sliderData  from "./sliderdata"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSlideshare} from "react-icons/fa"
import "./slider.css"

function Slider() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === sliderData.length -1? 0 : current +1);
    };
    
     const prevSlide = () => {
        setCurrent (current === 0?sliderData.length-1: current -1  );
    };

    if(!Array.isArray(sliderData) || sliderData.length <=0){
        return null;
    }
    

  return (
      <>
    <div className='slidercontainer'>
   
        <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide}/>
        <FaArrowAltCircleRight className='rightArrow' onClick={nextSlide}/>

        {sliderData.map((slide, index) =>{
            return(
                
                <div className='silder-container'>
                
                
                <div className={index === current ? 'slideActive' : 'slide'} key={index}>
                {index === current &&<img src={slide.link} className='image'/>}
                
                
                </div>
                
                </div>
            )
            
        })}
        
    </div>
    </>)
}

export default Slider
