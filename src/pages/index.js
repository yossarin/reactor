import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Title = styled.h1`
  font-size: 120px;
  text-transform: uppercase;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Reacotr Studio compound" />
    <Title>Reactor <br/> JavaScript <br/> done right.</Title>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
