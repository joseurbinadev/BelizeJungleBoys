import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import Divider from "../../../images/divider"
const adventures = "../../../images/offers-adventure.png";
const cruise = "../../../images/offers-cruise.png";
const pick = "../../../images/offers-pick.png";
const guides = "../../../images/offers-guides.png";

function About() {
  return (
    <div className='about-main'>
         <div className='about-cont'>
             <div className='cruise-book'>
               <div className='row'>
                 <div className='col-sm-8'>
                      <h1>Check out or Cruise Ship Deals Today!</h1>
                      <p>From comfortable transportation and delicious lunch to a private, expertly guided tour, we handle every detail. Simply share your arrival and departure times, and we’ll create an unforgettable adventure just for you!</p>
                 </div>
                 <div className='col-sm-4'>
                    <a href="/cruise-ship-deals/" className='lead-button'>
                       View Deals
                    </a>
                 </div>
               </div>
             </div>

             <div className='why-cont'>
                <h1>Why Book with Us? What we Offer</h1>
                <p>
                We make exploring Belize easy and unforgettable. Located just a short drive from the Philip Goldson International Airport, we’re ready to take care of every detail of your adventure, whether you’re here for a week or just one day. We bring you right to the heart of the action at the famous Caves Branch River of Caves, known for incredible cave tubing and cave kayaking through Nohoch Che'en's stunning scenery. Our tours cover everything you’d want to experience, from jungle ziplining and ATV rides to discovering Mayan ruins, the Belize Zoo, horseback riding, and even visiting the Baboon Sanctuary. For cruise ship travelers, we’ve got all the logistics covered—from transportation to a delicious lunch—and we schedule our tours to align perfectly with your arrival and departure times. </p>
             </div>

             <div className='offers-cont'>
                <div className='row'>
                   <div className='col-sm-3'>
                   <StaticImage src={adventures} quality={60} formats={["auto", "webp", "avif"]} />
                       
                     <a href="/all-tours/">
                     <div className='cont-hero'>
                          <h2>Adventures at Jaguar Paw</h2>
                          <p>Belize Jungle Boys is a tour company in Belize that provides a range of exhilarating outdoor activities and experiences in the country's lush jungle setting.</p>
                          <span>Read More</span>
                        </div>
                     </a>
                   </div>
                   <div className='col-sm-3'>
                   <StaticImage src={cruise} quality={60} formats={["auto", "webp", "avif"]} />
                     <a href="/cruise-ship-deals/">
                      <div className='cont-hero'>
                        <h2>We cater to Cruise Ships</h2>
                        <p>Reach out for Belize cruise excursions including, Cave Tubing, Zipline, ATV Jungle Tour and more adventures!</p>
                        <span>Read More</span>
                        </div>
                     </a>
                   </div>
                   <div className='col-sm-3'>
                   <StaticImage src={pick} quality={60} formats={["auto", "webp", "avif"]} />
                   
                     <a href="">
                     <div className='cont-hero'>
                        <h2>Pick Up and Drop Off</h2>
                        <p>With reliable and comfortable transfers, Belize Jungle Boys is the perfect companion for a memorable exploration of all that Belize has to offer.</p>
                        <span>Read More</span>
                        </div>
                     </a>
                    
                   </div>
                   <div className='col-sm-3'>
                   <StaticImage src={guides} quality={60} formats={["auto", "webp", "avif"]} />
                   
                     
                     <a href="/about-us/">
                     <div className='cont-hero'>
                        <h2>Amazing Guides</h2>
                        <p>Juan is an exceptional guide who exceeded all our expectations. His knowledge and passion for the caves were evident as he led us through the intricate network of underground passages.</p>
                        <span>Read More</span>
                        </div>
                     </a>
                   
                   </div>
                </div>

             </div>

             <div className='featured-cont'>
                <h1>About Belize Jungle Boys</h1>
                <p>
                Belize Jungle Boys was born from a deep love for Belize's rich history and natural wonders. Our journey began in 2012 when our founder, Mr. Juan Hernandez, followed his passion and began freelancing as a tour guide. With each adventure—whether guiding big busloads from cruise ships or exploring ancient ruins—he gained invaluable experience, learning Belize’s stories, cultures, and hidden gems alongside some of the best in the business.</p>
                <a className='lead-button' href="/about-us">Read More</a>
                <h1 id="top-request" >Our Top Requested Tours</h1>
             </div>

         </div>
   
     
    </div>
  )
}

export default About
