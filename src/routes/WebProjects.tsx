import { FC, SetStateAction, } from 'react';
// @ts-ignore
import styled from 'styled-components';

import LandingPage from './LandingPage';
import ProjectCard from '../components/molecules/ProjectCard';

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
          title='Fiesta'
          bio='Bar/Restaurant Reservation App'
          liveLink='https://fiestaa.vercel.app'
          githubLink='https://github.com/Soiree-NYC/Soiree_Public'
          coverLink='https://res.cloudinary.com/dl7ortwgk/image/upload/v1751960710/Screenshot_2025-03-03_at_3.45.11_AM_c2yd0k.png'
          // @ts-ignore
          cover={ProjectCover}
          gifPath='https://res.cloudinary.com/dl7ortwgk/image/upload/v1751969726/ezgif.com-video-to-gif-converter_1_nnz8ry.gif'
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
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  // padding-top: 70px;
  padding-top: ${(props: { getter: boolean }) => props.getter ? '10vh' : '0vh'};
  // padding-top: ${(props: { getter: boolean }) => props.getter ? '5vh' : '0vh'};
  height: 100%;

  @media screen and (max-width: 800px) {
    padding-top: 0;
  }
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30vh;
  // position: absolute;
  z-index: ${(props: { getter: boolean }) => props.getter ? 2 : 3};
  transition: z-index 2s linear;
  // transform: ${(props: {getter: boolean}) => props.getter ? 'translateY(-380px)' : null};

  @media screen and (max-height: 950px) {
    gap: 30vh;
  }
  // @media screen and (max-height: 950px) {
  //   gap: 200px;
  //   // transform: ${(props: {getter: boolean}) => props.getter ? 'translateY(-380px)' : null};
  //   // scale: ${(props: {getter: boolean}) => props.getter ? 0.85 : 1};
  // }
`;

export default WebProjects;
