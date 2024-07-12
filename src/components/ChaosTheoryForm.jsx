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
      <VarWrap>
        <Button onClick={handleSigmaUp}>⬆</Button>
        <Var>𝛴 {sigma}</Var>
        <Button onClick={handleSigmaDown}>⬇</Button>
      </VarWrap>
      <VarWrap>
        <Button onClick={handleRhoUp}>⬆</Button>
        <Var>⍴ {rho}</Var>
        <Button onClick={handleRhoDown}>⬇</Button>
      </VarWrap>
      <VarWrap>
        <Button onClick={handleBetaUp}>⬆</Button>
        <Var>β {Math.floor(beta)}</Var>
        <Button onClick={handleBetaDown}>⬇</Button>
      </VarWrap>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid grey;
  padding: 25px 80px;
  display: flex;
  justify-content: center;
  gap: 8vw;
  margin-top: 15px;
  width: 40vw;
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
  align-items: center;
  justify-content: center;
`;
