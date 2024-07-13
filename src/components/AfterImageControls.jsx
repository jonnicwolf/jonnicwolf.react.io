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
  width: 80%;
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

