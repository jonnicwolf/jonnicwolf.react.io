import React from 'react';
import styled from 'styled-components';

import LinkButton from '../../assets/buttons/LinkButton';

export default function ExpCard({ viewSetter }) {
  return (
    <Container>
      <Iframe src="https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/pub?embedded=true" />

      <Buttons>
        <LinkButton
          onClick={()=> viewSetter('tech')}
          textContent='TECH'
          isScaleAnimation />
        <LinkButton
          onClick={()=> viewSetter('contact')}
          textContent='GET IN TOUCH'
          isScaleAnimation />
        <LinkButton
          onClick={()=> viewSetter('bio')}
          textContent='ABOUT'
          isScaleAnimation />
        </Buttons>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height: 800px;
`;

const Iframe = styled.iframe`
  width: 840px;
  height: 740px;
  border-bottom: none;
  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 95vw;
    overflow: hidden;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;
