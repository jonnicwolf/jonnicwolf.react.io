import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = ({textContent, buttonSize, fontSize, subDirectory, darkMode}) => {
  return (
    <LinkStyle to={subDirectory}>
      <Button buttonSize={buttonSize} fontSize={fontSize} darkMode={darkMode}>
        {textContent}
      </Button>
    </LinkStyle>
  );
};

const LinkStyle = styled(Link)`
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
  border: 1px solid ${props => props.darkMode ? 'red' : 'black'};
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
    background: ${props => props.darkMode ? 'black' : 'red'};
    color:  ${props => props.darkMode ? 'white' : 'black'};
    transition: all 0.1s ease;
  }

  &:hover {
    color: ${props => props.darkMode ? 'red' : 'black'};
    border: 1px solid ${props => props.darkMode ? 'red' : 'black'};;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
`;

export default LinkButton;
