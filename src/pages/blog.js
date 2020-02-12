import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import Layout from '../components/layout'
import { Title, Content as Cont, darkBlue, greyBck, grey, black } from '../components/globalStyles'

import SEO from '../components/seo'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

const Content = styled(Cont)`
  padding: 50px 0;
`

const BlogTitle = styled.h2`
  font-size:42px;
  font-family: "Inter-Regular";
`
const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  max-width: 750px;
`
const Meta = styled.div`
  display:flex;
`
export const Author = styled.div`
  color:white;
  background: ${darkBlue};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 15px;
  font-family: SojuzMono-Regular;
`

export const Duration = styled(Author)`
  background: #E9E9E9;
  color: ${grey};
  margin-left: 40px;
`

const Tags = styled(Duration)`
  margin-left: auto;
  text-transform: uppercase;
`

const Separator = styled.div`
  border-top: 1px solid ${greyBck};
`

const link = {
  color: black,
  textDecoration: 'none'
}



const Post = post => (
  <>
    <Content>
      <Link to={post.fields.slug} style={link}>
        <BlogTitle>{post.frontmatter.title}</BlogTitle>
      </Link>
      <Description>{post.frontmatter.description}</Description>
      <Meta>
        <Author>{post.frontmatter.author}</Author>
        <Duration>{timeAgo.format(new Date(post.frontmatter.date))}</Duration>
        <Duration>{post.frontmatter.duration} min read</Duration>
        <Tags>{post.frontmatter.tags.join(', ')}</Tags>
      </Meta>
    </Content>
    <Separator/>
  </>
)

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
  <Layout>
    <SEO title="Blog" />
    <Content>
      <Title>Long reads as brain food. <br/> Read what we’re up to.</Title>
    </Content>
    {posts.map(post => Post(post.node))}
  </Layout>
)};

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            tags
            duration
            author
          }
        }
      }
    }
  }
`