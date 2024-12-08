import { FC, SetStateAction, } from 'react';
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
    sequelize,
    express,
    axios,
    tailwindcss,
    heroku,
  ] = [
    'devicon-javascript-plain',
    'devicon-typescript-plain',
    'devicon-react-original',
    'devicon-p5js-original',
    'devicon-firebase-plain',
    'devicon-postgresql-plain',
    'devicon-sequelize-plain',
    'devicon-express-original',
    'devicon-axios-plain',
    'devicon-tailwindcss-original',
    'devicon-heroku-original',
  ];

  const hotc = [typescript, react, p5, firebase];
  const scd = [javascript, react, postgresql, firebase];
  const soiree = [typescript, react, tailwindcss, axios, sequelize, express, postgresql, heroku];

  return (
    <Container getter={enterClicked}>
      <ProjectList getter={enterClicked}>
        <LandingPage setter={setEnterClicked} />

        <ProjectCard
          title='Soirée'
          bio='Bar/Restaurant Reservation App'
          liveLink='https://soiree-drab.vercel.app'
          githubLink='https://github.com/Soiree-NYC/Soiree_Public'
          coverLink='https://res.cloudinary.com/dl7ortwgk/image/upload/v1733318854/Screenshot_2024-12-04_at_8.25.45_AM_k3znts.png'
          // @ts-ignore
          cover={ProjectCover}
          gifPath='https://img-jonnicwolf.s3.us-east-2.amazonaws.com/soiree-ezgif.com-video-to-gif-converter+(1).gif'
          apis={['BARBACKAPI']}
          descriptions={['E-COMMERCE', 'FULL STACK']}
          devicons={soiree}
        />

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
  padding-top: 75px;

  @media screen and (max-width: 720px) {
    height: 1200px;
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
