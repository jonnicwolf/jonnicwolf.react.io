import React, { useEffect, useRef, useCallback } from 'react';
import p5 from 'p5';

const P5_LORENZ_ATTRACTOR = ({ strokeColor }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    let x = 10;
    let y = 0;
    let z = 1;
    let sigma = 21;
    let rho = 28;
    let beta = 8.0 / 3.0;
    let points = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
      p.background(0, 0, 0, 0);
      let dt = 0.005;
      let dx = (sigma * (y - x)) * dt;
      let dy = (x * (rho - z) - y) * dt;
      let dz = (x * y - beta * z) * dt;
      x += dx;
      y += dy;
      z += dz;
      points.push(new p5.Vector(x, y, z));
      p.scale(12);
      p.strokeWeight(3);
      p.translate(0, 0);
      p.noFill();
      p.beginShape();
      points.forEach(v => {
        p.stroke(strokeColor);
        p.vertex(v.x, v.y, v.z);
      });
      if (points.length > 3500) {
        points.shift();
      }
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
  }, [sketch]); // Memoize sketch

  return <div ref={sketch_ref} />;
};

export default P5_LORENZ_ATTRACTOR;
