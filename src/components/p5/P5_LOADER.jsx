import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5_LOADER = () => {
  const sketch_ref = useRef();

  function sketch (p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth/12, p.windowHeight/12, p.WEBGL);
    };

    p.draw = () => {
      p.background(0,0,0,0); // Invisible background
      const sideLength = 100; // Change size here
      const height = (Math.sqrt(3) / 2) * sideLength;
      const halfBase = sideLength / 2;  

      // Define the coordinates of the equilateral triangle
      const [ x1,y1,x2,y2,x3,y3 ] = [ 0, height, halfBase, 0, sideLength, height, ]
      p.rotate(p.frameCount * 2.01);
      p.rotateY(p.frameCount * 0.05);
      p.triangle(x1,y1,x2,y2,x3,y3);
      p.stroke(255); // Black grid line color
      p.strokeWeight(5);
      p.noFill();
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, []);

  return (
    <div ref={sketch_ref} />
  );
};

export default P5_LOADER;
