import React from 'react';
import styled from 'styled-components';

const Button = ({ darkModeGetter, text, onclick }) => {
  return (
    <StyledButton darkModeGetter={darkModeGetter} onClick={onclick}>
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
  border: 1px solid ${props => props.darkModeGetter ? 'white' : 'black'};
  z-index: 1;
  color: ${props => props.darkModeGetter ? 'white' : 'black'};

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: ${props => props.darkModeGetter ? 'white' : 'black'};
    color:  ${props => props.darkModeGetter ? 'white' : 'black'};
    transition: all 0.1s ease;
  }

  &:hover {
    color:  ${props => props.darkModeGetter ? 'black' : 'white'};
    border: 1px solid ${props => props.darkModeGetter ? 'white' : 'black'};;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkModeGetter ? 'black' : 'white'};
  }
`;

export default Button;
