import React, { useEffect, useRef, useCallback, useState } from 'react';
import p5 from 'p5';
import styled from 'styled-components';

import ChaosTheoryForm from '../ChaosTheoryForm';

const P5_LORENZ_ATTRACTOR = ({ strokeColor, darkMode, showControls }) => {
  const [sigma, setSigma] = useState(17);
  const [rho, setRho] = useState(63);
  const [beta, setBeta] = useState(9);
  const [delta, setDelta] = useState(1);

  const vars = {sigma, rho, beta, delta};
  const setters = {setSigma, setRho, setBeta, setDelta};

  const sketch_ref = useRef();
  const sketch = useCallback((p) => {
    let x = 10;
    let y = 0;
    let z = 1;
    let points = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
      p.background(0, 0, 0, 0);

      let dt = 0.005 * delta;
      let dx = (sigma * (y - x)) * dt;
      let dy = (x * (rho - z) - y) * dt;
      let dz = (x * y - beta * z) * dt;

      x += dx;
      y += dy;
      z += dz;
      points.push(new p5.Vector(x, y, z));

      p.scale(12);
      p.strokeWeight(3);
      p.stroke(strokeColor);
      p.translate(0, 0);
      p.noFill();
      p.beginShape();
      points.forEach(v => {
        p.stroke(strokeColor);
        p.vertex(v.x, v.y, v.z);
      });

      if (points.length > 3500) points.shift();

      const rotationSpeed = 0.0019;
      p.rotateX(p.frameCount * rotationSpeed * 0.7);
      p.rotateY(p.frameCount * rotationSpeed);
      p.rotateZ(p.frameCount * rotationSpeed * 0.3);

      p.endShape();
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  }, [strokeColor, sigma, rho, beta, delta]
); 

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <CT ref={sketch_ref}>
      {showControls && <ChaosTheoryForm vars={vars} setters={setters} darkMode={darkMode} />}
    </CT>
  );
};

const CT = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default P5_LORENZ_ATTRACTOR;
