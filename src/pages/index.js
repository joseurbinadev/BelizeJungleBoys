import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "./home/home.scss"


import Hero from "./home/components/hero"
import Tours from "./home/components/tours"
import About from "./home/components/about"
import TopPicks from "./home/components/top-picks"
import Reviews from "./home/components/reviews"

const IndexPage = () => (
  <Layout>
    <Seo title="Cave Tubing and Jungle Zipline in Belize" />
    
    <Hero />
    <Tours />
    <About />
    <TopPicks />
    <Reviews />
  </Layout>
)

export default IndexPage
                 