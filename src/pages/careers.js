import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import RotatorText from '../components/rotatorText'
import { greyBck, Title, Content } from '../components/globalStyles'

const Heading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${greyBck};
  height:600px;
  width: 100%;
  z-index: -1;
`

const Description = styled.p`
  font-size: 2.2rem;
  line-height: 1.3;
`

const Cover = styled(Img)`
  margin: 5.5rem 0;
`

const CareersPage = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "temp-reactor-cover.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Careers Reactor" />
      <Heading/>
      <Content>
        <Title>We're always on the lookout for awesome talent.</Title>
        <Description>
          Everything in life is uncertain, but one thing’s for sure: you won’t
          know, if you don’t try. So maybe you should try us. We’re hiring people
          who share our core values. Are you skilled, disciplined and open-minded?
          Hit us up, let’s chat over a cup of coffee.
        </Description>
        <Cover fluid={data.coverImage.childImageSharp.fluid} />
        <Title>job@reactor.studio</Title>
      </Content>
    </Layout>
  )
}

export default CareersPage
