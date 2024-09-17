import { FC, useState } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { Canvas, useLoader } from '@react-three/fiber';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import {
  Environment,
  OrbitControls,
  useGLTF,
} from '@react-three/drei';

import HoverCover from './HoverCover';
import { Texture } from 'three';

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
  hdri?: string,
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
  hdri,
 }) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const { scene } = useGLTF(modelPath);
  const background = hdri ? useLoader(RGBELoader, hdri) as Texture : null

  function handleShowMore (): void {
    setShowMore(!showMore);
  };

  return (
    <Container>
      {showMore
      ?  <Canvas onMouseLeave={handleShowMore}>
          {background && <Environment background={true} map={background} />}
          <directionalLight intensity={intensity} color={color} />
          <primitive
            object={scene}
            scale={1}
            position={light}
            rotation={light}
          />
          {orbitControls && <OrbitControls />}
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
  border: 1px solid red;
`;

export default BlenderCard;
