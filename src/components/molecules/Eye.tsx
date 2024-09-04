import { FC } from 'react';
//@ts-ignore
import styled, { keyframes } from 'styled-components';

import P5_EYE from '../p5/P5_EYE';

interface Props {
  width: number,
  height: number,
};

const Eye: FC<Props> = ({ width, height }) => {
  return (
    <EyeWrapper>
        <EyeLashContainer>
          <EyeLash4 />
          <EyeLash2 />
          <EyeLash1 />
          <EyeLash3 />
          <EyeLash5 />
        </EyeLashContainer>

        <EyeContainer>
          <P5_EYE width={width} height={height} tracksMouse={false} />
        </EyeContainer>
      </EyeWrapper>
  );
};


const blink = keyframes`
  0% { width: 100px; }
  1% { width: 0; }
  4% { width: 100px; }
  100% { width: 100px; }
`;
const EyeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  transform: translateX(-60px);
`;
const EyeContainer = styled.div`
  clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
  display: flex;
  justify-content: center;
  animation: ${blink} 7s infinite;
`;
const EyeLashContainer = styled.div`
  display: flex;
  transform: rotate(270deg) translateY(70px);
  height: 10%;
  align-items: center;
  gap: 5px;
`;
const EyeLash = styled.div`
  width: 25px;
  height: 1px;
  background-color: black;
  padding: 4px;
  border-radius: 5px;
`;
const EyeLash1 = styled(EyeLash)`
  transform: rotate(90deg);
`;
const EyeLash2 = styled(EyeLash)`
  transform: rotate(70deg);
`;
const EyeLash3 = styled(EyeLash)`
  transform: rotate(-70deg);
`;
const EyeLash4 = styled(EyeLash)`
  transform: rotate(50deg) translateX(7px);
  width: 18px;
`;
const EyeLash5 = styled(EyeLash)`
  transform: rotate(-50deg) translateX(-7px);
  width: 18px;
`;

export default Eye;
