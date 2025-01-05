import { FC, useEffect, useRef, useCallback, useState } from 'react';
import p5 from 'p5';

import styled from 'styled-components';

import ChaosTheoryForm from '../atoms/ChaosTheoryForm';

interface Props {
  strokeColor: number;
  showControls: boolean;
};

interface CTProps {
  showControls: boolean,
};

const P5_LORENZ_ATTRACTOR: FC<Props> = ({ strokeColor, showControls }) => {
  const [sigma, setSigma] = useState<number>(17);
  const [rho, setRho] = useState<number>(63);
  const [beta, setBeta] = useState<number>(9);
  const [delta, setDelta] = useState<number>(1);

  const vars = { sigma, rho, beta, delta };
  const setters = { setSigma, setRho, setBeta, setDelta };

  const sketch_ref = useRef();

  const sketch = useCallback((p: p5) => {
    const size: number = 20;
    const max: number = 20;
    let paths: p5.Vector[][] = [];
    let initialPositions: p5.Vector[] = [];

    for (let i = 0; i < size; i++) {
      paths.push([]);
      initialPositions.push(
        new p5.Vector(
          //@ts-ignore
          p.random(-100, 100),
          p.random(-100, 100),
          p.random(-100, 100)
        )
      );
    };

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
      p.background(0, 0, 0, 0);
      p.scale(3);
      p.strokeWeight(1);
      p.noFill();

      const rotationSpeed: number = 0.005;
      p.rotateX(p.frameCount * rotationSpeed * 0.3);
      p.rotateY(p.frameCount * rotationSpeed * 0.3);
      p.rotateZ(p.frameCount * rotationSpeed * 0.3);

      paths.forEach((points, idx) => {
        let x: number = initialPositions[idx].x;
        let y: number = initialPositions[idx].y;
        let z: number = initialPositions[idx].z;

        const dt: number = 0.005 * delta;
        const dx: number = (sigma * (y - x)) * dt;
        const dy: number = (x * (rho - z) - y) * dt;
        const dz: number = (x * y - beta * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        // @ts-ignore
        points.push(new p5.Vector(x, y, z));
        if (points.length > max) points.shift();

        p.beginShape();
        points.forEach((v) => {
          p.stroke(strokeColor);
          p.vertex(v.x, v.y, v.z);
        });
        p.endShape();

        initialPositions[idx].set(x, y, z);
      });
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  }, [strokeColor, sigma, rho, beta, delta]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <>
      {showControls && <ChaosTheoryForm vars={vars} setters={setters} />}
      {/* @ts-ignore */}
      <CT showControls={showControls} ref={sketch_ref} />
    </>
  );
};

const CT = styled.div<CTProps>`
  transform: translateY(${(props: { showControls: boolean }) =>
    props.showControls ? '20px' : 'none'});
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export default P5_LORENZ_ATTRACTOR;
