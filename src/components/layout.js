/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'
import { GlobalStyles, orange, darkBlue } from './globalStyles'


export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

 const Main = styled.main`
  background: white;
  margin-top: 84px;
`

const Github = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: ${orange};
  text-align: center;
  color: ${darkBlue};
  font-size: 140px;
  padding: 150px 0;
  z-index: -1;
`

const Title = styled.h1`
  font-size: 140px;
  text-transform: uppercase;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer/>
      <a href="https://github.com/reactor-studio" target="_blank">
        <Github>
          <Title>Open 24/7</Title>
        </Github>
      </a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
