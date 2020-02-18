import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import RotatorText from '../components/rotatorText'
import { Title, Content } from '../components/globalStyles'
import PeopleSlider from '../components/peopleSlider'

const Description = styled.article`
  max-width: 40em;
  padding-right: 0.em;
`

const DescriptionTitle = styled.h2`
  margin-bottom: 0.75em;
  font-family: "Inter-Regular";
  font-size: 1.7rem;
  text-transform: uppercase;
`

const DescriptionText = styled.p`
  font-family: "Inter-Regular";
  font-size: 1.2rem;
  line-height: 1.4;
`

const Cover = styled(Img)`
  margin: 5.5em 0;
`

const ImagesGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
  margin: 4rem 0 8.5rem 0;
`

const PageLink = styled(Link)`
  color: black;
  background-color: rgba(250, 174, 52, 0.2);
`

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      coverImage: file(relativePath: { eq: "temp-reactor-about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      whyImageFirst: file(relativePath: { eq: "temp-why-first.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      whyImageSecond: file(relativePath: { eq: "temp-why-second.jpg" }) {
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
      <SEO title="About" />
      <Content>
        <Title>
          We are a consultancy for agile JavaScript development. By bringing transparent
          communication to the table and always picking up the right tool for the task, we
          deliver substantial value to new and existing projects, and respond quickly to changing
          requirements. In essence, we improve products with up-to-date JavaScript principles.
        </Title>
        <Description>
          <DescriptionTitle>
            Get to know us a bit better
          </DescriptionTitle>
          <DescriptionText>
            We expertly plan and deliver projects. Even though we may make it sound that way, building modern JavaScript web applications isn’t easy. We think diverse teams are brilliant teams. That’s why our studio gathers software coders and engineers from all kinds of professional backgrounds. We’re active in our local communities because when communities bloom, businesses bloom. So how big are we? Well let's just say you’ll need 5 pizzas to feed us (and please, no pineapple).
          </DescriptionText>
          <DescriptionText>
            2015 was an important year and lots of things happened: NASA confirmed water on Mars, "Star Wars: The Force Awakens" premiered, "The Dress" viral debate split the internet. But you know what else happened? In 2015, we were founded and started our journey of becoming the leading JavaScript development consultancy.
          </DescriptionText>
          <DescriptionText>
            Today, 16 of us (and counting) sit in our office in Zagreb and do amazing things together. We’re always interested in expanding our business into emerging markets, and have a vast client base — from Hong Kong to the EU. We know that fantastic developers never stop learning and expanding their horizons. That’s the things we live by.
          </DescriptionText>
        </Description>
        <Cover fluid={data.coverImage.childImageSharp.fluid} />
        <Description>
          <DescriptionTitle>
            Why work with us
          </DescriptionTitle>
          <DescriptionText>
            We focus our studio on employees and delivering excellent products. We only write code that gets reused, read and tested much more easily. No incomplete user stories, lousy QA, unnecessary meetings. We care about the project as much as you do. Our main goal is to improve your business with impeccable code, simple as that.
          </DescriptionText>
        </Description>
        <ImagesGrid>
          <Img fluid={data.whyImageFirst.childImageSharp.fluid} />
          <Img fluid={data.whyImageSecond.childImageSharp.fluid} />
        </ImagesGrid>
        <Description>
          <DescriptionTitle>
            Want a job? Awesome.
          </DescriptionTitle>
          <DescriptionText>
            If you like what you’ve read so far, contact us. Maybe we’re a right fit, maybe we’re not. What we know for sure is that you’re passionate about the same things as we are — writing clean code. That’s how you found us. You already know that we're not an average bunch of developers. Look at our <PageLink to="/careers" target="_blank">Careers page</PageLink> and drop us a shout.
          </DescriptionText>
        </Description>
      </Content>
      <PeopleSlider />
      <RotatorText>
        We expertly plan and deliver projects.
      </RotatorText>
    </Layout>
  )
}

export default AboutPage
