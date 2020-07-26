import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Activity from "../components/activity.js"
import Image from "../components/image"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"
import '../components/styles/global.css'

const IndexPage = () => (
  <Layout>
    <link
      rel="stylesheet"
      media="all"
      href="bootstrap/dist/css/bootstrap.min.css/"
      type="text/css"
    />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your Activity Logger.</p>
    <p>Check out the activity for various time frames.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Activity />
  </Layout>
)

export default IndexPage
