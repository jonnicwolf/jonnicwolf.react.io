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
    <Container>
      <Info>Each configuration is a unique infinite loop that eventually converges to the same butterfly shape</Info>

      <VarContainer>
        <VarWrap>
          <Button onClick={handleSigmaUp} onMouseDown={handleSigmaUp}>⬆</Button>
          <Var>𝛴 {sigma}</Var>
          <Button onClick={handleSigmaDown} onMouseDown={handleSigmaDown}>⬇</Button>
        </VarWrap>
        <VarWrap>
          <Button onClick={handleRhoUp} onMouseDown={handleRhoUp}>⬆</Button>
          <Var>⍴ {rho}</Var>
          <Button onClick={handleRhoDown} onMouseDown={handleRhoDown}>⬇</Button>
        </VarWrap>
        <VarWrap>
          <Button onClick={handleBetaUp} onMouseDown={handleBetaUp}>⬆</Button>
          <Var>β {Math.floor(beta)}</Var>
          <Button onClick={handleBetaDown} onMouseDown={handleBetaDown}>⬇</Button>
        </VarWrap>
      </VarContainer>

    </Container>
  );
};

const Container = styled.div`
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  width: 40vw;
  padding: 10px 40px;
`;
const Button = styled.button`
  border: none;
  background: none;
  font-size: 1rem;
`;
const Var = styled.div`
  font-size: 2rem;
  font-family: Rubik;
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
`;
const VarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5vw;
`;