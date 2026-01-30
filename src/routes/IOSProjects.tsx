import { FC, } from 'react';

import styled from 'styled-components';

import ProjectCard from '../components/molecules/ProjectCard';
import EsperiCover from '../components/molecules/EsperiCover';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';

interface ContainerProps {};
interface BackgroundProps {
  strokeColor: number,
};
interface ProjectListProps {};

const IOSProjects: FC = () => {
  const swift = 'devicon-swift-plain';

  return (
    <Container>
      <ProjectList>
        <ProjectCard
          bio='Beverage pour measurement tool on WatchOS'
          title='Shot Clock'
          githubLink='https://github.com/jonnicwolf/pour_metronome'
          coverLink='https://res.cloudinary.com/dhah4xjvr/image/upload/v1722178672/fezz.dev/photos/photos/z265st6zxzzcvahg9sca.jpg'
          // @ts-ignore
          cover={EsperiCover}
          gifPath='https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/r46imtohg1igqqknoqgp'
          apis={[]}
          descriptions={['UTILITY', 'FRONT END']}
          devicons={[swift,]}
        />
      </ProjectList>

      <Background strokeColor={150} showControls={false} />
    </Container>
  );
};

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  height: 3500px;
  padding-top: 175px;

  @media screen and (max-width: 720px) {
    height: 2200px;
    padding-top: '100px';
  }
`;
const Background = styled(P5_LORENZ_ATTRACTOR).attrs<BackgroundProps>((props) => ({
  strokeColor: props.strokeColor,
}))`
  height: 100vh;
  z-index: 1;
`;
const ProjectList = styled.div<ProjectListProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 300px;
  position: absolute;
  z-index:3;
  transition: z-index 2s linear;
`;

export default IOSProjects;
