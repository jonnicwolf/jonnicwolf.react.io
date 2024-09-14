import { FC, } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Canvas, } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
} from '@react-three/drei';

interface Props {
  light: number[],
  color: string,
  modelPath: string,
  intensity: number,
  orbitControls: boolean,
};

const BlenderCard: FC<Props> = ({ light, color, modelPath, intensity, orbitControls }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Container>
      <Canvas>
        <directionalLight intensity={intensity} color={color} />

        <primitive
          object={scene}
          scale={0.1}
          position={light}
          rotation={light}
        />

        {orbitControls && <OrbitControls />}
      </Canvas>
      
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid red;
`;

export default BlenderCard;
