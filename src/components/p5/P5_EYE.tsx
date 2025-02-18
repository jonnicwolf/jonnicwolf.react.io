import { FC, useEffect, useRef, useCallback } from 'react';
import p5 from 'p5';

interface Props {
  width: number,
  height: number,
  tracksMouse: boolean
};

const P5_EYE: FC<Props> = ({ width, height, tracksMouse }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p: p5) => {
    let angleA: number = 0;
    let angleB: number = 0;
    let angleC: number = 0;
    const lid_w: number = width / 12;

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
    };

    p.draw = () => {
      const irisX: number = p.map(tracksMouse ? p.mouseX : 50, 0, width, (width / 60)*-1, width / 60);
      const irisY: number = p.map(tracksMouse ? p.mouseY : 60, 0, height, (width / 24)*-1, height / 36);
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

      p.strokeWeight(1);
    };
  }, [width, height, tracksMouse]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);
  // @ts-ignore
  return <div ref={sketch_ref} />;
};

export default P5_EYE;
