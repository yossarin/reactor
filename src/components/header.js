import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { grey, darkBlue } from './globalStyles'
import { Container } from '../components/layout'

const Content = styled.div`
  padding: 20px 0;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h1`
  color: ${darkBlue};
`

const link = {
  color: grey,
  marginRight: '20px',
  fontSize: '18px'
}

const Header = () => (
  <Container>
    <Content>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Title>Reactor</Title>
      </Link>
      <nav>
        <Link to="/about" style={link} activeClassName="active">
          About
        </Link>
        <Link to="/training" style={link} activeClassName="active">
          Training
        </Link>
        <Link to="/blog" style={link} activeClassName="active">
          Blog
        </Link>
        <Link to="/careers" style={link} activeClassName="active">
          Careers
        </Link>
      </nav>
    </Content>
  </Container>
)

export default Header
