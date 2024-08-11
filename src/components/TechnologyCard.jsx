import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import LinkButton from '../assets/buttons/LinkButton';

export default function TechnologyCard () {
  return (
    <Container>
      <IntroText fontSize='2rem'>TECHS & TOOLS</IntroText>

      <Buttons>
        <LinkButton
          // onClick={handleClick_getInTouch}
          textContent='GET IN TOUCH'
          isScaleAnimation={true} />
        <LinkButton
          // onClick={handleClick_more}
          textContent='TECH'
          isScaleAnimation={true} />
        <LinkButton
          // onClick={handleClick_more}
          textContent='OFFLINE'
          isScaleAnimation={true} />
        <LinkButton
          // onClick={handleClick_more}
          textContent='WORK HISTORY'
          isScaleAnimation={true} />
      </Buttons>

      <Content>
        <TechGroup>
          <IntroText fontSize='1.3rem'>LANGUAGES</IntroText>
          <TechContent>
            <img style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title='JavaScript'/>
            <img style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" title='Python' />
            <i className='devicon-swift-plain colored' title='Swift' />
            <i className='devicon-typescript-plain colored' title='TypeScript' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.3rem'>STYLING</IntroText>
          <TechContent>
            <StyledComponents title='Styled-Components'>
              <StyledIcon>{'<💅>'}</StyledIcon>
              <StyledName>STYLED COMPONENTS</StyledName>
            </StyledComponents>
            <i className='devicon-p5js-original colored' title='p5.js' />
            <i className='devicon-css3-plain colored' title='CSS3' />
            <i className='devicon-bootstrap-plain colored' title='Bootstrap' />
            <i className='devicon-sass-plain colored' title='Sass' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.3rem'>LIBRARIES</IntroText>
          <TechContent>
            <i className='devicon-react-original-wordmark colored' title='React' />
            <i className='devicon-redux-original colored' title='Redux' />
            <i className='devicon-axios-plain colored' title='Axios' />
            <i className='devicon-nodejs-plain colored' title='Node.js' />
            <i className='devicon-express-original colored' title='Express.js' />
            <i className='devicon-firebase-plain colored' title='Firebase' />
            <i className='devicon-sentry-plain colored' title='Sentry' />
            <i className='devicon-cypressio-plain colored' title='Cypress.io' />
            <i className='devicon-jest-plain colored' title='Jest' />
            <i className='devicon-git-plain colored' title='Git' />
            <i className='devicon-npm-original-wordmark colored' title='NPM Package Manager' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.3rem'>TOOLS</IntroText>
          <TechContent>
            <i className='devicon-docker-plain colored' title='Docker' />
            <i className='devicon-rabbitmq-plain colored' title='RabbitMQ' />
            <i className='devicon-terraform-plain colored' title='Terraform' />
            <i className='devicon-kubernetes-plain colored' title='Kubernetes' />
            <i className='devicon-jenkins-plain colored' title='Jenkins' />
            <i className='devicon-postgresql-plain colored' title='PostgreSQL' />
            <i className='devicon-datagrip-plain colored' title='DataGrip' />
            <i className='devicon-postman-plain colored' title='Postman' />
            <i className='devicon-github-plain colored' title='GitHub' />
            <i className='devicon-gitlab-plain colored' title='Gitlab' />
            <i className='devicon-vscode-plain colored' title='Visual Studio Code' />
            <i className='devicon-jira-plain  colored' title='Jira' />
            <i className='devicon-curl-plain  colored' title='cURL' />
            <img style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" title='Slack' />
            <img style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" title='Figma' />
            <i className='devicon-trello-plain colored' title='Trello' />
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
      gap: 30px;
    `;
    const TechContent = styled.div`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 5px;
    `;
  const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `;
