import { FC } from 'react';
// @ts-ignore
import styled, { keyframes } from 'styled-components';

import Eye from './Eye.js';

interface Props {
  setter: (value: boolean) => void
};

const EsperiCover: FC<Props> = ({ setter }) => {
  function onMouseEnter () {
    setter(true);
  };

  return (
    <Container onMouseEnter={onMouseEnter}>
      <ContentWrap>
        <EyeWrap>
          <Eye width={100} height={280} />
        </EyeWrap>
        <Title>Esperi</Title>
      </ContentWrap>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentWrap = styled.div`
  background-color: rgb(252, 230, 197);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  animation: ${fadeIn} 2s forwards;
  height: 92.4%;
  width: 91.4%;

  @media screen and (max-width: 600px) {
    height: 86.5%;
    width: 80.7%;
  };

  --s: 5px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  background-color: #fce6c5;
`;
const EyeWrap = styled.div`
  transform: translateX(-20px);
  @media screen and (max-width: 600px) {
    transform: translate(-20px, -20px);
    scale: 0.5;
  }
`;
const Title = styled.h1`
  font-size: 8rem;
  font-family: Bagnard;

  @media screen and (max-width: 600px) {
    transform: translateY(-50px);
    font-size: 4rem;
  }
`;

export default EsperiCover;
