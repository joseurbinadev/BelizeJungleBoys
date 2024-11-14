import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const badges = "../../../images/badges.png";

function Reviews() {
  return (
    <div className='reviews-main'>
       
       <div className='row'>
         <div className='col-sm-8'>
            <h1>See What our pasts guests had to say about us!</h1>
            <p>At Belize Jungle Boys, customer satisfaction is at the heart of everything we do. With a deep commitment to delivering unforgettable experiences, we ensure every adventure is tailored, safe, and memorable. Your joy and comfort are our top priorities as we guide you through the natural wonders of Belize!</p>
         </div>
         <div className='col-sm-4'>
         <StaticImage src={badges} quality={60} formats={["auto", "webp", "avif"]} />
                    
         </div>
       </div>
       <div class="elfsight-app-e0f60acf-00ec-4d25-bcd4-8eb804d57373" data-elfsight-app-lazy></div>
    </div>
  )
}

export default Reviews
