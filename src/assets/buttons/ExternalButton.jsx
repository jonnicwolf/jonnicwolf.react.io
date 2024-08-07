import React from 'react';
import styled from 'styled-components';

const ExternalButton = ({ link, text, buttonSize, buffer, darkModeGetter, callback, fontSize }) => {
  return (
    <StyledButton
      href={link}
      buttonSize={buttonSize}
      buffer={buffer}
      darkModeGetter={darkModeGetter}
      onClick={callback}
      target='_blank'
      fontSize={fontSize}
      rel='noreferrer' >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  margin-left:  ${props => props.buffer ? '1vw' : '0'};
  padding: ${props => props.buttonSize === 'large' ? '10px 60px' : '0.5em'};
  font-family: var(--font-family-rubik);
  font-weight: 900;
  font-size: ${props => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${props => props.darkModeGetter ? 'white' : 'black'} ;
  text-decoration: none;
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
    border: 1px solid ${props => props.darkModeGetter ? 'white' : 'black'};
    text-decoration: underline;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkModeGetter ? 'black' : 'white'};
  }
`;

export default ExternalButton;
