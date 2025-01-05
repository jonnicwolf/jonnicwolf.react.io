export interface Rectangle {
  width: number;
  height: number;
  xPos: number;
  yPos: number;
  color: string;
  blinkDelay: number;
}

const colors = ["#FF0000", "#0000FF", "#FFFFFF", "#FFFF00", "#FFFFFF"];

export const generateRectangles = (count: number): Rectangle[] => {
  const rectangles = [];
  for (let i = 0; i < count; i++) {
    const width = Math.random() * 200 + 150;
    const height = Math.random() * 200 + 150;
    const xPos = Math.random() * (window.innerWidth * 0.8);
    const yPos = Math.random() * (window.innerHeight * 0.7);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const blinkDelay = Math.floor(Math.random() * 10);

    rectangles.push({ width, height, xPos, yPos, color, blinkDelay });
  }
  return rectangles;
};


