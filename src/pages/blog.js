import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Title, Content as Cont, darkBlue, greyBck, grey } from '../components/globalStyles'

import SEO from '../components/seo'

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
const Author = styled.div`
  color:white;
  background: ${darkBlue};
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 15px;
  font-family: SojuzMono-Regular;
`

const Length = styled(Author)`
  background: ${greyBck};
  color: ${grey};
  margin-left: 40px;
`

const Tags = styled(Length)`
  margin-left: auto;
  text-transform: uppercase;
`

const Separator = styled.div`
  border-top: 1px solid ${greyBck};
`

const Post = post => (
  <>
    <Content>
      <Link to={post.fields.slug}>
        <BlogTitle>{post.frontmatter.title}</BlogTitle>
      </Link>
      <Description>{post.frontmatter.description}</Description>
      <Meta>
        <Author>{post.frontmatter.author}</Author>
        <Length>{post.frontmatter.length} min</Length>
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
      <Title>Long reads as brain food. <br/> Read what we’re thinking about.</Title>
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
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
            length
            author
          }
        }
      }
    }
  }
`