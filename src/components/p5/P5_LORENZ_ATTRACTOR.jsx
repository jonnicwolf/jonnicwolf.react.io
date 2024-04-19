import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5_LORENZ_ATTRACTOR = ({ strokeColor }) => {
  const sketch_ref = useRef();

  function sketch (p) {
    // Initial coordinates where the attractor will start
    let x = 10.0001;
    let y = 10;
    let z = 0;

    // Params for the equations
    let a = 10; // Sigma
    let b = 28; // Rho
    let c = 8.0 / 3.0; //Beta
  
    let points = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };
  
    p.draw = () => {
      p.background(0,0,0,0);

      let dt = 0.005; // Change in distance between points over time. A low number makes a smoother shape
      // Change in x,y,z over time
      let dx = (a * (y - x)) * dt;
      let dy = (x * (b - z) - y) * dt;
      let dz = (x * y - c * z) * dt;
      // Plotted coordinates 
      x = x + dx;
      y = y + dy;
      z = z + dz;
      // Plotted coordinates are stored as an array of objects
      points.push(new p5.Vector(x, y, z));
  
      p.scale(12);
      p.strokeWeight(3);
      p.translate(0, 0)
      p.noFill();
  
      p.beginShape();
  
      for (let v of points) {
        p.stroke(strokeColor);
        p.vertex(v.x, v.y, v.z);
        if (points.length > 3500) {
          points.shift()
        };
      };
  
      const rotationSpeed = 0.0019;
      const angleX = p.frameCount * rotationSpeed * 0.7;
      const angleY = p.frameCount * rotationSpeed;
      const angleZ = p.frameCount * rotationSpeed * 0.3 
      p.rotateX(angleX);
      p.rotateY(angleY);
      p.rotateZ(angleZ);
  
      p.endShape();
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  },[]);

  return (
    <div ref={sketch_ref} />
  );
};

export default P5_LORENZ_ATTRACTOR;
