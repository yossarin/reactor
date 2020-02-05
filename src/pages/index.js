import React from 'react'
import styled from 'styled-components'

import Layout, { Container } from '../components/layout'
import SEO from '../components/seo'

const Title = styled.h1`
  font-size: 150px;
  text-transform: uppercase;
  font-family: SojuzMono-Regular;
  margin-top: 40px;
  margin-bottom: 150px;
`

const Separator = styled.div`
  border-top: 1px solid #c9c9c9;
`;

const Block = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-top: 40px;
  padding-bottom: 130px;
`

const BlockTitle = styled.h2`
  grid-column: span 4;
  font-size:32px;
`

const BlockText =styled.p`
  grid-column: span 8;
  font-size: 30px;
  line-height: 1.5;
`

const Rotator = styled.div`
  background: #1A465C;
  padding: 50px 0;
`
const RotatorText = styled.marquee`
  marquee-speed: fast;
  color: #F28924;
  background: #1A465C;
  margin: 0;
  font-size: 188px;
  line-height: 1;
  text-wrap: no-wrap;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Reacotr Studio compound" />
    <Container>
      <Title>Reactor <br/> JavaScript <br/> done right.</Title>
    </Container>
    <Separator></Separator>
    <Container>
      <Block>
        <BlockTitle>Development</BlockTitle>
        <BlockText>We’re a development studio based in Zagreb, Croatia that transforms ideas into reality. Jam-packed with creatives of diverse professional backgrounds, we’re ready to solve all your problems — by paying great attention to detail and creating no technical debt. Not your average bunch of developers.</BlockText>
      </Block>
    </Container>
    <Separator></Separator>
    <Container>
      <Block>
        <BlockTitle>Training</BlockTitle>
        <BlockText>We’re a development studio based in Zagreb, Croatia that transforms ideas into reality. Jam-packed with creatives of diverse professional backgrounds, we’re ready to solve all your problems — by paying great attention to detail and creating no technical debt. Not your average bunch of developers.</BlockText>
      </Block>
    </Container>
    <Separator></Separator>
    <Container>
      <Block>
        <BlockTitle>Open Source</BlockTitle>
        <BlockText>We’re proud of us not falling flat in knowledge management. Equipped with experience, we’re sharing it all. No more stumbling in the dark — join our training. Our studio is open, in every sense of the word. We’ll show you the ropes and you’ll master technology and clear up organizational issues in no time.</BlockText>
      </Block>
    </Container>
    <Rotator>
        <RotatorText>JavaScript done right</RotatorText>
    </Rotator>
  </Layout>
)

export default IndexPage
