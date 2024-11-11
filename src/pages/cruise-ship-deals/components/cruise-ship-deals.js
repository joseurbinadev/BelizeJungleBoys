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
      <th>Min 2pax</th>
      <th>4 + </th>
      <th>6 + </th>
    
    </tr>
    <tr>
      <th>Cave Kayaking</th>
      <th>180.00</th>
      <th>170.00</th>
      <th>160.00</th>
     
    </tr>
    <tr>
      <th>Cave Tubing</th>
      <th>150.00</th>
      <th>135.00</th>
      <th>125.00</th>
    
    </tr>
    <tr>
      <th>Zipline</th>
      <th>150.00</th>
      <th>135.00</th>
      <th>125.00</th>
     
    </tr>
    <tr>
      <th>Lamanai Mayan Ruin</th>
      <th>170.00</th>
      <th>160.00</th>
      <th>150.00</th>
     
    </tr>
    <tr>
      <th>Mayan Temples</th>
      <th>150.00</th>
      <th>135.00</th>
      <th>125.00</th>
     
    </tr>
    <tr>
      <th>Cave Tubing and Zipline</th>
      <th>180.00</th>
      <th>170.00</th>
      <th>160.00</th>
     
    </tr>
    <tr>
      <th>Cave Tubing and Mayan Temple</th>
      <th>190.00</th>
      <th>180.00</th>
      <th>160.00</th>
     
    </tr>
    <tr>
      <th>Cave Tubing and Belize Zoo</th>
      <th>190.00</th>
      <th>180.00</th>
      <th>170.00</th>
    
    </tr>
    <tr>
      <th>Cave Tubing and ATV</th>
      <th>200.00</th>
      <th>190.00</th>
      <th>180.00</th>
    
    </tr>
    <tr>
      <th>Cave Tubing and Horseback Ride</th>
      <th>200.00</th>
      <th>190.00</th>
      <th>180.00</th>
     
    </tr>
    <tr>
      <th>Zipline and Xunantunich</th>
      <th>180.00</th>
      <th>170.00</th>
      <th>160.00</th>
     
    </tr>
    <tr>
      <th>Zipline and Belize Zoo </th>
      <th>180.00</th>
      <th>170.00</th>
      <th>160.00</th>
     
    </tr>
    <tr>
      <th>Zipline and ATV </th>
      <th>200.00</th>
      <th>190.00</th>
      <th>180.00</th>
     
    </tr>
    <tr>
      <th>Zipline and Horse Back Ride</th>
      <th>200.00</th>
      <th>190.00</th>
      <th>180.00</th>
    
    </tr>
    <tr>
      <th>Zipline and Cave Kayaking</th>
      <th>230.00</th>
      <th>220.00</th>
      <th>210.00</th>
    
    </tr>
    <tr>
      <th>Xunantunich and Belize Zoo</th>
      <th>180.00</th>
      <th>170.00</th>
      <th>160.00</th>
  
    </tr>
    <tr>
      <th>Xunantunich and ATV</th>
      <th>200.00</th>
      <th>190.00</th>
      <th>180.00</th>
   
    </tr>
    <tr>
      <th>Xunantunich and Horse Back Ride</th>
      <th>200.00</th>
      <th>190.00</th>
      <th>180.00</th>
   
    </tr>
    <tr>
      <th>Xunantunich and Cave Kayaking</th>
      <th>230.00</th>
      <th>220.00</th>
      <th>210.00</th>
    
    </tr>
    <tr>
      <th>Cave Tubing /Zipline / Xunantunich </th>
      <th>250.00</th>
      <th>240.00</th>
      <th>230.00</th>
   
    </tr>
    <tr>
      <th>Cave Tubing /Zipline / Belize Zoo </th>
      <th>220.00</th>
      <th>210.00</th>
      <th>230.00</th>
    
    </tr>
    <tr>
      <th>Cave Tubing /Zipline / Horse Back Riding </th>
      <th>270.00</th>
      <th>260.00</th>
      <th>250.00</th>
    
    </tr>
    <tr>
      <th>Cave Tubing /Zipline / ATV</th>
      <th>270.00</th>
      <th>260.00</th>
      <th>250.00</th>
     
    </tr>
    <tr>
      <th>Lost World Crsytal Cave </th>
      <th>250.00</th>
      <th>240.00</th>
      <th>230.00</th>
    
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
