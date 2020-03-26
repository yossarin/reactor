import React from 'react'
import {  graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import SEO from '../components/seo'
import Layout from '../components/layout'
import { Content, greyBck, darkBlue, yellow } from '../components/globalStyles'

import { Author, Duration } from '../pages/blog'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const TitleSection = styled.div`
    position: relative;
    background: ${greyBck};
    padding: 200px 0 60px 0;
`
const Title = styled.h1`
    font-size: 52px;
    max-width: 65%;
    margin-bottom: 20px;
    line-height: 1.3;
    font-family: ${({ typoType }) => typoType === 'sohene' ? 'Sohene-Medium' : 'Untitled-Medium' };
`

const Description = styled.h3`
  font-size: 30px;
  line-height: 40px;
  margin-bottom: 60px;
`

const Meta = styled.div`
  display: flex;
  position: absolute;
  bottom: -18px;
`

const sharedTypography = css`
  h1, h2, h3, p {
    max-width: 66rem;
    padding: 0 60px;
    margin-left: auto;
    margin-right: auto;
  }

  hr {
    display: block;
    margin: 54px 0;
  }

  blockquote {
    margin: 0;
    padding: 100px 0;
    background: ${darkBlue};
    margin-bottom: 56px;

    p {
      color: ${yellow};
      font-weight: 500;
      font-size: 40px;
      line-height: 56px;
    }
  }
`

const typographySohene = css`
  h2 {
    font-family: "Sohene-Medium";
    font-weight: 500;
    margin-bottom: 24px;
  }

  h3, p {
    font-family: "Sohene-Regular";
    font-weight: 400;
  }

  p {
    font-size: 20px;
    line-height: 32px;
  }


  blockquote p {
    font-family: "Sohene-Medium";
  }
`

const typographyUntitled= css`
 h2 {
    font-family: "Untitled-Medium";
    font-weight: 500;
    margin-bottom: 24px;
  }

  h3, p {
    font-family: "Untitled-Regular";
    font-weight: 400;
  }

  p {
    font-size: 20px;
    line-height: 32px;
  }

  blockquote p {
    font-family: "Untitled-Medium";
  }
`

const PostContent = styled(Content)`
  max-width: none;
  padding: 0;
  padding-top: 100px;
  padding-bottom: 100px;
  ${sharedTypography};
  ${({ typoType }) => typoType === 'sohene' ? typographySohene : typographyUntitled};
`

export default ({ data }) => {
    const post = data.markdownRemark
    const { title, description, tempTypographyType, author, duration, tags, date } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <SEO title={`${title} | Blog`} />
            <TitleSection>
                <Content>
                    <Title typoType={tempTypographyType}>{title}</Title>
                    <Meta>
                      <Author>{author}</Author>
                      <Duration>{timeAgo.format(new Date(date))}</Duration>
                      <Duration>{duration} min read</Duration>
                      <Duration>{tags.join(', ')}</Duration>
                    </Meta>
                </Content>
            </TitleSection>
            <PostContent typoType={tempTypographyType}>
              <Description>
                {description}
              </Description>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </PostContent>
        </Layout>
)}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
        author
        duration
        tags
        date
        tempTypographyType
      }
    }
  }
`