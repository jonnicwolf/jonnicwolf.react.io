import React, { useContext } from 'react';
import styled from 'styled-components'; 
import { DarkmodeContext } from '../../Darkmode';

const DarkModeButton = () => {
  const { darkmode, toggleDarkmode  } = useContext(DarkmodeContext);

  return (
    <Container>
      <Button onClick={toggleDarkmode} darkmode={darkmode}>
        { darkmode ? 'LIGHTMODE' : 'DARKMODE'}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 1vh;
  font-size: 2rem;
`;
const Button = styled.button`
  padding: ${props => props.buttonSize === 'large' ? '25px 80px' : '1em'};
  font-family: var(--font-family-rubik);
  font-weight: 900;
  font-size: ${props => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${props => props.darkmode ? 'white' : 'black'} ;
  z-index: 1;
  color: ${props => props.darkmode ? 'white' : 'black'};;

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: ${props => props.darkmode ? 'white' : 'black'};
    color:  ${props => props.darkmode ? 'white' : 'black'};
    transition: all 0.1s ease;
  }

  &:hover {
    color:  ${props => props.darkmode ? 'black' : 'white'};
    border: 1px solid ${props => props.darkmode ? 'white' : 'black'};;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkmode ? 'black' : 'white'};
  }
`;


export default DarkModeButton;
