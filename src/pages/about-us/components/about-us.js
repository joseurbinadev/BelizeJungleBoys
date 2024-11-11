import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/bjb-aboutheader.png"

function AboutUs() {
  return (
    <div className='aboutus'>
    <div className='content-header'>
      <div className="header-overlay"></div>
        <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
         <div className='header-cont'>
            <h1>About Us</h1>
         </div>
      </div>
      <div className='aboutus-main'>
        <div className='aboutus-cont'>
            <h1>About Belize Jungle Boys</h1>
            <p>Belize Jungle Boys was born from a deep love for Belize's rich history and natural wonders. Our journey began in 2012 when our founder, Mr. Juan Hernandez, followed his passion and began freelancing as a tour guide. With each adventure—whether guiding big busloads from cruise ships or exploring ancient ruins—he gained invaluable experience, learning Belize’s stories, cultures, and hidden gems alongside some of the best in the business. <br /><br />Growing up in the neighbourhood near the iconic ATM Cave also gave him a unique perspective, embedding a deep knowledge of the land and its secrets.

Now a fully licensed and Gold Standard-certified tour operator, Belize Jungle Boys combines years of experience and personal commitment to give our guests memorable and safe adventures. We’re here to share the wonders of Belize with you, showing you its magic the way only locals can.</p><br/>
          <a href="/contact-us">
           Contact Us
          </a>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
