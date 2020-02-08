import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import RotatorText from '../components/rotatorText'

const Title = styled.h1`
  font-family: "Inter-Regular";
  font-weight: bold;
  font-size: 4rem;
  margin: 20vh 0 42px;
`

const Content = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

const Description = styled.p`
  font-size: 2.2rem;
  line-height: 1.3;
`

const Cover = styled(Img)`
  margin: 5.5em 0;
`

const SecondPage = (props) => {
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
      <SEO title="About reactor" />
      <Content>
        <Title>We're always on the lookout for awesome talent.</Title>
        <Description>
          Everything in life is uncertain, but one thing’s for sure: you won’t
          know, if you don’t try. So maybe you should try us. We’re hiring people
          who share our core values. Are you skilled, disciplined and open-minded?
          Hit us up, let’s chat over a cup of coffee.
        </Description>
        <Cover fluid={data.coverImage.childImageSharp.fluid} />
      </Content>
      <RotatorText>
        Upload CV → job@reactor.studio
      </RotatorText>
    </Layout>
  )
}

export default SecondPage
