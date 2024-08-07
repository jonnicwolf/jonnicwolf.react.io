import React, { useEffect, useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import p5 from 'p5';

import AfterImageControls from '../AfterImageControls';

const P5_LOADER = ({ strokeColor, darkMode }) => {
  const [mod, setMod] = useState(0.1);
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
      p.background(0,0,0,0);
      const sideLength = 200; // Change size here
      const height = (Math.sqrt(3) / 2) * sideLength;
      const halfBase = sideLength / 2;

      // Define the coordinates of the equilateral triangle
      const [ x1,y1,x2,y2,x3,y3 ] = [ 0, height, halfBase, 0, sideLength, height, ];
      p.frameRate(120);
      p.rotate(p.frameCount / mod);
      p.rotateY(p.frameCount * 0.05);
      p.triangle(x1,y1,x2,y2,x3,y3);
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
    <Container ref={sketch_ref}>
      <AfterImageControls darkMode={darkMode} getter={mod} setter={setMod} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default P5_LOADER;
