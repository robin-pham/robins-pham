import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Robins from "../components/Robins"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Robins />
  </Layout>
)

export default IndexPage
