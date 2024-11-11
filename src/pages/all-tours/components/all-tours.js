import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"

import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
const headerImg = "../../../images/bjb-alltoursheader.png"

function AllTours() {
 
    const data = useStaticQuery(graphql`
    query TourListings{
          allGraphCmsItemTours {
            edges {
              node {
                id
                tourTitle
                displayPrice
                tourLocation
                slug
                tourDescription {
                  html
                  text
                  raw
                }
                tourImage {
                  id
                  imageAltText
                  imageTitleText
                  galleryImage {
                    gatsbyImageData(placeholder: NONE, quality: 60)
                    url
                  }
                }
              }
            }
          }
      }
    
  `);


  return (  
    <div className='all-tours'>
      <div className='content-header'>
      <div className="header-overlay"></div>
        <StaticImage src={headerImg} quality={60} formats={["auto", "webp", "avif"]} />
         <div className='header-cont'>
            <h1>All Tours</h1>
         </div>
      </div>
      <div className='tour-main'>
        <div className='tours-cont'>
            <h1>Our Experiences</h1>
            <p>At Belize Jungle Boys, we’re all about giving you the ultimate Belize adventure, just the way you want it. Whether you’re up for tubing or kayaking through the stunning Caves Branch River of Caves, discovering the famous ATM or Crystal Caves, or exploring the beauty of Belize on horseback, we’ve got you covered. Dive into Belize’s wildlife at the Belize Zoo or step back in time at breathtaking Mayan ruins. And if you want to do it all, go ahead—mix and match any of our tours to make your day as exciting and memorable as possible. However you want to explore, we’re here to make it happen!</p>
        </div>
        <div className='tours-grid'>
        {data.allGraphCmsItemTours.edges.map(({ node: blockMap }) => ( 
                          
                        
                          <div className="data-wrapper">
                              <Link key={blockMap.slug} to={`/${blockMap.slug}`}>
                              <div className='overlay-tour'></div>
                              <div className="item-box">
                                  <div className="image-field">
                                      <img src={blockMap.tourImage.galleryImage.url} alt={blockMap.tourImage.imageAltText} />
                                  </div>
                                  <div className="text-box">
                                      <div id="price">
                                        <p>{blockMap.displayPrice}</p>
                                      </div> 
                                      
                                       <span className="title"> <h2>{blockMap.tourTitle}</h2></span>
                                      
                                      
                                     
                                      <div className="primary-info">
                                      
                                      <span className="location">
                                          
                                          <div dangerouslySetInnerHTML={{ __html: blockMap.tourDescription.html }} /> 
                                          <a href="">View Tour</a>
                                      </span>
                                      </div>
                                  </div>
                                
                              </div>
                              </Link>
                          </div>
                       
                         
                          ))} 
        </div>
      </div>
    </div>
  

  );

}

export default AllTours
