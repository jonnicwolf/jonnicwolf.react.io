import { FC, useEffect, useRef, useCallback, useState } from 'react';

import styled from 'styled-components';
import p5 from 'p5';

import AfterImageControls from '../atoms/AfterImageControls';

interface Props {
  strokeColor: number,
  controls: boolean,
};

const P5_LOADER: FC<Props> = ({ strokeColor, controls }) => {
  // const [mod, setMod] = useState<number>(0.1);
  const [mod, setMod] = useState<number>(1);
  const sketch_ref = useRef();

  const sketch = useCallback((p: p5) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
      p.background(0,0,0,0);
      const sideLength: number = 200; // Change size here
      const height: number = (Math.sqrt(3) / 3) * sideLength;
      const halfBase: number = sideLength / 3;

      // Define the coordinates of the equilateral triangle
      const [ x1,y1,x2,y2,x3,y3 ] = [ 0, height, halfBase, 0, sideLength, height, ];
      const elementMap = () => [ x1,y1,x2,y2,x3,y3 ].map((val, i) => val + p.noise(p.frameCount * 0.05) + i * 80) as [number,number,number,number, number, number];
      
      p.frameRate(120);
      p.rotate(p.frameCount / mod);
      p.rotateY(p.frameCount * 0.05);
      p.triangle(x1,y1,x2,y2,x3,y3);
      p.triangle(...elementMap());
      p.stroke(strokeColor); // Black grid line color
      p.strokeWeight(5);
      p.noFill();
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  },[strokeColor, mod]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    // @ts-ignore
    <Container ref={sketch_ref}>
      {controls && <AfterImageControls mod={mod} modSetter={setMod} />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default P5_LOADER;
