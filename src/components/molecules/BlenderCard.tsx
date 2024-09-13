import { FC, ReactElement } from 'react';
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
  model: ,
  intensity: number,
  orbitControls: boolean,
};

const BlenderCard: FC<Props> = ({ light, color, model, intensity, orbitControls }) => {
  const { scene } from useGLTF(modelPath)
  return (
    <Container>
      <Canvas>
        <directionalLight position={light} color={color} />

      </Canvas>
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 800px;
`;

export default BlenderCard;
