import React from 'react';
import styled from 'styled-components';

import Button from '../assets/buttons/Button.jsx'

const GalleryPage = ({ darkMode }) => {
  return (
    <Container>
      <DisplayBox>
        <ControlBox>
          <Last text={'LAST'}/>
          <Title>TITLasdfasdfadsfadsfadfadsfaE</Title>
          <Next text={'NEXT'}/>
        </ControlBox>
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`

`;
const Title = styled.h3`
  border: 1px solid red;
  height: 100%;
  display: flex;
  font-family: var(--font-family-rubik);
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const DisplayBox = styled.div`
  height: 120vw;
`;
const ControlBox = styled.div`
  display: flex;
  float: right;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
  border: 1px solid grey;
  width: 50%;
`;
const Next = styled(Button)`

`;
const Last = styled(Button)`
  
`;

export default GalleryPage;
