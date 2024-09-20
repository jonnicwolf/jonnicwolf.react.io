// import { FC, useEffect, useRef, useCallback, useState } from 'react';
// import p5 from 'p5';
// // @ts-ignore
// import styled from 'styled-components';

// import ChaosTheoryForm from '../atoms/ChaosTheoryForm';

// interface Props {
//   strokeColor: string,
//   showControls: boolean,
// };

// const P5_LORENZ_ATTRACTOR: FC<Props> = ({ strokeColor, showControls }) => {
//   const [sigma, setSigma] = useState<number>(17);
//   const [rho, setRho] = useState<number>(63);
//   const [beta, setBeta] = useState<number>(9);
//   const [delta, setDelta] = useState<number>(1);

//   const vars = {sigma, rho, beta, delta};
//   const setters = {setSigma, setRho, setBeta, setDelta};

//   const sketch_ref = useRef();
//   // @ts-ignore
//   const sketch = useCallback((p) => {
//     let x: number = -1;
//     let y: number = 0;
//     let z: number = -100;
//     let points: p5.Vector[] = [];

//     p.setup = () => {
//       p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
//     };

//     p.draw = () => {
//       p.background(0, 0, 0, 0);

//       let dt: number = 0.005 * delta;
//       let dx: number = (sigma * (y - x)) * dt;
//       let dy: number = (x * (rho - z) - y) * dt;
//       let dz: number = (x * y - beta * z) * dt;

//       x += dx;
//       y += dy;
//       z += dz;
//       // @ts-ignore
//       points.push(new p5.Vector(x, y, z));

//       p.scale(12);
//       p.strokeWeight(3);
//       p.stroke(strokeColor);
//       p.translate(0, 0);
//       p.noFill();
//       p.beginShape();
//       points.forEach(v => {
//         p.stroke(strokeColor);
//         p.vertex(v.x, v.y, v.z);
//       });

//       if (points.length > 1500) points.shift();

//       const rotationSpeed: number = 0.0019;
//       p.rotateX(p.frameCount * rotationSpeed * 0.7);
//       p.rotateY(p.frameCount * rotationSpeed);
//       p.rotateZ(p.frameCount * rotationSpeed * 0.3);

//       p.endShape();
//     };

//     p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
//   }, [strokeColor, sigma, rho, beta, delta]
// ); 

//   useEffect(() => {
//     const p5Canvas = new p5(sketch, sketch_ref.current);
//     return () => p5Canvas.remove();
//   }, [sketch]);

//   return (
//     <>
//       {showControls && <ChaosTheoryForm vars={vars} setters={setters} />}
//       <CT ref={sketch_ref} />
//     </>
//   );
// };

// const CT = styled.div`
//   transform: translateY(${(props: {showControls: boolean}) => props.showControls ? '20px' : 'none' });
//   position: fixed;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   z-index: 1;
// `;

// export default P5_LORENZ_ATTRACTOR;

import { FC, useEffect, useRef, useCallback, useState } from 'react';
import p5 from 'p5';
// @ts-ignore
import styled from 'styled-components';

import ChaosTheoryForm from '../atoms/ChaosTheoryForm';

interface Props {
  strokeColor: string;
  showControls: boolean;
};

const P5_LORENZ_ATTRACTOR: FC<Props> = ({ strokeColor, showControls }) => {
  const [sigma, setSigma] = useState<number>(17);
  const [rho, setRho] = useState<number>(63);
  const [beta, setBeta] = useState<number>(9);
  const [delta, setDelta] = useState<number>(1);

  const vars = { sigma, rho, beta, delta };
  const setters = { setSigma, setRho, setBeta, setDelta };

  const sketch_ref = useRef();
  //@ts-ignore
  const sketch = useCallback((p) => {
    const size: number = 20;
    const max: number = 30;
    let paths: p5.Vector[][] = [];
    let initialPositions: p5.Vector[] = [];

    for (let i = 0; i < size; i++) {
      paths.push([]);
      initialPositions.push(
        new p5.Vector(
          //@ts-ignore
          p.random(-2, 2),
          p.random(-3, 2),
          p.random(-2, 4)
        )
      );
    };

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    };

    p.draw = () => {
      p.background(0, 0, 0, 0);
      p.scale(12);
      p.strokeWeight(1.5);
      p.noFill();

      const rotationSpeed: number = 0.0019;
      p.rotateX(p.frameCount * rotationSpeed * 0.7);
      p.rotateY(p.frameCount * rotationSpeed);
      p.rotateZ(p.frameCount * rotationSpeed * 0.3);

      paths.forEach((points, idx) => {
        let { x, y, z } = initialPositions[idx];

        const dt: number = 0.005 * delta;
        const dx: number = (sigma * (y - x)) * dt;
        const dy: number = (x * (rho - z) - y) * dt;
        const dz: number = (x * y - beta * z) * dt;

        x += dx;
        y += dy;
        z += dz;

        //@ts-ignore
        points.push(new p5.Vector(x, y, z));
        if (points.length > max) points.shift();

        p.beginShape();
        points.forEach((v) => {
          p.stroke(strokeColor);
          p.vertex(v.x, v.y, v.z);
        });
        p.endShape();

        initialPositions[idx].set(x, y, z);
      });
    };

    p.windowResized = () => p.resizeCanvas(p.windowWidth, p.windowHeight);
  }, [strokeColor, sigma, rho, beta, delta]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <>
      {showControls && <ChaosTheoryForm vars={vars} setters={setters} />}
      <CT ref={sketch_ref} />
    </>
  );
};

const CT = styled.div`
  transform: translateY(${(props: { showControls: boolean }) =>
    props.showControls ? '20px' : 'none'});
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
`;

export default P5_LORENZ_ATTRACTOR;
