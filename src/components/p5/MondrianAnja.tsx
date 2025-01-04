import { useCallback, useMemo } from "react";
import P5_ANJA from "./P5_ANJA";
import styled from 'styled-components';

import { Rectangle, generateRectangles } from "../utils/mondrianGenerator";

interface RectangleContainerProps {
  zIndex: number,
};

const d20 = () => Math.floor(Math.random() * 20 + 1);
const specialAnja = (d: number) => [1, 6, 13, 20].includes(d);

const MondrianAnja = ({ isMobile }: { isMobile: boolean }) => {
  const rectangleCount = useMemo(() => Math.floor(Math.random() * (40 - 20 + 1) + 20), []);
  const rectangles = useMemo(() => generateRectangles(rectangleCount), [rectangleCount]);

  const renderRectangle = useCallback((rect: Rectangle, index: number) => {
    const randomNumber = d20();
    const isSpecial = specialAnja(randomNumber);
    const isRotated = Math.random() < 3/12;

    return (
      <RectangleContainer
        zIndex={isSpecial ? 2 : 1}
        key={index}
        style={{
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          left: `${rect.xPos}px`,
          top: `${rect.yPos}px`,
          backgroundColor: rect.color,}}>

        {isSpecial &&
          <P5_ANJA
            strokeColor={0}
            isMobile={isMobile}
            w={rect.width * 0.6}
            h={rect.height * 0.8}
            blinkDelay={rect.blinkDelay}
            background={rect.color}
            isRotated={isRotated}
          />
        }
      </RectangleContainer>
  )}, [isMobile]);

  return (
    <GridContainer>
      {rectangles.map(renderRectangle)}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RectangleContainer = styled.div<RectangleContainerProps>`
  position: absolute;
  border: 4px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: ${props => props.zIndex};
`;

export default MondrianAnja;
