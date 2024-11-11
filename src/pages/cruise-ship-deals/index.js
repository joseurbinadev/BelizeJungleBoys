import * as React from "react"
import "./cruise.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Cruise from "./components/cruise-ship-deals"



const Contact = () => (
  <Layout>
    <Seo title="Cruise Ship Deals " />
    <Cruise/>
  </Layout>
)

export default Contact;
