import React from 'react';
import styled from 'styled-components';

export default function AfterImageControls({ darkMode, getter, setter }) {
  const handleChange = (e) => {
    setter(parseFloat(e.target.value));
  };

  return (
    <Container darkMode={darkMode}>
      <Info>REMEMBER, THERE IS ONLY ONE TRIANGLE</Info>
      <Slider
        darkMode={darkMode}
        type='range'
        min='0.1'
        max='5'
        value={getter}
        step='0.01'
        onChange={handleChange} />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  color: ${props => props.darkMode ? 'white' : 'black'};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  width: 40vw;
  padding: 10px 40px;
  @media only screen and (max-width: 720px) {
    font-size: 1rem;
    width: 60vw;
  }
`;
const Slider = styled.input`
  -webkit-appearance: none;
  width: 80%;
  border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  background: none;
  border-radius: 30px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: ${props => props.darkMode ? 'white' : 'black'};
    cursor: pointer;
    border-radius: 50%;
  }

  // &::-moz-range-thumb {
  //   width: 25px;
  //   height: 25px;
  //   background: #4CAF50;
  //   cursor: pointer;
  //   border-radius: 50%;
  // }

  // &::-ms-thumb {
  //   width: 25px;
  //   height: 25px;
  //   background: #4CAF50;
  //   cursor: pointer;
  //   border-radius: 50%;
  }
`;
const Info = styled.div`
  font-family: Rubik;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  padding: 0;
  font-weight: bold;
  @media only screen and (max-width: 720px) {
    font-size: 0.7rem;
  }
`;

