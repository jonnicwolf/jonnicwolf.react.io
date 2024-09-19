import { FC }from 'react';
// @ts-ignore
import styled from 'styled-components';

import BlenderCard from '../components/molecules/BlenderCard';
import { Vector3 } from 'three';

const Blender: FC = () => {
  const blender = 'devicon-blender-original';
  const react = 'devicon-react-plain';
  const hdri = '/victoria_sunset_4k.hdr';
  const light = new Vector3(0,-30,-50);
  
  const modelPath = '/Portuguese_round.glb';

  return (
    <Container>
      <ProjectList>
        <BlenderCard
          light={light}
          color='#ffffff'
          modelPath={modelPath}
          intensity={1}
          orbitControls={true}
          title='Portuguese Diamond'
          descriptions={['LOW POLY', 'GLASS BSDF', '1MB', '.blend']}
          devicons={[react, blender]}
          hdri={hdri}
        />
      </ProjectList>''
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
