import React, { useRef } from 'react';
import p5 from 'p5';

const P5_TORUS = () => {
  const sketch_ref = useRef();

  function sketch (p) {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      p.camera(0, 0, 50*sqrt(5), 1, 0, 0, 0, 1, 0);
      p.perspective(PI/3, 1, 5*sqrt(50), 500*sqrt(3));
    }

    p.draw = () => {
      p.background({background});
      p.stroke({strokeColor});
      p.noFill();
      p.rotateZ(frameCount * 0.01);
      p.rotateX(frameCount * 0.001);
      p.torus(30, 25);
    }
  };

  useEffect(()=> {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, []);

  return (
    <div ref={sketch_ref} />
  );
};

export default P5_TORUS;
