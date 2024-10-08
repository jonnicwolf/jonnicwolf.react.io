import { FC, SetStateAction, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';

import LandingPage from './LandingPage';
import ProjectCard from '../components/molecules/ProjectCard';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';

import EsperiCover from '../components/molecules/EsperiCover';
import ProjectCover from '../components/molecules/ProjectCover';

interface Props {
  enterClicked: boolean,
  setEnterClicked: React.Dispatch<SetStateAction<boolean>>,
  projectType: number,
  setProjectType: React.Dispatch<SetStateAction<number>>
};

const WebProjects: FC<Props> = ({ enterClicked, setEnterClicked }) => {
  const [
    javascript,
    typescript,
    react,
    p5,
    firebase,
    postgresql,
  ] = [
    'devicon-javascript-plain',
    'devicon-typescript-plain',
    'devicon-react-original',
    'devicon-p5js-original',
    'devicon-firebase-plain',
    'devicon-postgresql-plain',
    'devicon-swift-plain',
  ];

  const hotc = [typescript, react, p5, firebase];
  const scd = [javascript, react, postgresql, firebase];

  return (
    <Container getter={enterClicked}>
      <ProjectList getter={enterClicked}>
        <LandingPage setter={setEnterClicked} />

        <ProjectCard
          title='Esperi'
          bio='Tarot Interpreter'
          liveLink='https://esperi.vercel.app'
          githubLink='https://github.com/jonnicwolf/heart_of_the_cards'
          // @ts-ignore
          cover={EsperiCover}
          gifPath='https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/heicbedxhzwocfzxqzky'
          apis={['TAROTAPI', 'OPENAI API']}
          descriptions={['LIFESTYLE & ENTERTAINMENT', 'FULL STACK']}
          devicons={hotc}
        />

        <ProjectCard
          title='Stoned Cold Dreamery'
          bio='Webstore'
          liveLink='https://stoned-cold-dreamery.vercel.app'
          githubLink='https://github.com/jonnicwolf/stoned_cold_dreamery'
          coverLink='https://res.cloudinary.com/dhah4xjvr/image/upload/v1722178672/fezz.dev/photos/photos/z265st6zxzzcvahg9sca.jpg'
          // @ts-ignore
          cover={ProjectCover}
          gifPath='https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/r46imtohg1igqqknoqgp'
          apis={[]}
          descriptions={['E-COMMERCE', 'FULL STACK']}
          devicons={scd}
        />
      </ProjectList>

      <Background strokeColor={150} showControls={false} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 3500px;
  padding-top: 75px;

  @media screen and (max-width: 720px) {
    height: 2200px;
    padding-top: ${(props: { getter: boolean }) => props.getter ? '100px' : '0px'};
  }
`;
const Background = styled(P5_LORENZ_ATTRACTOR)`
  height: 100vh;
  z-index: 1;
`;
const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 300px;
  position: absolute;
  z-index: ${(props: { getter: boolean }) => props.getter ? 2 : 3};
  transition: z-index 2s linear;

  @media screen and (max-width: 720px) {
    padding-top: 100px;
  }
  @media screen and (max-height: 950px) {
    gap: 400px;
    transform: ${(props: {getter: boolean}) => props.getter ? 'translateY(-300px)' : null};
    scale: ${(props: {getter: boolean}) => props.getter ? 0.85 : 1};
  }
`;

export default WebProjects;
