import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5_TORUS = ({ background, strokeColor }) => {
  const sketch_ref = useRef();

  function sketch (p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      p.camera(0, 0, 50 * p.sqrt(5), 1, 0, 0, 0, 1, 0);
      p.perspective(p.PI/3, 1, 5 * p.sqrt(50), 500 * p.sqrt(3));
    };

    p.draw = () => {
      p.background(background);
      p.stroke(strokeColor);
      p.noFill();
      p.rotateZ(p.frameCount * 0.001);
      p.rotateX(p.frameCount * 0.001);
      p.torus(30, 25);
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth,p.windowHeight);
  };

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
    // eslint-disable-next-line
  }, []);

  return (
    <div ref={sketch_ref} />
  );
};

export default P5_TORUS;
