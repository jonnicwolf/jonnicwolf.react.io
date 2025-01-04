import { FC, useEffect, useRef, useCallback } from 'react';
// @ts-ignore
import styled, { keyframes } from 'styled-components';
import p5 from 'p5';

interface Props {
  strokeColor: number,
  isMobile: boolean,
  w?: number,
  h?: number,
  blinkDelay?: number,
  background?: string,
  isRotated?: boolean,
};

interface WrapperProps {
  blinkDelay?: number,
  background?: string,
  isRotated?: boolean,
};

interface ContainerProps {
  isRotated?: boolean,
};

const P5_ANJA: FC<Props> = ({ strokeColor, isMobile, w, h, blinkDelay, background = '#000', isRotated }) => {
  const sketch_ref = useRef();

  // @ts-ignore
  const sketch = useCallback((p) => {
    const width: number = w || 150;
    const height: number = 800;

    const lid_w: number = width / 12;

    let angleA: number = 0;
    let angleB: number = 0;
    let angleC: number = 0;
    let reverse: number = 0;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
    };

    p.draw = () => {
      const irisMode: {x: number, y: number, mode: string} = isMobile
        ? {x: p.mouseX, y: p.mouseY, mode: 'mouse'}
        : {x: p.accelerationX, y: p.accelerationY, mode: 'tilt'};
      const {x,y} = irisMode;
      const irisX: number = p.map(x, 0, p.width, (p.width / 60) * -1, p.width / 60);
      const irisY: number = p.map(y, 0, p.height, (p.width / 24) * -1, p.height / 36);

      p.background(0, 0.9);

      p.push();
      p.stroke(strokeColor);
      p.strokeWeight(3);
      p.fill(209, 209, 209, 1);
      p.ellipse(0, 0, lid_w * 8, height, 4);
      p.pop();

      // Hexagon
      p.push();
      p.translate(irisX, irisY); // Translate to iris position
      p.rotateZ(reverse); // Rotate around the center of the hexagon
      p.fill('white');
      p.ellipse(0, 0, (p.width / 12) * 7.2, (p.width / 12) * 7.2, 6); // Hexagon
      p.fill('black');
      p.circle(0, 0, (p.width / 12) * 6);
      p.fill('white');
      p.circle(0, 0, (p.width / 12) * 2);
      p.pop();

      p.push();
      p.translate(irisX, irisY);

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
      p.rotateY(angleB); // Optionally rotate around Y axis
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
      p.pop();

      p.pop();

      angleA += 0.1;
      angleB -= 0.1;
      angleC += 0.1;
      reverse -= 0.06;

      p.strokeWeight(1);
    };
  }, [strokeColor, isMobile]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <Wrapper blinkDelay={blinkDelay} background={background} isRotated={isRotated}>
      <Container isRotated={isRotated}>
        {/* @ts-ignore */}
        <div ref={sketch_ref} />
      </Container>
    </Wrapper>
  );
};

const blink = keyframes`
  0% { width: 90px; }
  1% { width: 0; }
  4% { width: 95px; }
  100% { width: 100px; }
`;
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation-delay: ${props => props.blinkDelay}s;
  animation: ${blink} 10s infinite;
  transform: ${props => props.isRotated ? 'rotate(90deg)' : 'none'};
  background-color: #000;
`;
const Container = styled.div<ContainerProps>`
  width: 150px;
  height: 800px;
`;

export default P5_ANJA;
