import React, { useContext } from 'react';
import { DarkmodeContext } from '../contexts/Darkmode';
import styled from 'styled-components';

export default function ChaosTheoryForm({ vars, setters }) {
  const { darkmode } = useContext(DarkmodeContext);
  const { sigma, rho, beta, delta } = vars;
  const { setSigma, setRho, setBeta, setDelta } = setters;

  const handleSigmaUp = () =>
    sigma > 20
    ? setSigma(20)
    : setSigma(sigma + 1);

  const handleSigmaDown = () =>
    sigma <= 1
    ? setSigma(1)
    : setSigma(sigma - 1);

  const handleRhoUp = () =>
    rho >= 100
    ? setRho(100)
    : setRho(rho + 1);

  const handleRhoDown = () =>
    rho <= 1
    ? setRho(1)
    : setRho(rho - 1);

  const handleBetaUp = () =>
    beta >= 9
    ? setBeta(9)
    : setBeta(beta + 1);

  const handleBetaDown = () =>
    beta <= 1
    ? setBeta(1)
    : setBeta(beta - 1);

  const handleDeltaUp = () =>
    delta >= 3
    ? setDelta(3)
    : setDelta(delta + 1);

  const handleDeltaDown = () =>
    delta <= 1
    ? setDelta(1)
    : setDelta(delta - 1);

  return (
    <Container darkMode={darkmode}>
      <Info>Each configuration is a unique infinite loop</Info>

      <VarContainer>
        <VarWrap>
          <Button onMouseDown={handleSigmaUp} darkMode={darkmode}>⬆</Button>
          <Var>𝛴{sigma}</Var>
          <Button onMouseDown={handleSigmaDown} darkMode={darkmode}>⬇</Button>
        </VarWrap>

        <VarWrap>
          <Button onMouseDown={handleRhoUp} darkMode={darkmode}>⬆</Button>
          <Var>⍴{rho}</Var>
          <Button onMouseDown={handleRhoDown} darkMode={darkmode}>⬇</Button>
        </VarWrap>

        <VarWrap>
          <Button onMouseDown={handleBetaUp} darkMode={darkmode}>⬆</Button>
          <Var>β{Math.floor(beta)}</Var>
          <Button onMouseDown={handleBetaDown} darkMode={darkmode}>⬇</Button>
        </VarWrap>

        <VarWrap>
          <Button onMouseDown={handleDeltaUp} darkMode={darkmode}>⬆</Button>
          <Var>𝚫{delta}</Var>
          <Button onMouseDown={handleDeltaDown} darkMode={darkmode}>⬇</Button>
        </VarWrap>
      </VarContainer>
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
  z-index: 2;
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
const Var = styled.div`
  font-size: 2rem;
  font-family: Rubik;
  @media only screen and (max-width: 720px) {
    font-size: 1rem;
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
