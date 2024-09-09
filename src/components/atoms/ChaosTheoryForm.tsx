import { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

interface Props {
  vars: {
    sigma: number,
    rho: number,
    beta: number,
    delta: number,
  },
  setters: {
    setSigma: (sigma: number) => void,
    setRho: (rho: number) => void,
    setBeta: (beta: number) => void,
    setDelta: (delta: number) => void,
  },
};

const ChaosTheoryForm: FC<Props> = ({ vars, setters }) => {
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
    <Container darkmode={darkmode}>
      <Info>Each configuration is a unique infinite loop</Info>

      <VarContainer>
        <VarWrap>
          <Button onMouseDown={handleSigmaUp} darkmode={darkmode}>&#8593;</Button>
          <Var>𝛴{sigma}</Var>
          <Button onMouseDown={handleSigmaDown} darkmode={darkmode}>&#8595;</Button>
        </VarWrap>

        <VarWrap>
          <Button onMouseDown={handleRhoUp} darkmode={darkmode}>&#8593;</Button>
          <Var>⍴{rho}</Var>
          <Button onMouseDown={handleRhoDown} darkmode={darkmode}>&#8595;</Button>
        </VarWrap>

        <VarWrap>
          <Button onMouseDown={handleBetaUp} darkmode={darkmode}>&#8593;</Button>
          <Var>β{Math.floor(beta)}</Var>
          <Button onMouseDown={handleBetaDown} darkmode={darkmode}>&#8595;</Button>
        </VarWrap>

        <VarWrap>
          <Button onMouseDown={handleDeltaUp} darkmode={darkmode}>&#8593;</Button>
          <Var>𝚫{delta}</Var>
          <Button onMouseDown={handleDeltaDown} darkmode={darkmode}>&#8595;</Button>
        </VarWrap>
      </VarContainer>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
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
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
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

export default ChaosTheoryForm;
