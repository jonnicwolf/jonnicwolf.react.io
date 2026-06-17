import { FC } from 'react';
import styled from 'styled-components';
import Starfield from '../p5/Starfield';

interface Props {
  setter: (value: boolean) => void;
};

const EsperiCover: FC<Props> = ({ setter }) => {
  function onMouseEnter() {
    setter(true);
  };

  return (
    <Container onMouseEnter={onMouseEnter}>
      <StarfieldWrapper>
        {/* @ts-ignore */}
        <Starfield />
      </StarfieldWrapper>

      <OverlayContent>
        <Divination>
          <LeftSpike />
          <Title>E<Sm>SPERI</Sm></Title>
          <RightSpike />
        </Divination>
      </OverlayContent>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StarfieldWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
const OverlayContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: #b57902;
  pointer-events: none;
`;
const Title = styled.h1`
  font-size: 6rem;
  font-family: Bagnard, serif;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;
const LeftSpike = styled.div`
  height: 120px;
  width: 1px;
  border: 1px solid #b57902;
  background: linear-gradient(#b57902, #000);
  clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
  transform: rotate(270deg);

  @media (max-width: 768px) {
    height: 60px;
  }
`;
const RightSpike = styled(LeftSpike)`
  transform: rotate(90deg);
`;
const Sm = styled.span`
  display: inline-block;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;
const Divination = styled.div`
  font-family: Bagnard;
  font-size: 2rem;
  display: flex;
  color: #b57902;
  letter-spacing: 4px;
  align-items: center;
  justify-content: center;
  gap: 70px;

  @media (max-width: 768px) {
    gap: 30px;
    font-size: 1.5rem;
    margin-top: 8vh;
  }
`;

export default EsperiCover;
