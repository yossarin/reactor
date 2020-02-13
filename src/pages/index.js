import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import { Content } from '../components/globalStyles'
import SEO from '../components/seo'
import RotatorText from '../components/rotatorText'

const Title = styled.h1`
  font-size: 150px;
  text-transform: uppercase;
  margin-top: 160px;
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

const IndexPage = () => (
  <Layout>
    <SEO title="Reacotr Studio compound" />
    <Content>
      <Title>JavaScript <br/> done right.</Title>
    </Content>
    <Separator></Separator>
    <Content>
      <Block>
        <BlockTitle>Develop</BlockTitle>
        <BlockText>We’re a development studio based in Zagreb, Croatia that transforms ideas into reality. Jam-packed with creatives of diverse professional backgrounds, we’re ready to solve any problem — by paying great attention to detail and creating no technical debt. Not an average bunch of developers.</BlockText>
      </Block>
    </Content>
    <Separator></Separator>
    <Content>
      <Block>
        <BlockTitle>Improve</BlockTitle>
        <BlockText>We can't stress enough how much constant improvement is important to us. Learning new skills and tackling challenges from different angles — this is mandatory. By putting emphasis on collaboration, we share our expertise with each other. The possibility to improve a business and ourselves drives us.</BlockText>
      </Block>
    </Content>
    <Separator></Separator>
    <Content>
      <Block>
        <BlockTitle>Share</BlockTitle>
        <BlockText>We’re proud of us not falling flat in knowledge management. Equipped with experience, we’re sharing it all. No more stumbling in the dark — join our training. Our studio is open, in every sense of the word. We’ll show you the ropes and you’ll master technology and clear up organizational issues in no time.</BlockText>
      </Block>
    </Content>
    <RotatorText>
      JavaScript done right
    </RotatorText>
  </Layout>
)

export default IndexPage
