import { FC, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Canvas, } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
} from '@react-three/drei';

import HoverCover from './HoverCover';

interface Props {
  light: number[],
  color: string,
  modelPath: string,
  intensity: number,
  orbitControls: boolean,
  title: string,
  githubLink?: string,
  apis?: string[],
  descriptions: string[],
  devicons: string[],
};

const BlenderCard: FC<Props> = ({
  light,
  color,
  modelPath,
  intensity,
  orbitControls,
  title,
  descriptions,
  devicons,
 }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { scene } = useGLTF(modelPath);

  
  return (
    <Container>
      {showMore
      ?  <Canvas>
          <directionalLight intensity={intensity} color={color} />

          <primitive
            object={scene}
            scale={0.1}
            position={light}
            rotation={light}
          />

          {orbitControls && <OrbitControls />}
        </Canvas>
      : <HoverCover
          title={title}
          descriptions={descriptions}
          devicons={devicons}
        />
       }
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 800px;
`;

export default BlenderCard;
