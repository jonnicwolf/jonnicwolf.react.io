import React, { useEffect, useRef, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import p5 from 'p5';

const P5_GEOSTORM = ({ strokeColor }) => {
  const sketch_ref = useRef();

  function drawMountains() {
    // Draw mountain bases
    p. fill(100, 100, 150, 150); // Add opacity to the mountains
    p. noStroke();

    // Mountain 1
    p. beginShape();
    p. vertex(0, height);
    p. vertex(100, 150);
    p. vertex(200, height);
    p. endShape(CLOSE);

    // Mountain 2
    p. beginShape();
    p. vertex(150, height);
    p. vertex(300, 100);
    p. vertex(450, height);
    p. endShape(CLOSE);

    // Mountain 3
    p. beginShape();
    p. vertex(300, height);
    p. vertex(400, 200);
    p. vertex(500, height);
    p. endShape(CLOSE);

    // Draw mountain tops
    p. fill(255, 255, 255, 200); // White color with some opacity

    // Top of Mountain 1
    p. beginShape();
    p. vertex(90, 175);
    p. vertex(100, 150);
    p. vertex(110, 175);
    p. endShape(CLOSE);

    // Top of Mountain 2
    p. beginShape();
    p. vertex(287, 125);
    p. vertex(300, 100);
    p. vertex(313, 125);
    p. endShape(CLOSE);

    // Top of Mountain 3
    p. beginShape();
    p. vertex(387, 225);
    p. vertex(400, 200);
    p. vertex(413, 225);
    p. endShape(CLOSE);
  };

  class ForkedBolt {
    constructor(x, y, thickness, color) {
      this.start = createVector(x, y);
      this.thickness = thickness;
      this.color = color;
      this.segments = [];
      this.segments.push(this.start.copy());
    };

    update() {
      let last = this.segments[this.segments.length - 1];
      let next = last.copy();
      next.x += random(-30, 30);
      next.y += random(10, 30);
      this.segments.push(next);
    };
  
    show() {
      strokeWeight(this.thickness);
      stroke(this.color);
      for (let i = 0; i < this.segments.length - 1; i++) {
        let start = this.segments[i];
        let end = this.segments[i + 1];
        line(start.x, start.y, end.x, end.y);
      };
    };

    offscreen() {
      let last = this.segments[this.segments.length - 1];
      return (last.y > height);
    };
  };

  const sketch = useCallback((p) => {
    let bolts = [];
    let triangles = [];
    let lightningForks = [];

    p.setup = () => {
      p.createCanvas(width, height, p.WEBGL);
      p.frameRate(30);

      for (let i = 0; i < 100; i++) {
        let triangle = {
          x: random(width, width + 100),
          y: random(-600, 600),
          speed: random(8, 20) // Random speed
        };
        triangles.push(triangle);
      };

      for (let i = 0; i < 3; i++) {
        let fork = {
          x: random(width),
          y: -height / 2,
          length: random(20, 80)
        };
        lightningForks.push(fork);
      };
    };

    p.draw = () => {
      p.background(0, 0.9);
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
        if (t.x < -200 || t.y > height + 200) {
          t.x = random(width, width + 100);
          t.y = random(-600, 600);
        };

        fill(150, 100, 250, 150);
        noStroke();
        beginShape();
        
        vertex(t.x, t.y);
        vertex(t.x - 2, t.y + 10);
        vertex(t.x + 5, t.y + 10);
        endShape(CLOSE);
      };

      // Add a new bolt randomly
      if (random(1) < 0.05) {
        let bolt = new ForkedBolt(random(width), 0, random(2, 5), color(255, 255, 255));
        bolts.push(bolt);
      };
    };
  }, [strokeColor]);

  useEffect(() => {
    const p5Canvas = new p5(sketch, sketch_ref.current);
    return () => p5Canvas.remove();
  }, [sketch]);

  return (
    <div ref={sketch_ref} />
  );
};

export default P5_GEOSTORM;
