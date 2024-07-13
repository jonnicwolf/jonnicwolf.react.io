import React from 'react';
import styled from 'styled-components';

export default function AfterImageControls({ darkMode }) {
  return (
    <Container darkMode={darkMode}>
      REMEMBER, THERE IS ONLY ONE TRIANGLE
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  color: ${props => props.darkMode ? 'white' : 'black'};
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  width: 40vw;
  padding: 10px 40px;
  @media only screen and (max-width: 720px) {
    font-size: 1rem;
    width: 60vw;
  }
`;
const Button = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
  color: ${props => props.darkMode ? 'white' : 'black'};
  @media only screen and (max-width: 720px) {
    font-size: 0.7rem;
  }
`;
const VarWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const VarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 7vw;
`;
