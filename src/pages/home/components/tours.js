import React from 'react'
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slide1 = "../../../images/bjb-tubing.png"
const slide2 = "../../../images/bjb-kayaking.png"
const slide3 = "../../../images/bjb-zipline.png"
const slide4 = "../../../images/bjb-atv.png"
const slide5 = "../../../images/bjb-crystal.png"
const slide6 = "../../../images/bjb-atm.png"
const slide7 = "../../../images/bjb-ruins.png"
const slide8 = "../../../images/bjb-zoo.png"

const cruise1 = "../../../images/cruise1.png"
const cruise2 = "../../../images/cruise2.png"

function Tours() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 575, // For mobile devices (adjust as needed)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For mobile devices (adjust as needed)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024, // For tablets or smaller screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
      };
  return (
    <div className='all-tours'>
       <div className='tours-main'>
          <h2>Discover</h2>
          <h1>See What Belize Jungle Boys has to offer.</h1>
        </div>
        <div className='tours-slider'>
          <div className="slider-container">
                <Slider {...settings}>
                    <div className='tour-slide'>
                        <a href="/cave-tubing-in-belize/">
                            <div className='absolute-overlay'></div>
                            <StaticImage src={slide1} />
                            <div className='absolute-price'>
                                <span>$65 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Cave Tubing</h1>
                            </div>
                        </a>
                    </div>
                    <div className='tour-slide'>
                       <a href="/cave-kayaking-in-jaguar-paw/">
                       <div className='absolute-overlay'></div>
                         <StaticImage src={slide2} />
                            <div className='absolute-price'>
                                <span>$100 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Cave Kayaking</h1>
                            </div>
                       </a>
                    </div>
                    <div className='tour-slide'>
                        <a href="/jungle-zipline-in-jaguar-paw/">
                        <div className='absolute-overlay'></div>
                          <StaticImage src={slide3} />
                          <div className='absolute-price'>
                                <span>$55 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Jungle Zip Line</h1>
                            </div>
                         </a>
                    </div>
                    <div className='tour-slide'>
                        <a href="/jungle-zipline-in-jaguar-paw/">
                        <div className='absolute-overlay'></div>
                        <StaticImage src={slide4} />
                        <div className='absolute-price'>
                                <span>$95 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Jungle ATV</h1>
                            </div>
                        </a>
                    </div>
                    <div className='tour-slide'>
                        <a href="/lost-world-crystal-cave-jaguar-paw-belize/">
                        <div className='absolute-overlay'></div>
                          <StaticImage src={slide5} />
                          <div className='absolute-price'>
                                <span>$110 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Crystal Cave</h1>
                            </div>
                        </a>
                    </div>
                    <div className='tour-slide'>
                        <a href="/atm-cave-actun-tunichil-muknal-jaguar-paw-belize/">
                        <div className='absolute-overlay'></div>
                          <StaticImage src={slide6} />
                          <div className='absolute-price'>
                                <span>$130 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>ATM Cave</h1>
                            </div>
                        </a>
                    </div>
                    <div className='tour-slide'>
                        <a href="/xunantunich-mayan-ruin-san-ignacio-town/">
                        <div className='absolute-overlay'></div>
                          <StaticImage src={slide7} />
                          <div className='absolute-price'>
                                <span>$40 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Xunantunich</h1>
                            </div>
                        </a>
                    </div>
                    <div className='tour-slide'>
                        <a href="/belize-zoo-mile-29-george-price-highway-la-democracia-belize/">
                        <div className='absolute-overlay'></div>
                          <StaticImage src={slide8} />
                          <div className='absolute-price'>
                                <span>$90 USD</span>
                            </div>
                            <div className='absolute-desc'>
                                <h1>Belize Zoo</h1>
                            </div>
                        </a>
                    </div>
                  
                </Slider>
            </div>
       </div>
       <div className='button-tours'>
         <a href="/all-tours/">View all Tours</a>
       </div>


    </div>
  )
}

export default Tours
