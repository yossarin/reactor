import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { greyBck, grey, Title, Content, darkBlue, yellow } from '../components/globalStyles'

const animation = {
  topLeft: keyframes`
   from {
     top: -100%;
     left: -100%;
   }
   to {
     top: 0;
     left: 0;
   }
  `,
  topRight: keyframes`
   from {
     top: -100%;
     left: 100%;
   }
   to {
     top: 0;
     left: 0;
   }
  `,
  bottomLeft: keyframes`
   from {
     top: 100%;
     left: -100%;
   }
   to {
     top: 0;
     left: 0;
   }
  `,
  bottomRght: keyframes`
   from {
     top: 100%;
     left: 100%;
   }
   to {
     top: 0;
     left: 0;
   }
  `
}

const Trainings = styled.section`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -100%;
  left: -100%;
  width: 100%;
  height: 100%;
  background: white;
  padding: 70px 50px;
  animation: ${props => animation[props.direction]} 1s ease-in;
  animation-fill-mode: forwards;
`

const DetailsTitle = styled.h2`
  font-size: 62px;
  margin-bottom: 50px;
  text-transform: uppercase;
`
const DetailDescription = styled.p`
  font-size: 18px;
  max-width: 50%;
`

const Button = styled.a`
  display: block;
  margin-top: auto;
  background: ${darkBlue};
  color: ${yellow};
  text-align: center;
  font-size: 50px;
  padding: 30px;
  text-transform: uppercase;
  font-family: SojuzMono-Bold;
`

const Training = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${greyBck};
  padding: 30px;
  min-height: 500px;
  cursor: pointer;
`

const TrainingTitle = styled.h2`
  font-size: 62px;
  font-family: SojuzMono-Regular;
  text-transform: uppercase;
`
const TrainingDesc = styled.p`
  font-size: 18px;
  max-width: 380px;
  margin-top: 15px;
`

const Meta = styled.div`
  margin-top: auto;
  display: flex;
`
const MetaDesc = styled.div`
  background: ${greyBck};
  color: ${grey};
  border-radius: 5px;
  padding: 10px;
  margin-right: 15px;
  text-transform: uppercase;
`

const MetaBold = styled.span`
  font-family: SojuzMono-Bold;
`

const TrainingPge = () => {
  const [activeTraining, setActiveTraining] = useState(null);

  let direction = null;

  switch(activeTraining) {
    case 'javascript':
      direction = 'topLeft';
      break;
    case 'react':
      direction = 'topRight';
      break;
    case 'node':
      direction = 'bottomLeft';
      break;
    default:
      direction = null;
  }

  return (
  <Layout>
    <SEO title="Trainings" />
    <Content>
      <Title>
        Know-hows up for grabs. <br/>Join our training sessions.
      </Title>
    <Trainings>
      <Details direction={direction}>
        <DetailsTitle>{activeTraining}</DetailsTitle>
        <DetailDescription>While workshop will be mostly based on frontend, we will explore what is GraphQL and how to make your own simple GraphQL server. We will leverage that knowledge to build a highly reusable and scalable React app, using flow as a static type checker to make our app even more robust. We all worked with standard REST APIs and it get's complicated quite fast on the frontend, I will try to show you how GraphQL can save you time and make your life easier. GraphQL is a data query language developed by Facebook under MIT license. It is not tied with any specific database or specific programming language or storage. It provides a way to define the complete description of data in the schema and allows a client to ask for what they need and it simply returns the response in JSON. This will be a hands-on workshop where we will show how a GraphQL server looks like and build a React app leveraging GraphQL superpowers. Prerequisites Participants will need to bring a laptop with git and Node installed, have prior knowledge of working with APIs and some kind of component-based UI library (for this workshop we will use React but the knowledge can be transferred to any other library/framework)</DetailDescription>
        <Button>Contact us</Button>
      </Details>
      <Training onClick={() => setActiveTraining('javascript')}>
        <TrainingTitle>JavaScript</TrainingTitle>
        <TrainingDesc>Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps</TrainingDesc>
        <Meta>
          <MetaDesc>
            Duration <MetaBold>4d</MetaBold>
          </MetaDesc>
          <MetaDesc>
            Level <MetaBold>Intermediate</MetaBold>
          </MetaDesc>
        </Meta>
      </Training>
      <Training onClick={() => setActiveTraining('react')}>
        <TrainingTitle>React</TrainingTitle>
        <TrainingDesc>Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps</TrainingDesc>
        <Meta>
          <MetaDesc>
            Duration <MetaBold>4d</MetaBold>
          </MetaDesc>
          <MetaDesc>
            Level <MetaBold>Intermediate</MetaBold>
          </MetaDesc>
        </Meta>
      </Training>
      <Training onClick={() => setActiveTraining('node')}>
        <TrainingTitle>Node</TrainingTitle>
        <TrainingDesc>Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps</TrainingDesc>
        <Meta>
          <MetaDesc>
            Duration <MetaBold>4d</MetaBold>
          </MetaDesc>
          <MetaDesc>
            Level <MetaBold>Intermediate</MetaBold>
          </MetaDesc>
        </Meta>
      </Training>
      <Training>
        <TrainingTitle>Serverless</TrainingTitle>
        <TrainingDesc>Use React Native and your React knowledge and take your web development skills to build native iOS and Android Apps</TrainingDesc>
        <Meta>
          <MetaDesc>
            Duration <MetaBold>4d</MetaBold>
          </MetaDesc>
          <MetaDesc>
            Level <MetaBold>Intermediate</MetaBold>
          </MetaDesc>
        </Meta>
      </Training>
    </Trainings>
    </Content>
  </Layout>
)}

export default TrainingPge
