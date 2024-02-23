
import React, { useEffect, useRef } from 'react';
import p5 from "p5";


const P5_PLANE = () => {
  const sketch_ref = useRef();
  
  function sketch (p) {

    let cols, rows;
    let scl = 20; // scale of each grid square
    let w = 2000;
    let h = 1600;
    let flying = 0;
    let terrain = [];

    p.setup = () => {
      p.createCanvas(p.windowWidth, 320, p.WEBGL);
      cols = w / scl;
      rows = h / scl;
      terrain = Array.from(Array(cols), () => new Array(rows));
    };

    p.draw = () => {
      flying -= 0.03;
      let yoff = flying;
      for (let y = 9; y < rows; y++) {
        let xoff = 0;
        for (let x = 0; x < cols; x++) {
          terrain[x][y] =p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
          xoff += 0.2;
        };
        yoff += 0.2;
      };

      p.background(135, 206, 235); // sky blue background
      p.stroke(0); // grid line color
      p.noFill();
    
      p.translate(w / 2 - w / 2, h / 2 - h / 2);
      p.rotateX(p.PI / 2.5); // adjust the rotation
      p.translate(-w / 2, -h / 2);
      for (let y = 0; y < rows - 1; y++) {
        p.beginShape(p.SQUARE_STRIP);
        for (let x = 0; x < cols; x++) {
          // Calculate opacity based on row position
          let opacityTop = p.map(y, 0, rows / 4, 5, 255); // Fade from top
          let opacityBottom = p.map(y, rows - 1, rows * 3 / 4, 5, 255); // Fade from bottom
          let opacity = p.min(opacityTop, opacityBottom); // Use the lower opacity value

          p.stroke(255, 255, 255, opacity);

          p.vertex(x * scl, y * scl, terrain[x][y]);
          p.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        p.endShape();
      }
    };
  };

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, []);

  return (
    <div ref={sketch_ref} />
  );
};

export default P5_PLANE;
