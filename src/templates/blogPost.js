import React from 'react'
import {  graphql } from 'gatsby'
import styled from 'styled-components'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { Content, greyBck } from '../components/globalStyles'

import { Author, Duration } from '../pages/blog'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const Cont = styled(Content)`
  padding 100px 0;
`
const TitleSection = styled.div`
    position: relative;
    background: ${greyBck};
    padding: 200px 0 60px 0;
`
const Title = styled.h1`
    font-size: 52px;
`
const Meta = styled.div`
  display: flex;
  position: absolute;
  bottom: -18px;
`

export default ({ data }) => {
    const post = data.markdownRemark
    const { title, author, duration, tags, date } = data.markdownRemark.frontmatter;
    return (
        <Layout>
            <SEO title={`${title} | Blog`} />
            <TitleSection>
                <Content>
                    <Title>{title}</Title>
                    <Meta>
                      <Author>{author}</Author>
                      <Duration>{timeAgo.format(new Date(date))}</Duration>
                      <Duration>{duration} min read</Duration>
                      <Duration>{tags.join(', ')}</Duration>
                    </Meta>
                </Content>
            </TitleSection>
            <Cont>
              <div className="blogPost">
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
              </div>
            </Cont>
        </Layout>
)}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        duration
        tags
        date
      }
    }
  }
`