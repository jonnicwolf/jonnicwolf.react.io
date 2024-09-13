import { FC }from 'react';
// @ts-ignore
import styled from 'styled-components';

import ProjectCard from '../components/molecules/ProjectCard';
import EsperiCover from '../components/molecules/EsperiCover';

const Blender: FC = () => {
  const swift = 'devicon-blender-original';
  const react = 'devicon-react-plain'

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
            devicons={[swift, react]}
        />
      </ProjectList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 3500px;
  padding-top: 175px;

  @media screen and (max-width: 720px) {
    height: 2200px;
    padding-top: '100px';
  }
`;
const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 300px;
  position: absolute;
  z-index:3;
  transition: z-index 2s linear;
`;


export default Blender;
