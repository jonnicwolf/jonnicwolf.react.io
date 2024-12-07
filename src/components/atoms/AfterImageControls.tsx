import { FC, useContext } from 'react';
import { useDarkmode } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

interface Props {
  mod: number,
  modSetter: (value: number) => void,
};

const AfterImageControls: FC<Props> = ({ mod, modSetter }) => {
  const { darkmode } = useDarkmode();

  // @ts-ignore
  const handleChange = (e) => {
    modSetter(parseFloat(e.target.value));
  };

  return (
    <Container darkMode={darkmode}>
      <Info>REMEMBER, THERE IS ONLY ONE TRIANGLE</Info>
      <Slider
        darkMode={darkmode}
        type='range'
        min='0.1'
        max='5'
        value={mod}
        step='0.01'
        onChange={handleChange} />
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
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
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  background: none;
  border-radius: 30px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
    cursor: pointer;
    border-radius: 50%;
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

export default AfterImageControls;
