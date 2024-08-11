import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import LinkButton from '../assets/buttons/LinkButton';

export default function TechnologyCard ({ viewSetter }) {
  return (
    <Container>
      <IntroText fontSize='2rem'>TECHS & TOOLS</IntroText>

      <Buttons>
        <LinkButton
          onClick={()=> viewSetter('contact')}
          textContent='GET IN TOUCH'
          isScaleAnimation={true} />
        <LinkButton
          onClick={()=> viewSetter('offline')}
          textContent='OFFLINE'
          isScaleAnimation={true} />
        <LinkButton
          onClick={()=> viewSetter('exp')}
          textContent='WORK HISTORY'
          isScaleAnimation={true} />
        <LinkButton
          onClick={()=> viewSetter('bio')}
          textContent='ABOUT'
          isScaleAnimation={true} />
      </Buttons>

      <Content>
        <TechGroup>
          <IntroText fontSize='1.3rem'>LANGUAGES</IntroText>
          <TechContent gap='10px' width='50%'>
            <SVG style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title='JavaScript'/>
            <Icon className='devicon-typescript-plain colored' title='TypeScript' />
            <SVG style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" title='Python' />
            <Icon className='devicon-swift-plain colored' title='Swift' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.3rem'>STYLING</IntroText>
          <TechContent gap='10px' width='80%'>
            <StyledComponents title='Styled-Components'>
              <StyledIcon>{'<💅>'}</StyledIcon>
              <StyledName>STYLED COMPONENTS</StyledName>
            </StyledComponents>
            <Icon className='devicon-p5js-original colored' title='p5.js' />
            <Icon className='devicon-css3-plain colored' title='CSS3' />
            <Icon className='devicon-bootstrap-plain colored' title='Bootstrap' />
            <Icon className='devicon-sass-plain colored' title='Sass' />
            <Icon className='devicon-framermotion-original colored' title='Sass' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.3rem'>LIBRARIES</IntroText>
          <TechContent gap='10px'>
            <Icon className='devicon-react-original colored' title='React' />
            <Icon className='devicon-redux-original colored' title='Redux' />
            <Icon className='devicon-axios-plain colored' title='Axios' />
            <Icon className='devicon-nodejs-plain colored' title='Node.js' />
            <Icon className='devicon-express-original colored' title='Express.js' />
            <Icon className='devicon-firebase-plain colored' title='Firebase' />
            <Icon className='devicon-sentry-plain colored' title='Sentry' />
            <Icon className='devicon-cypressio-plain colored' title='Cypress.io' />
            <Icon className='devicon-jest-plain colored' title='Jest' />
            <Icon className='devicon-git-plain colored' title='Git' />
            <Icon className='devicon-npm-original-wordmark colored' title='NPM Package Manager' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.3rem'>TOOLS</IntroText>
          <TechContent gap='9px'>
            <Icon className='devicon-docker-plain colored' title='Docker' />
            <Icon className='devicon-rabbitmq-plain colored' title='RabbitMQ' />
            <Icon className='devicon-terraform-plain colored' title='Terraform' />
            <Icon className='devicon-kubernetes-plain colored' title='Kubernetes' />
            <Icon className='devicon-jenkins-plain colored' title='Jenkins' />
            <Icon className='devicon-postgresql-plain colored' title='PostgreSQL' />
            <Icon className='devicon-datagrip-plain colored' title='DataGrip' />
            <Icon className='devicon-postman-plain colored' title='Postman' />
            <Icon className='devicon-github-plain colored' title='GitHub' />
            <Icon className='devicon-gitlab-plain colored' title='Gitlab' />
            <Icon className='devicon-vscode-plain colored' title='Visual Studio Code' />
            <Icon className='devicon-jira-plain  colored' title='Jira' />
            <Icon className='devicon-curl-plain  colored' title='cURL' />
            <SVG style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" title='Slack' />
            <SVG style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" title='Figma' />
            <Icon className='devicon-trello-plain colored' title='Trello' />
          </TechContent>
        </TechGroup>
      </Content>
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 900px;
  width: 800px;
  animation: ${fadeIn} 1.5s forwards;
  gap: 8px;
`;

  const IntroText = styled.h3`
    font-size: ${props => props.fontSize};
    margin: 0;
    font-family: Michroma;
  `;

  const Content = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  `;
    const StyledComponents = styled.div`
      height: 5rem;
      width: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid black;
      transition: scale 0.3s linear;
      &: hover { scale: 1.1 };
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
    const TechGroup = styled.div`
      font-size: 5rem;
      padding: 10px;
      width: 45%;
      border: 1px solid grey;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    `;
    const TechContent = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: ${props => props.gap};
      width: ${props => props.width};
    `;
      const Icon = styled.i`
        transition: scale 0.3s linear;
        &: hover { scale: 1.1 };
      `;
      const SVG = styled.img`
        transition: scale 0.2s linear;
        &: hover { scale: 1.1 };
      `;
  const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `;
