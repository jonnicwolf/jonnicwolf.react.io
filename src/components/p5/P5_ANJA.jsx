import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import p5 from 'p5';

const P5_ANJA = ({ strokeColor }) => {
  const sketch_ref = useRef();
  const width = 150;
  const height = 800;
  const irisX = 0;
  const irisY = 0;

  const sketch = useCallback((p) => {
    let angleA = 0;
    let angleB = 0;
    let angleC= 0;
    let reverse = 0;
    const lid_w = width / 12;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
    };

    p.draw = () => {
      p.background(0, 0.9);

      p.push();
      p.noStroke();
      p.fill('black')
      p.ellipse(0, 0, lid_w * 8, height, 4);
      p.pop();

      p.push();
      p.fill('white');
      p.rotateZ(reverse);
      p.ellipse(irisX, irisY, (p.width/12)*7.2, (p.width/12)*7.2, 6); // Hexagon
      p.fill('black');
      p.circle(irisX, irisY, (p.width/12)*6);
      p.fill('white');
      p.circle(irisX, irisY, (p.width/12)*2);
      p.pop();

      p.push();
      

      // Moving Triangle 1
      p.push();
      p.noFill();
      p.rotateZ(angleA);
      p.stroke('white');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      // Moving Triangle 2
      p.push();
      p.noFill();
      p.rotateZ(angleB);
      p.rotateY(angleB);
      p.stroke('red');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      // Moving Triangle 3
      p.push();
      p.noFill();
      p.rotateZ(angleC);
      p.rotateX(angleC);
      p.stroke('grey');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.strokeWeight(2);
      p.pop();

      p.pop();

      angleA += 0.1;
      angleB -= 0.1;
      angleC += 0.1;
      reverse -= 0.01;

      p.strokeWeight(1);
    };
  });

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return(
    <Wrapper>
      <Container ref={sketch_ref} />
    </Wrapper>
  );
};

const blink = keyframes`
  0% { width: 100px; }
  1% { width: 0; }
  4% { width: 100px; }
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
