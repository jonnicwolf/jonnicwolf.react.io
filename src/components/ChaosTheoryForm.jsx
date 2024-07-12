import React from 'react';
import styled from 'styled-components';

export default function ChaosTheoryForm({ vars, varsSetter }) {
  const { sigma, rho, beta } = vars;

  const handleSigmaUp = () => varsSetter(vars.sigma++);
  const handleSigmaDown = () => varsSetter(vars.sigma--);
  const handleRhoUp = () => varsSetter(vars.rho++);
  const handleRhoDown = () => varsSetter(vars.rho--);
  const handleBetaUp = () => varsSetter(vars.beta++);
  const handleBetaDown = () => varsSetter(vars.beta--);

  return (
    <Container>
      <div>
        <button onClick={handleSigmaUp}>⬆</button>
        <div>{sigma}</div>
        <button onClick={handleSigmaDown}>⬇</button>
      </div>
      <div>
        <button onClick={handleRhoUp}>⬆</button>
        <div>{rho}</div>
        <button onClick={handleRhoDown}>⬇</button>
      </div>
      <div>
        <button onClick={handleBetaUp}>⬆</button>
        <div>{beta}</div>
        <button onClick={handleBetaDown}>⬇</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 5vw;
`;
