import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import LandingPage from './LandingPage';
import ProjectCard from '../components/molecules/ProjectCard';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';

import EsperiCover from '../components/molecules/EsperiCover';
import SCDCover from '../components/molecules/SCDCover';

interface Props {
  getter: boolean,
  setter: (open: boolean) => void,
};

const ProjectPage: FC<Props> = ({ setter, getter }) => {
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
    'devicon-css3-plain-wordmark',
  ];

  const hotc_devi = [typescript, react, p5, firebase];
  const scd_devi= [javascript, react, postgresql, firebase];

  return (
    <Container>
      <ProjectList getter={getter}>
        <LandingPage setter={setter} />

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
          devicons={hotc_devi}
        />

        <ProjectCard
          title='Stoned Cold Dreamery'
          bio='Webstore'
          liveLink='https://stoned-cold-dreamery.vercel.app'
          githubLink='https://github.com/jonnicwolf/stoned_cold_dreamery'
          // @ts-ignore
          cover={SCDCover}
          gifPath='https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/r46imtohg1igqqknoqgp'
          apis={[]}
          descriptions={['E-COMMERCE', 'FULL STACK']}
          devicons={scd_devi}
        />
      </ProjectList>

      <Background strokeColor={150} showControls={false} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 5vh;
  justify-content: center;
  height: 240vh;
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
  gap: 20vh;
  position: absolute;
  z-index: ${(props: { getter: boolean }) => props.getter ? 2 : 3};
  transition: z-index 2s linear;

  @media screen and (max-width: 720px) {
    padding-top: 100px;
  }
`;

export default ProjectPage;
