import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'reactstrap/dist/reactstrap.min'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Navi from "../components/navcomp"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navi />
    <h1>Hello!!</h1>
    <p>Let's build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
