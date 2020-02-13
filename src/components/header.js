import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { grey, darkBlue, Content } from './globalStyles'

const Sticky = styled.div`
  position:fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 10;
`

const Head = styled.div`
  padding: 20px 0;
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
  <Sticky>
      <Content>
        <Head>
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
        </Head>
      </Content>
  </Sticky>
)

export default Header
