import { FC, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Canvas, useLoader, } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import {
  Environment,
  OrbitControls,
  useGLTF,
} from '@react-three/drei';

import HoverCover from './HoverCover';
import { Vector3, } from 'three';

interface Props {
  light: Vector3,
  position?: Vector3,
  color: string,
  modelPath: string,
  intensity: number,
  orbitControls: boolean,
  title: string,
  githubLink?: string,
  apis?: string[],
  descriptions: string[],
  devicons: string[],
  hdri: string,
};

const BlenderCard: FC<Props> = ({
  light,
  position,
  color,
  modelPath,
  intensity,
  orbitControls,
  title,
  descriptions,
  devicons,
  hdri,
 }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { scene } = useGLTF(modelPath);
  const background = useLoader(RGBELoader, hdri);

  function handleShowMore (): void {
    setShowMore(!showMore);
  };

  return (
    <Container>
      {showMore ?
      <Canvas onMouseLeave={handleShowMore} camera={{position: position}}>
          {background && <Environment background={true} map={background} />}
          <directionalLight intensity={intensity} color={color} position={light} />
          <primitive
            object={scene}
            scale={1}
            position={[0,0,-100]}
            rotation={[0,-100,0]}
          />
          {orbitControls && 
            <OrbitControls
              autoRotate
              //autoRotateSpeed={20}
              // enableRotate={false}
              enableZoom={false}
              />}
        </Canvas>
      : <HoverCover
          onMouseEnter={handleShowMore}
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
