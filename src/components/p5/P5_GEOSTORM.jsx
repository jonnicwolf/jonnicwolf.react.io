import React, { useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import p5 from 'p5';

const P5_GEOSTORM = ({ strokeColor, darkMode }) => {
  const sketch_ref = useRef();

  const sketch = useCallback((p) => {
    function drawMountains() {
      // Draw mountain bases
      p.fill(100, 100, 150, 150); // Add opacity to the mountains
      p. noStroke();
  
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
      p.vertex(90, 175);
      p.vertex(100, 150);
      p.vertex(110, 175);
      p.endShape(p.CLOSE);
  
      // Top of Mountain 2
      p.beginShape();
      p.vertex(287, 125);
      p.vertex(300, 100);
      p.vertex(313, 125);
      p.endShape(p.CLOSE);
  
      // Top of Mountain 3
      p.beginShape();
      p.vertex(387, 225);
      p.vertex(400, 200);
      p.vertex(413, 225);
      p.endShape(p.CLOSE);
    };
  
    class ForkedBolt {
      constructor(x, y, thickness, color) {
        this.start = p.createVector(x, y);
        this.thickness = thickness;
        this.color = color;
        this.segments = [];
        this.segments.push(this.start.copy());
      };
  
      update() {
        let last = this.segments[this.segments.length - 1];
        let next = last.copy();
        next.x += p.random(-30, 30);
        next.y += p.random(10, 30);
        this.segments.push(next);
      };
    
      show() {
        p.strokeWeight(this.thickness);
        p.stroke(this.color);
        for (let i = 0; i < this.segments.length - 1; i++) {
          let start = this.segments[i];
          let end = this.segments[i + 1];
          p.line(start.x, start.y, end.x, end.y);
        };
      };
  
      offscreen() {
        let last = this.segments[this.segments.length - 1];
        return (last.y > p.height);
      };
    };

    let triangles = [];
    let lightningForks = [];
    let bolts = [];
    const background = darkMode ? '#5c5c5b' : '#fffcf5'

    p.setup = () => {
      p.createCanvas(p.windowWidth/12 * 6, p.windowHeight/12 * 4);
      p.frameRate(30);

      triangles = [];
      for (let i = 0; i < 100; i++) {
        let triangle = {
          x: p.random(p.width, p.width + 100),
          y: p.random(-800, 800),
          speed: p.random(8, 20) // Random speed
        };
        triangles.push(triangle);
      };

      lightningForks = [];
      for (let i = 0; i < 3; i++) {
        let fork = {
          x: p.random(p.width),
          y: -p.height / 2,
          length: p.random(20, 80)
        };
        lightningForks.push(fork);
      };
    };

    p.draw = () => {
      p.background(background);
      drawMountains();

      // Draw and update all bolts
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
        if (t.x < -200 || t.y > p.height + 200) {
          t.x = p.random(p.width, p.width + 100);
          t.y = p.random(-600, 600);
        };

        // p.fill(150, 100, 250, 150);
        p.fill(209, 209, 209, 150);
        p.noStroke();
        p.beginShape();

        p.vertex(t.x, t.y);
        p.vertex(t.x - 2, t.y + 10);
        p.vertex(t.x + 5, t.y + 10);
        p.endShape(p.CLOSE);
      };

      // Add a new bolt randomly
      if (p.random(1) < 0.05) {
        let bolt = new ForkedBolt(p.random(p.width), 0, p.random(2, 5), p.color(209, 209, 209));
        bolts.push(bolt);
      };
    };
  }, [strokeColor, darkMode]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <Container>
      <div ref={sketch_ref} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
`;

export default P5_GEOSTORM;
