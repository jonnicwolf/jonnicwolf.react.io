import { FC, useEffect, useRef, useCallback, useContext, MutableRefObject } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';
import p5 from 'p5';

interface Props {
  strokeColor: number,
};

const P5_GEOSTORM: FC<Props> = ({ strokeColor }) => {
  const { darkmode } = useContext(DarkmodeContext);
  // const sketch_ref: MutableRefObject<HTMLDivElement | null | undefined> = useRef();
  const sketch_ref = useRef();

  // @ts-ignore
  const sketch = useCallback((p) => {
    function drawMountains() {
      // Draw mountain bases
      p.fill(100, 100, 150, 150); // Add opacity to the mountains
      p.noStroke();

      // Mountain 1
      p.beginShape();
      p.vertex(0, p.height);
      p.vertex(100, 150);
      p.vertex(200, p.height);
      p.endShape(p.CLOSE);

      // Mountain 2
      p.beginShape();
      p.vertex(150, p.height);
      p.vertex(300, 100);
      p.vertex(450, p.height);
      p.endShape(p.CLOSE);

      // Mountain 3
      p.beginShape();
      p.vertex(300, p.height);
      p.vertex(400, 200);
      p.vertex(500, p.height);
      p.endShape(p.CLOSE);

      // Draw mountain tops
      p.fill(255, 255, 255, 200); // White color with some opacity

      // Top of Mountain 1
      p.beginShape();
      p.vertex(95, 175);
      p.vertex(100, 150);
      p.vertex(105, 175);
      p.endShape(p.CLOSE);

      // Top of Mountain 2
      p.beginShape();
      p.vertex(293, 125);
      p.vertex(300, 100);
      p.vertex(307, 125);
      p.endShape(p.CLOSE);

      // Top of Mountain 3
      p.beginShape();
      p.vertex(395, 225);
      p.vertex(400, 200);
      p.vertex(405, 225);
      p.endShape(p.CLOSE);
    };

    class ForkedBolt {
      start: p5.Vector;
      thickness: number;
      color: p5.Color;
      segments: p5.Vector[];

      constructor(x: number, y: number, thickness: number, color: p5.Color) {
        this.start = p.createVector(x, y);
        this.thickness = thickness;
        this.color = color;
        this.segments = [];
        this.segments.push(this.start.copy());
      };

      update(): void {
        let last = this.segments[this.segments.length - 1];
        let next = last.copy();
        next.x += p.random(-50, 30);
        next.y += p.random(1, 100);
        this.segments.push(next);
      };
    
      show(): void {
        p.strokeWeight(this.thickness);
        p.stroke(this.color);
        for (let i = 0; i < this.segments.length - 1; i++) {
          let start = this.segments[i];
          let end = this.segments[i + 1];
          p.line(start.x, start.y, end.x, end.y);
        };
      };
  
      offscreen(): boolean {
        let last = this.segments[this.segments.length - 1];
        return last.y > p.random((p.height/12)*4, (p.height/12)*8);
      };
    };

    let triangles: {x: number, y: number, speed: number}[] = [];
    let lightningForks: {x: number, y: number, length: number}[] = [];
    let bolts: ForkedBolt[] = [];
    const background = !darkmode ? '#5c5c5b' : '#fffcf5';

    p.setup = () => {
      p.createCanvas(p.windowWidth / 12 * 10, p.windowHeight / 12 * 6);
      p.frameRate(60);

      triangles = [];
      for (let i = 0; i < 100; i++) {
        let triangle: {x: number, y: number, speed: number} = {
          x: p.random(-p.width, p.width),
          y: p.random(-p.windowWidth, p.windowWidth),
          speed: p.random(8, 20) 
        };
        triangles.push(triangle);
      };

      lightningForks = [];
      for (let i = 0; i < 2; i++) {
        let fork: {x: number, y: number, length: number} = {
          x: p.random(p.width),
          y: p.random(p.height, 0),
          length: p.random(1, 10)
        };
        lightningForks.push(fork);
      };
    };

    p.draw = () => {
      p.background(background);
      drawMountains();

      for (let i = bolts.length - 1; i >= 0; i--) {
        bolts[i].update();
        bolts[i].show();
        if (bolts[i].offscreen()) bolts.splice(i, 1);
      };

      // Draw the falling triangles
      for (let i = 0; i < triangles.length; i++) {
        let t = triangles[i];

        // Update positions
        t.x -= t.speed;
        t.y += t.speed;

        // Reset position when the triangle moves off the canvas
        if (t.x < -200 || t.y > p.height + 2) {
          t.x = p.random(p.width, p.width + 1);
          t.y = p.random(-1600, 600);
        };

        p.fill(150, 150, 150, 150);
        p.noStroke();
        p.beginShape();

        p.vertex(t.x, t.y);
        p.vertex(t.x - 2, t.y + 10);
        p.vertex(t.x + 5, t.y + 10);
        p.endShape(p.CLOSE);
      };

      // Add a new bolt randomly
      if (p.random(1) < 0.005) {
        let bolt = new ForkedBolt(p.random(p.width), 0, p.random(2, 5), p.color(strokeColor));
        p.background(!darkmode ? '#5c5c5b' : '#fffcf5');
        bolts.push(bolt);
      };
    };
  }, [strokeColor, darkmode]);

  useEffect(() => {
    // @ts-ignore
    const p5Canvas = new p5(sketch, sketch_ref);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <Container>
      {/* @ts-ignore */}
      <div ref={sketch_ref} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
`;

export default P5_GEOSTORM;
