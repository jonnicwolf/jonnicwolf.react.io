import React, { useContext } from 'react';
import { DarkmodeContext } from '../../contexts/Darkmode';
import styled from 'styled-components';

const Button = ({ text, onclick }) => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <StyledButton darkMode={darkmode} onClick={onclick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: ${props => props.buttonSize === 'large' ? '25px 80px' : '1em'};
  font-family: var(--font-family-rubik);
  font-weight: 900;
  font-size: ${props => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  z-index: 1;
  color: ${props => props.darkMode ? 'white' : 'black'};

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: black;
    color:  ${props => props.darkMode ? 'black' : 'white'};
    transition: all 0.1s ease;
  }

  &:hover {
    background: ${props => props.darkMode ? 'white': 'black'};
    color: white;
    border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkMode ? 'black' : 'white'};
  }
`;

export default Button;
