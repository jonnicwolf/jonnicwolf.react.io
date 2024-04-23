import React, { useState } from 'react';
import styled from 'styled-components';

const Hamburger = ({ darkMode, isOpen, isOpenSet }) => {

  function handleToggle () {
    isOpenSet(!isOpen);
    console.log('Hamburger', isOpen)
  };

  return (
    <Wrapper>
      {
        isOpen ?
         <XContainer onClick={()=>handleToggle()}>
          <X_1/>
          <X_2/>
         </XContainer>
         :
        <Container onClick={()=>handleToggle()}>
          <Bar />
          <Bar />
          <Bar />
        </Container>
      }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 30px;
  margin-top: 5px;
`;
const Container = styled.div`
  cursor: pointer;
  width: 30px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all .3s linear;
`;
const XContainer = styled(Container)`
  justify-content: center;
  padding-left: 10px;
`;
const Bar = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: black;
`;
const X_1 = styled(Bar)`
  transform: rotate(45deg);
  transform-origin: top left;
  margin-bottom: 8px;
`;
const X_2 = styled(Bar)`
  transform: rotate(-45deg);
  transform-origin: bottom left;
  margin-top: 9px;
`;

export default Hamburger;
