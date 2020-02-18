import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-slick';
import Img from 'gatsby-image'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slide = styled.div`
  padding: 2rem;
`

const Carousel = styled(Slider)``

export default () => {
    // TODO: Find a better way to query list of images
    const data = useStaticQuery(graphql`
      query {
        first: file(relativePath: { eq: "people/2.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        second: file(relativePath: { eq: "people/3.jpg" }) {
            childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        },
        third: file(relativePath: { eq: "people/2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
        },
        fourth: file(relativePath: { eq: "people/3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        fifth: file(relativePath: { eq: "people/2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
      },
      sixth: file(relativePath: { eq: "people/3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      }
    `)

    // TODO: Add responsive breakpoints to config
    // https://react-slick.neostack.com/docs/example/responsive
    const CarouselConfig = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0
    }

    return (
        <Carousel {...CarouselConfig}>
            <Slide>
              <Img fluid={data.first.childImageSharp.fluid} />
            </Slide>
            <Slide>
              <Img fluid={data.second.childImageSharp.fluid} />
            </Slide>
            <Slide>
              <Img fluid={data.third.childImageSharp.fluid} />
            </Slide>
            <Slide>
              <Img fluid={data.fourth.childImageSharp.fluid} />
            </Slide>
            <Slide>
              <Img fluid={data.fifth.childImageSharp.fluid} />
            </Slide>
            <Slide>
              <Img fluid={data.sixth.childImageSharp.fluid} />
            </Slide>
        </Carousel>
    )
}