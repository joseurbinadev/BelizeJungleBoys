import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "./../less/footer.scss";


//import { Container, Row, Col, ul } from "react-bootstrap" 
import  FaFacebookF  from "../images/faFacebookF";
import  FaInstagram  from "../images/FaInstagram";

const MainLogo = "../images/belize-jungle-boys-logo.avif";
     

function Footer() {
	return (
    <div className="footer">
        <div className="footer-wrapper">
        <div className="row">
            <div className="col-sm-4">
                <div className="footer-content">
                <a class="footer-brand" href="#">  <StaticImage src={MainLogo} quality={60} formats={["auto", "webp", "avif"]} /></a>
                <p>Belize Jungle Boys is here to make sure you experience Belize’s beauty, culture, and thrills, every step of the way.</p>
                    <ul className="social">
                                <li>
                                    <p id="social-main">Stay Connected: </p>
                                    <a href="https://www.facebook.com/belizejungleboys/" target="_blank"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/belizejungleboys/" target="_blank"><FaInstagram /></a>
                                 
                                </li>
                            
                    </ul>
                </div>
            </div>
            <div className="col-sm-4">
            <div className="footer-content">
                    <h1>Reach Us</h1>
                    <p>
                        TEL:
                    </p>
                    <a href="tel:5016678300">+(501) 667-8300</a>
                    <p>
                        EMAIL:
                    </p>
                    <a href="mailto:belizejungleboystour@gmail.com">belizejungleboystour@gmail.com</a>
                    <p>
                        OFFICE HOURS:
                    </p>
                    <a href="">Mon - Sun, 8:00am to 4:00pm CST</a>
                </div>
            </div>
            <div className="col-sm-4 second">
                <div className="footer-content">
                <h1>Get Directions</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15239.201518913316!2d-88.6341985!3d17.2768899!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5dcd9a44bb2de1%3A0xe6551c0758f611d2!2sBelize%20Jungle%20Boys!5e0!3m2!1sen!2sbz!4v1730778388430!5m2!1sen!2sbz" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

        </div>
        </div>
        <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} Belize Jungle Boys. All Rights Reserved. Belize.<a href="https://belbytedesigns.com/" target="_blank"> [ Powered by Belbyte Designs ]</a></p>
        </div>
       
	</div>
    

    );
}

export default Footer;

