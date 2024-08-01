import React from 'react';
import styled from 'styled-components';

import Eye from './Eye.jsx';

export default function EsperiCover ({ setter }) {
  function onMouseEnter () {
    setter(true);
  };
  return (
    <Container onMouseEnter={onMouseEnter}>
      <EyeWrap>
        <Eye width={100} height={280} />
      </EyeWrap>
      <Title>Esperi</Title>
    </Container>
  );
};

const Container = styled.div`
  background-color: rgb(252, 230, 197);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 700px;
  width: 800px;

  --s: 5px;
  padding: var(--s);
  border: calc(5*var(--s)) solid #0000;
  outline: 1px solid #000;
  outline-offset: calc(-3*var(--s));
  background: conic-gradient(from 90deg at 1px 1px,#0000 25%,#000 0);
  background-color: #fce6c5;
`;

const EyeWrap = styled.div`
  padding: 50px;
  transform: translateX(-20px);
`;
const Title = styled.h1`
  font-size: 8rem;
  font-family: Bagnard;
`;
