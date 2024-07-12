import React, { useEffect, useRef, useCallback, useState } from 'react';
import p5 from 'p5';
import styled from 'styled-components';

import ChaosTheoryForm from '../ChaosTheoryForm';

const P5_LORENZ_ATTRACTOR = ({ strokeColor }) => {
  const [vars, setVars] = useState({
    sigma: 10,
    rho: 28,
    beta: 8/3,
  });

  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    let x = 10;
    let y = 0;
    let z = 1;
    let points = [];
    let sliderSigma;
    let sliderRho;
    let sliderBeta;

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      // sliderSigma = p.createSlider(0, 20, 10, 0);
      // sliderRho =   p.createSlider(0, 100, 28, 0);
      // sliderBeta =  p.createSlider(0, 10, 8/3, 0);
    };

    p.draw = () => {
      p.background(0, 0, 0, 0);

      // sliderSigma.position(30, 100);
      // sliderRho.position(30, 150);
      // sliderBeta.position(30, 200);

      // p.push();
      // p.fill(100);
      // p.noStroke();
      // p.textSize(16);
      // p.text('Sigma', 30, 90);
      // p.text('Rho', 30, 140);
      // p.text('Beta', 30, 190);
      // p.pop();

      let dt = 0.005;
      let dx = (sliderSigma.value() * (y - x)) * dt;
      let dy = (x * (sliderRho.value() - z) - y) * dt;
      let dz = (x * y - sliderBeta.value() * z) * dt;

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
  }, [strokeColor]
); 

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <div ref={sketch_ref}>
      <ChaosTheoryForm vars={vars} varsSetter={setVars} />
    </div>
  );
};

const Slider = styled.input`
  -webkit-appearance: none;
  width: 30%;
  height: 10px;
  color: black;
  background: black;

  &::-moz-range-thumb {
      background: blue;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      cursor: pointer;
    }
`;

export default P5_LORENZ_ATTRACTOR;
