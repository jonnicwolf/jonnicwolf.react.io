import React from 'react';
import styled from 'styled-components';

export default function ChaosTheoryForm({ vars, setters, darkMode }) {
  const { sigma, rho, beta } = vars;

  const handleSigmaUp = () =>
    sigma > 20
    ? setters.setSigma(20)
    : setters.setSigma(sigma+1);
  const handleSigmaDown = () =>
    sigma <= 1
    ? setters.setSigma(1)
    : setters.setSigma(sigma-1);
  const handleRhoUp = () =>
    rho >= 100
    ? setters.setRho(100)
    : setters.setRho(rho+1);
  const handleRhoDown = () =>
    rho <= 1
    ? setters.setRho(1)
    : setters.setRho(rho-1);
  const handleBetaUp = () =>
    beta >= 10
    ? setters.setBeta(10)
    : setters.setBeta(beta+1);
  const handleBetaDown = () =>
    beta <= 1
    ? setters.setBeta(1)
    : setters.setBeta(beta-1);

  return (
    <Container darkMode={darkMode}>
      <Info>Each configuration is a unique infinite loop</Info>

      <VarContainer>
        <VarWrap>
          <Button onClick={handleSigmaUp} onMouseDown={handleSigmaUp} darkMode={darkMode}>⬆</Button>
          <Var>𝛴 {sigma}</Var>
          <Button onClick={handleSigmaDown} onMouseDown={handleSigmaDown} darkMode={darkMode}>⬇</Button>
        </VarWrap>
        <VarWrap>
          <Button onClick={handleRhoUp} onMouseDown={handleRhoUp} darkMode={darkMode}>⬆</Button>
          <Var>⍴ {rho}</Var>
          <Button onClick={handleRhoDown} onMouseDown={handleRhoDown} darkMode={darkMode}>⬇</Button>
        </VarWrap>
        <VarWrap>
          <Button onClick={handleBetaUp} onMouseDown={handleBetaUp} darkMode={darkMode}>⬆</Button>
          <Var>β {Math.floor(beta)}</Var>
          <Button onClick={handleBetaDown} onMouseDown={handleBetaDown} darkMode={darkMode}>⬇</Button>
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
  gap: 0.5vh;
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
  gap: 10vw;
`;