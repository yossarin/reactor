import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
  background: #1A465C;
  margin-bottom: 20px;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
`

const link = {
  color: 'white',
  textDecoration: 'none',
  marginRight: '20px'
}

const Header = () => (
  <Head>
    <Container>
      <nav>
        <Link to="/about" style={link}>
          About
        </Link>
        <Link to="/training" style={link}>
          Training
        </Link>
        <Link to="/blog" style={link}>
          Blog
        </Link>
        <Link to="/careers" style={link}>
          Careers
        </Link>
      </nav>
    </Container>
  </Head>
)

export default Header
