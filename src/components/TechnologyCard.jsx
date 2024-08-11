import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export default function TechnologyCard () {
  return (
    <Container>
      <IntroText fontSize='2.5rem'>TECHS & TOOLS</IntroText>

      <Content>
        <TechGroup>
          <IntroText fontSize='1.5rem'>LANGUAGES</IntroText>
          <TechContent>
            <img style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
            <i className='devicon-swift-plain colored' />
            <i className='devicon-typescript-plain colored' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.5rem'>STYLING</IntroText>
          <TechContent>
            <StyledComponents>
              <StyledIcon>{'<💅>'}</StyledIcon>
              <StyledName>STYLED COMPONENTS</StyledName>
            </StyledComponents>
            <i className='devicon-p5js-original colored' />
            <i className='devicon-css3-plain colored' />
            <i className='devicon-bootstrap-plain colored' />
            <i className='devicon-sass-plain colored' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.5rem'>LIBRARIES</IntroText>
          <TechContent>
            <i className='devicon-react-original-wordmark colored' />
            <i className='devicon-redux-original colored' />
            <i className='devicon-axios-plain colored' />
            <i className='devicon-nodejs-plain colored' />
            <i className='devicon-express-original colored' />
            <i className='devicon-firebase-plain colored' />
            <i className='devicon-sentry-plain colored' />
            <i className='devicon-cypressio-plain colored' />
            <i className='devicon-jest-plain colored' />
            <i className='devicon-git-plain colored' />
            <i className='devicon-npm-original-wordmark colored' />
          </TechContent>
        </TechGroup>

        <TechGroup>
          <IntroText fontSize='1.5rem'>TOOLS</IntroText>
          <TechContent>
            <i className='devicon-docker-plain colored' />
            <i className='devicon-rabbitmq-plain colored' />
            <i className='devicon-terraform-plain colored' />
            <i className='devicon-kubernetes-plain  colored' />
            <i className='devicon-jenkins-plain  colored' />
            <i className='devicon-postgresql-plain  colored' />
            <i className='devicon-datagrip-plain  colored' />
            <i className='devicon-postman-plain  colored' />
            <i className='devicon-github-plain  colored' />
            <i className='devicon-gitlab-plain  colored' />
            <i className='devicon-vscode-plain  colored' />
            <i className='devicon-jira-plain  colored' />
            <i className='devicon-curl-plain  colored' />
            <img style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" />
            <img style={{ height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            <i className='devicon-trello-plain colored' />
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
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 800px;
  width: 800px;
  border: 1px solid grey;
  animation: ${fadeIn} 1.5s forwards;
`;

  const IntroText = styled.h3`
    font-size: ${props => props.fontSize};
    margin: 0;
    font-family: Michroma;
  `;

  const Content = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    height: 90%;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
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
      gap: 10px;
    `;
