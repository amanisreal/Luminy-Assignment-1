import React from "react"
import smallsliderdata from "./SmallSliderData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./smallslider.css"

function smallSlider(){
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div className="smallSliderContainer">
           <Slider {...settings}>
           {smallsliderdata.map((slide, index) =>{
                return(
                <div className="card">
                    <img src={slide.link} className="images"/>
                
                </div>
                )

            })}
           </Slider>
        </div>
    )
}

export default smallSlider