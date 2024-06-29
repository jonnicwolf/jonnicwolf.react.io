import React, { useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import p5 from 'p5';

const P5_ANJA = ({ strokeColor }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    let bolts = [];
    let triangles = [];
    let lightningForks = [];

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      p.frameRate(30);
    };

    p.draw = () => {
      p.background(0, 0.9);

    };
  }, [strokeColor]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <Wrapper>
      <Container ref={sketch_ref} />
    </Wrapper>
  );
};

const blink = keyframes`
  0% { width: 90px; }
  1% { width: 0; }
  4% { width: 95px; }
  100% { width: 100px; }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: ${blink} 7s infinite;
  background-color: #000;
`;
const Container = styled.div`
  width: 150px;
  height: 800px;
`;

export default P5_ANJA;
