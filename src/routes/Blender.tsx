import { FC }from 'react';
// @ts-ignore
import styled from 'styled-components';

import BlenderCard from '../components/molecules/BlenderCard';

const Blender: FC = () => {
  const blender = 'devicon-blender-original';
  const react = 'devicon-react-plain'

  return (
    <Container>
      <ProjectList>
        <BlenderCard
          light={[0,0,0]}
          color='#ffffff'
          modelPath='/Portuguese_round.glb'
          intensity={1}
          orbitControls={true}
          title='Portuguese Diamond'
          descriptions={['LOW POLY', 'GLASS BSDF', '1MB', '.blend',]}
          devicons={[react, blender]}
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
  z-index: 1;
  transition: z-index 2s linear;
`;

export default Blender;
