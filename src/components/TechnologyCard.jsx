import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export default function TechnologyCard () {
  return (
    <Container>
      <IntroText>TECHS & TOOLS</IntroText>
      <Content>
        
        <img style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        <img style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
        <i className='devicon-swift-plain colored' />
        <i className='devicon-typescript-plain colored' />
        <i className='devicon-react-original-wordmark colored' />
        <StyledComponents>
          <StyledIcon>{'<💅>'}</StyledIcon>
          <StyledName>STYLED COMPONENTS</StyledName>
        </StyledComponents>
        <i className='devicon-p5js-original colored' />
        <i className='devicon-css3-plain colored' />
        <i className='devicon-redux-original colored' />
        <i className='devicon-axios-plain colored' />
        <i className='devicon-bootstrap-plain colored' />
        <i className='devicon-html5-plain colored' />
        <i className='devicon-sass-plain colored' />
        <i className='devicon-nodejs-plain colored' />
        <i className='devicon-rabbitmq-plain colored' />
        <i className='devicon-terraform-plain colored' />
        <i className='devicon-firebase-plain colored' />
        <i className='devicon-express-original  colored' />
        <i className='devicon-docker-plain colored' />
        <i className='devicon-kubernetes-plain  colored' />
        <i className='devicon-jenkins-plain  colored' />
        <i className='devicon-postgresql-plain  colored' />
        <i className='devicon-datagrip-plain  colored' />
        <i className='devicon-postman-plain  colored' />
        <i className='devicon-sentry-plain  colored' />
        <i className='devicon-cypressio-plain  colored' />
        <i className='devicon-jest-plain  colored' />
        <i className='devicon-git-plain  colored' />
        <i className='devicon-github-plain  colored' />
        <i className='devicon-gitlab-plain  colored' />
        <i className='devicon-vscode-plain  colored' />
        <i className='devicon-jira-plain  colored' />
        <i className='devicon-npm-original-wordmark  colored' />
        <i className='devicon-curl-plain  colored' />
        <img style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
        <img style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        <i className='devicon-trello-plain colored' />
        {/* <div style={{height: '5rem', width: '5rem', border: '1px solid red'}}></div> */}
      </Content>
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  overflow: scroll;
  height: 800px;
  width: 800px;
  border: 1px solid grey;
  animation: ${fadeIn} 1.5s forwards;
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-family: Michroma;
`;
const Content = styled.div`
  display: flex;
  font-size: 5rem;
  flex-wrap: wrap;
  gap: 10px;
`;
const StyledComponents = styled.div`
  height: 5rem;
  width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;;
  border: 1px solid black;
  `;
  const StyledIcon = styled.div`
  font-size: 2rem;
  transform: translateY(5px);
  align-self: center;
  margin-bottom: 10px;
`;
const StyledName = styled.div`
  font-size: 0.6rem;
  margin: 0;
  padding: 5px;
  font-weight: bold;
  text-wrap: wrap;
`;

