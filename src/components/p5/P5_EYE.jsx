import React, { useEffect, useRef, useCallback } from 'react';
import p5 from 'p5';

const P5_EYE = ({ width, height, tracksMouse }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    let angleA = 0;
    let angleB = 0;
    let angleC = 0;
    //let reverse = 0;
    const lid_w = width / 12;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
    };

    p.draw = () => {
      const irisX = p.map(tracksMouse ? p.mouseX : 50, 0, width, (width / 60)*-1, p.width / 60);
      const irisY = p.map(tracksMouse ? p.mouseY : 60, 0, height, (width / 24)*-1, p.height / 36);
      p.background(0, 0.9);

      p.push();
      p.noStroke();
      p.fill('black');
      p.ellipse(0, 0, lid_w * 8, height, 4);
      p.pop();

      p.push();
      p.fill('#b25385');
      p.ellipse(irisX, irisY, (width/12)*8, (width/12)*8, 6); // Hexagon
      p.fill('#699897');
      p.circle(irisX, irisY, (width/12)*6);
      p.fill('gold');
      p.circle(irisX, irisY, (width/12)*2);
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
      p.rotateY(angleB);
      p.stroke('#db8aae');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.pop();

      // Moving Triangle 3
      p.push();
      p.noFill();
      p.rotateZ(angleC);
      p.rotateX(angleC);
      p.stroke('#db8aae');
      p.strokeWeight(2);
      p.triangle(15, -10, 0, 15, -15, -10);
      p.strokeWeight(2);
      p.pop();

      p.pop();

      angleA += 0.1;
      angleB -= 0.1;
      angleC += 0.1;
      //reverse -= 0.01;

      p.strokeWeight(1);
    };
  }, [width, height, tracksMouse]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return <div ref={sketch_ref} />;
};

export default P5_EYE;
