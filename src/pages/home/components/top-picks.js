import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const adventures = "../../../images/caveTubing-bjb-new.png";
const cruise = "../../../images/zipline-bjb.png";
const pick = "../../../images/kayaking-bjb.png";
const guides = "../../../images/atv-bjb.png";


function TopPicks() {
  return (
    <div className='top-picks'>
     
        <div className='row'>
                   <div className='col-sm-3'>
                    
                     <a href="/cave-tubing-in-belize/">
                     <StaticImage src={adventures} quality={60} formats={["auto", "webp", "avif"]} />
                      
                       <div className='cont-hero'>
                          <h2>Cave Tubing</h2>
                          <p>$50USD Per Person</p>
                          <span>Book Now</span>
                        </div>
                     </a>
                   </div>
                   <div className='col-sm-3'>
                    <a href="/jungle-zipline-in-jaguar-paw/">
                    <StaticImage src={cruise} quality={60} formats={["auto", "webp", "avif"]} />
                    
                      <div className='cont-hero'>
                         <h2>Jungle Zipline</h2>
                          <p>$45USD Per Person</p>
                          <span>Book Now</span>
                        </div>
                     </a>
                   </div>
                   <div className='col-sm-3'>
                
                     <a href="/cave-kayaking-in-jaguar-paw/">
                     <StaticImage src={pick} quality={60} formats={["auto", "webp", "avif"]} />
                     <div className='cont-hero'>
                         <h2>Cave Kayaking</h2>
                          <p>$90USD Per Person</p>
                          <span>Book Now</span>
                          </div>
                     </a>
                    
                   </div>
                   <div className='col-sm-3'>
                 
                     
                     <a href="/jungle-zipline-in-jaguar-paw/">
                     <StaticImage src={guides} quality={60} formats={["auto", "webp", "avif"]} />
                     <div className='cont-hero'>
                        <h2>ATV Jungle Tour</h2>
                          <p>$95USD Per Person</p>
                          <span>Book Now</span>
                         </div>
                     </a>
                   
                   </div>
            </div>
        
      
    </div>
  )
}

export default TopPicks
