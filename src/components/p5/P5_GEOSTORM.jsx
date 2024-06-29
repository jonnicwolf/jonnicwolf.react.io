import React, { useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import p5 from 'p5';

const P5_ANJA = ({ strokeColor }) => {
  const sketch_ref = useRef();

  function drawMountains() {
    // Draw mountain bases
    p. fill(100, 100, 150, 150); // Add opacity to the mountains
    p. noStroke();

    // Mountain 1
    p. beginShape();
    p. vertex(0, height);
    p. vertex(100, 150);
    p. vertex(200, height);
    p. endShape(CLOSE);

    // Mountain 2
    p. beginShape();
    p. vertex(150, height);
    p. vertex(300, 100);
    p. vertex(450, height);
    p. endShape(CLOSE);

    // Mountain 3
    p. beginShape();
    p. vertex(300, height);
    p. vertex(400, 200);
    p. vertex(500, height);
    p. endShape(CLOSE);

    // Draw mountain tops
    p. fill(255, 255, 255, 200); // White color with some opacity

    // Top of Mountain 1
    p. beginShape();
    p. vertex(90, 175);
    p. vertex(100, 150);
    p. vertex(110, 175);
    p. endShape(CLOSE);

    // Top of Mountain 2
    p. beginShape();
    p. vertex(287, 125);
    p. vertex(300, 100);
    p. vertex(313, 125);
    p. endShape(CLOSE);

    // Top of Mountain 3
    p. beginShape();
    p. vertex(387, 225);
    p. vertex(400, 200);
    p. vertex(413, 225);
    p. endShape(CLOSE);
  };

  const sketch = useCallback((p) => {
    let bolts = [];
    let triangles = [];
    let lightningForks = [];

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      p.frameRate(30);

      for (let i = 0; i < 100; i++) {
        let triangle = {
          x: random(width, width + 100),
          y: random(-600, 600),
          speed: random(8, 20) // Random speed
        };
        triangles.push(triangle);
      };

      for (let i = 0; i < 3; i++) {
        let fork = {
          x: random(width),
          y: -height / 2,
          length: random(20, 80)
        };
        lightningForks.push(fork);
      };
    };

    p.draw = () => {
      p.background(0, 0.9);
      drawMountains();
      

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
