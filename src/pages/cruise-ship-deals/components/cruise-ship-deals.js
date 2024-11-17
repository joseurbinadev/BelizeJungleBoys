import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/bjb-cruiseheader.png"

function Cruise() {
  return (
    <div className='cruise'>
    <div className='content-header'>
      <div className="header-overlay"></div>
        <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
         <div className='header-cont'>
            <h1>Cruise Ship Deals</h1>
         </div>
      </div>
      <div className='cruise-main'>
         <div className='cruise-cont'>
            <h1>We Cater to Cruise Ship Guests</h1>
            <p>Our cruise ship deals make it easy to experience the best of Belize with complete peace of mind. Each package includes convenient pickup and drop-off, a delicious lunch, park entrance fees, all equipment, and a private guided tour—everything you need for an unforgettable day. Simply share your arrival and departure times with us, and we’ll handle the rest, ensuring you’re back in time without feeling rushed. Relax and enjoy your adventure; Belize Jungle Boys has every detail covered so you can make the most of your stop in Belize.</p><br/>
         </div>
         <h3>All prices are in USD per person and include <br />transportation, lunch, park entrance fees, equipment and a private guided tour!</h3>
         <table id="customers">
  <tbody>
    <tr>
      <th>Tour</th>
      <th>Min 5pax</th>
      <th>Duration</th>
     
    
    </tr>
    <tr>
      <th>Cave Kayaking</th>
      <th>$110.00USD</th>
      <th>5 Hours</th>
      
     
    </tr>
    <tr>
      <th>Cave Tubing</th>
      <th>$85.00USD</th>
      <th>5 Hours</th>
     
    
    </tr>
    <tr>
      <th>Cave Tubing & Zipline</th>
      <th>$135.00USD</th>
      <th>6 Hours</th>
     
     
    </tr>
    <tr>
      <th>Altun Ha & Jungle ATV</th>
      <th>$150.00USD</th>
      <th>5 Hours</th>
    
     
    </tr>
    <tr>
      <th>Altun Ha & Cave Tubing</th>
      <th>$130.00USD</th>
      <th>6 Hours</th>
     
     
    </tr>
    <tr>
      <th>Cave Kayaking & Altun Ha</th>
      <th>$150.00USD</th>
      <th>6 Hours</th>
     
     
    </tr>
   
  </tbody>
</table>
      <a href="/contact-us">
         Book Now
          </a>
      </div>
    </div>
  )
}

export default Cruise
