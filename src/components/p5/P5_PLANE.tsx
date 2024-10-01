import { FC, useCallback, useEffect, useRef } from 'react';
// @ts-ignore
import styled from 'styled-components';
import p5 from "p5";

interface Props {
  strokeColor: number,
  showSun: boolean,
};

const P5_PLANE: FC<Props> = ({ strokeColor, showSun }) => {
  const sketch_ref = useRef();

  // @ts-ignore
  const sketch = useCallback((p) => {
    // const isMobile: boolean = window.innerWidth > 1200;
    let cols: number, rows: number;
    // let w: number = isMobile ? 2400 : 4800;
    let w: number = 2400;
    let h: number = 2400;
    let scl: number = 60; // scale of each grid square
    let waveSpeed: number = 0;
    let terrain: number[][] = [];
    let limiter: number = 0;
    let limitMet: boolean = false;

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
      cols = w / scl;
      rows = h / scl;
      terrain = Array.from(Array(cols), () => new Array(rows));
    };

    p.draw = () => {
      p.frameRate(120);
      waveSpeed -= 0.0041;
      let yoff = waveSpeed;

      for (let y = 1; y < rows; y++) {
        let xoff = 1;
        for (let x = 1; x < cols; x++) {
          let distance_x = Math.abs(x * scl);
          let distance_y = Math.abs(y * scl);
          let d = Math.sqrt(distance_x * distance_x + distance_y * distance_y); // Distance from the mouse to the vertex

          // Use distance to influence noise
          let adjustedNoise = p.map(d, 0, 550, 0.5, 1);
          terrain[x][y] = p.map(p.noise(xoff + 10, yoff - 1), 0, 1, -100, 100) * adjustedNoise;

          if (terrain.length === limiter) {
            limitMet = true;
            break;
          };

          xoff += 0.11;
        };
        yoff += 0.065;
      };

      p.background(0,0,0,0); // Invisible background
      p.blendMode(p.ADD); // Adds shimmer
      showSun ? p.fill('rgba(0, 0, 0, 0.4)') : p.noFill();
      p.translate(w / 2 - w / 2, h / 2 - h / 2);
      p.rotateX(p.PI / 2.5); // Adjust rotation here
      p.translate(-w / 2, -h / 2);
      for (let y = 0; y < rows - 1; y++) {
        p.beginShape(p.SQUARE_STRIP);
        for (let x = 0; x < cols; x++) {
          // Calculate opacity based on row position
          let opacityTop = p.map(y, 0, rows / 4, 5, 255); // Fade from top
          let opacityBottom = p.map(y, rows - 1, rows * 3 / 4, 5, 255); // Fade from bottom

          let opacity = p.min(opacityTop, opacityBottom);
          p.stroke(strokeColor, strokeColor, strokeColor, opacity);

          p.vertex(x * scl, y * scl, terrain[x][y]);
          p.vertex(x * scl, (y) * scl, terrain[x][y]);
        };
        p.endShape();
      };
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, 320);
  },[strokeColor, showSun]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <>
      {showSun && <Sun />}
      <Sketch ref={sketch_ref} />
    </>
  );
};

const Sketch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  @media only screen and (max-width: 720px) {
    transform: translateY(300px);
  }
  @media only screen and (max-height: 900px) {
    transform: translateY(270px);
  }
`;
const Sun = styled.div`
  background-image: radial-gradient(circle at 220px, orange 30%, rgba(0, 0, 0, 0) 60%);
  height: 390px;
  width: 300px;
  transform: rotate(90deg) translateX(65px);
  @media only screen and (max-width: 720px) {
    transform: rotate(90deg);
  }
`;

export default P5_PLANE;
