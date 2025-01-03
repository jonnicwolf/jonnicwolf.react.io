import { FC, useContext } from 'react';
// @ts-ignore
import styled from 'styled-components'; 
import { useDarkmode } from '../../Darkmode';

const DarkModeButton: FC = () => {
  const { darkmode, toggleDarkmode } = useDarkmode();

  return (
    <Container>
      <Button onClick={toggleDarkmode} darkmode={darkmode}>
        { darkmode ? 'LIGHTMODE' : 'DARKMODE' }
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 1vh;
  font-size: 2rem;
`;
const Button = styled.button`
  padding: ${(props: {buttonSize: string}) => props.buttonSize === 'large' ? '25px 80px' : '1em'};
  font-family: Rubik;
  font-weight: 900;
  font-size: ${(props: {fontSize: string}) => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'} ;
  z-index: 1;
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
    color:  ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
    transition: all 0.1s ease;
  }

  &:hover {
    color:  ${(props: {darkmode: boolean}) => props.darkmode ? 'black' : 'white'};
    border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${(props: {darkmode: boolean}) => props.darkmode ? 'black' : 'white'};
  }
`;


export default DarkModeButton;
