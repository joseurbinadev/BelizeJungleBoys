import * as React from "react"
import "./shuttle.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"


import Shuttle from "./components/shuttle"



const Contact = () => (
  <Layout>
    <Seo title="Transportation included " />
    <Shuttle />
  </Layout>
)

export default Contact;
