import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

import { Container } from './layout';

const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    border-top: 1px solid #c9c9c9;
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

const Footer = () => (
  <footer>
    <Container>
        <Content>
            <Left>
                Logo
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
                <p>Follow us</p>
                <p>Facebook, Linkedin</p>
            </Right>
        </Content>
    </Container>
  </footer>
)

export default Footer
