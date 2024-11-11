import "./../less/header.scss";
import "./../less/main.scss";
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const MainLogo = "../images/belize-jungle-boys-logo.avif";

const Header = ({ siteTitle }) => (
  <header>
    <div className="top-bar">
       <div className="row">
          <div className="col-sm-6">
              <a href="">
                Franks Eddy Village, Jaguar Paw Belize
              </a>
          </div>
          <div className="col-sm-6">
              <a href="" className="lead-button">
                Call: +501 675-8300
              </a>
          </div>
       </div>
    </div>
    <nav class="navbar navbar-expand-md navbar-dark bg-secondary">
  <div class="container-fluid">
    <a class="navbar-brand d-md-none" href="#">
    <StaticImage src="../images/belize-jungle-boys-logo.avif" quality={60} formats={["auto", "webp", "avif"]} />
       
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about-us">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/all-tours">Our Tours</a>
        </li>
        <a class="navbar-brand d-none d-md-block" href="/">
         <StaticImage src="../images/belize-jungle-boys-logo.avif" quality={60} formats={["auto", "webp", "avif"]} />
        </a>
        <li class="nav-item">
          <a class="nav-link" href="">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/cruise-ship-deals">Cruise Ship</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav> 

  </header>
)

export default Header
