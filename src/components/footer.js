import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { Container } from './layout';
import { grey, greyBck } from './globalStyles'
import logo from '../images/logo.png'

const Foot = styled.footer`
    position: relative;
    margin-bottom: 454px;
    z-index: 1;
    background: ${greyBck};
`;

const Logo = styled.img`
    width: 100px;
`

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding-top: 100px;
    padding-bottom: 130px;
`
const Left = styled.div`
    grid-column: span 4;

`
const Right = styled.div`
    grid-column: span 8;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const Nav = styled.nav`
    grid-column: span 3;
    display: flex;
    justify-content: space-between;
    margin: 80px 0;
    font-size: 14px;
`

const link = {
    color: grey,
    marginRight: '20px',
    fontSize: '18px'
  }

const Footer = () => (
  <Foot>
    <Container>
        <Content>
            <Left>
                <Logo src={logo} />
            </Left>
            <Right>
                <p>Adress</p>
                <p>Đorđićeva 8a</p>
                <p>Zagreb, Croatia</p>
                <p>Work with us</p>
                <p>biz@reactor.studio</p>
                <div></div>
                <p>Join us</p>
                <p>hello@reactor.studio</p>
                <div></div>
                <p>Stalk us</p>
                <p>Facebook, Linkedin</p>
            </Right>
            <Left></Left>
            <Right>
                <Nav>
                    <Link to="/" style={link} activeClassName="active">
                        Home
                    </Link>
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
                </Nav>
            </Right>
            <Left></Left>
            <Right>
                <div></div>
                <p>@2020</p>
                <p>All Rights Reserved</p>
            </Right>
        </Content>
    </Container>
  </Foot>
)

export default Footer
