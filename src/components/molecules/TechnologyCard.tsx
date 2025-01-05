import { FC, useContext } from 'react';
import { useDarkmode } from '../../Darkmode';
// @ts-ignore
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import LinkButton from '../../assets/buttons/LinkButton';

interface Props {
  viewSetter: (value: string) => void,
};

interface Container {};

interface IntroText {};
interface Title {};
interface Content {};
interface StyledComponents {};
interface StyledIcon {};
interface StyledName {};
interface TechGroup {
  darkmode: boolean
};
interface TechContent {
  gap: string,
  width: string,
};
interface Icon {};
interface SVG {};
interface Buttons{};

const TechnologyCard: FC<Props> = ({ viewSetter }) => {
  const { darkmode } = useDarkmode();

  return (
    <Container>
      <Title>TECHS & TOOLS</Title>

      <Content>
        <TechGroup darkmode={darkmode} >
          <IntroText>LANGUAGES</IntroText>
          <TechContent gap='10px' width='50%'>
            <SVG style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title='JavaScript'/>
            <Icon className='devicon-typescript-plain colored' title='TypeScript' />
            <SVG style={{height: '5rem'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" title='Python' />
            <Icon className='devicon-swift-plain colored' title='Swift' />
          </TechContent>
        </TechGroup>

        <TechGroup darkmode={darkmode} >
          <IntroText>STYLING</IntroText>
          <TechContent gap='10px' width='80%'>
            <StyledComponents title='Styled-Components'>
              <StyledIcon>{'<💅>'}</StyledIcon>
              <StyledName>STYLED COMPONENTS</StyledName>
            </StyledComponents>
            <Icon className='devicon-p5js-original colored' title='p5.js' />
            <Icon className='devicon-blender-original colored' title='Blender' />
            <Icon className='devicon-bootstrap-plain colored' title='Bootstrap' />
            <Icon className='devicon-framermotion-original colored' title='Framer Motion' />
          </TechContent>
        </TechGroup>

        <TechGroup darkmode={darkmode} >
          <IntroText>LIBRARIES</IntroText>
          <TechContent gap='10px' width='auto'>
            <Icon className='devicon-react-original colored' title='React' />
            <Icon className='devicon-redux-original colored' title='Redux' />
            <Icon className='devicon-axios-plain colored' title='Axios' />
            <Icon className='devicon-nodejs-plain colored' title='Node.js' />
            <Icon className='devicon-express-original colored' title='Express.js' />
            <Icon className='devicon-firebase-plain colored' title='Firebase' />
            <Icon className='devicon-cypressio-plain colored' title='Cypress.io' />
            <Icon className='devicon-jest-plain colored' title='Jest' />
          </TechContent>
        </TechGroup>

        <TechGroup darkmode={darkmode} >
          <IntroText>TOOLS</IntroText>
          <TechContent gap='9px' width="auto">
            <Icon className='devicon-terraform-plain colored' title='Terraform' />
            <Icon className='devicon-kubernetes-plain colored' title='Kubernetes' />
            <Icon className='devicon-postgresql-plain colored' title='PostgreSQL' />
            <Icon className='devicon-datagrip-plain colored' title='DataGrip' />
            <Icon className='devicon-github-plain colored' title='GitHub' />
            <Icon className='devicon-vscode-plain colored' title='Visual Studio Code' />
            <Icon className='devicon-jira-plain  colored' title='Jira' />
            <Icon className='devicon-curl-plain  colored' title='cURL' />
          </TechContent>
        </TechGroup>
      </Content>

      <Buttons>
        <LinkButton
          onClick={() => viewSetter('contact')}
          textContent='GET IN TOUCH'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        <LinkButton
          onClick={() => viewSetter('bio')}
          textContent='ABOUT'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        <LinkButton
          onClick={() => viewSetter('exp')}
          textContent='WORK HISTORY'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
      </Buttons>
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled(motion.div)<Container>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 900px;
  width: 800px;
  animation: ${fadeIn} 1.5s forwards;
  gap: 8px;
`;
  
  const IntroText = styled.h3<IntroText>`
    font-size: 2rem;
    margin: 0;
    font-family: Michroma;
  `;
  const Title = styled(IntroText)`
    font-size: 2.3rem;
  `;

  const Content = styled.div<Content>`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  `;
    const StyledComponents = styled.div<StyledComponents>`
      height: 5rem;
      width: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid black;
      transition: scale 0.3s linear;
      &: hover { scale: 1.1 };
      `;
      const StyledIcon = styled.div<StyledIcon>`
      font-size: 2rem;
      transform: translateY(5px);
      align-self: center;
      margin-bottom: 10px;
    `;
    const StyledName = styled.div<StyledName>`
      font-size: 0.6rem;
      margin: 0;
      padding: 5px;
      font-weight: bold;
      text-wrap: wrap;
    `;
    const TechGroup = styled.div<TechGroup>`
      font-size: 5rem;
      padding: 10px;
      width: 45%;
      border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    `;
    const TechContent = styled.div<TechContent>`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: ${props => props.gap};
      width: ${props => props.width};
    `;
      const Icon = styled.i<Icon>`
        transition: scale 0.3s linear;
        &: hover { scale: 1.1 };
      `;
      const SVG = styled.img<SVG>`
        transition: scale 0.2s linear;
        &: hover { scale: 1.1 };
      `;
  const Buttons = styled.div<Buttons>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    scale: 1.1;
  `;

export default TechnologyCard;
