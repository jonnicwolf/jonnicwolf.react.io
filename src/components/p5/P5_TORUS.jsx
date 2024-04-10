import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5_TORUS = ({ background, strokeColor }) => {
  const sketch_ref = useRef();

  function sketch (p) {
    p.setup = () => {
      p.createCanvas (
        p.windowWidth,
        p.windowHeight,
        p.WEBGL );

      p.camera (
        0,
        0,
        50 * p.sqrt(5),
        1,
        0,
        0,
        0,
        1,
        0 );

      p.perspective (
        p.PI/3,
        1,
        5 * p.sqrt(50),
        500 * p.sqrt(3) );
      p.colorMode(p.RGBA)
    };

    p.draw = () => {
      p.background(background,0);
      p.stroke(strokeColor);
      p.noFill();

      const rotationSpeed = 0.005;
      const angleX = p.frameCount * rotationSpeed * 0.7;
      const angleY = p.frameCount * rotationSpeed;
      const angleZ = p.frameCount * rotationSpeed * 0.3;
      const torusRotation = p.frameCount * rotationSpeed * 2;

      p.rotateX(angleX);
      p.rotateY(angleY);
      p.rotateZ(angleZ);
      p.torus(30, 25);

      const translateAmount = 100;
      const torusX = translateAmount * p.cos(torusRotation);
      const torusY = translateAmount * p.sin(torusRotation);
      const torusZ = translateAmount * p.tan(torusRotation);
      p.translate(torusX, torusY, torusZ);
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
