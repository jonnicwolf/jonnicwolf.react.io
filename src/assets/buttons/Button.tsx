import { FC, } from 'react';
import { useDarkmode } from '../../Darkmode';

import styled from 'styled-components';

interface Props {
  text: string,
  buttonSize?: string,
  onclick?: () => void,
  rounded?: boolean,
};

interface StyledButtonProps {
  darkmode: boolean,
  buttonSize: string,
  rounded: string,
};

const Button: FC<Props> = ({ text, buttonSize, onclick, rounded }) => {
  const { darkmode } = useDarkmode();

  return (
    <StyledButton
      darkmode={darkmode}
      onClick={onclick}
      buttonSize={buttonSize === 'large' ? '25px 80px' : '1em'}
      rounded={rounded ? '50%' : '0'} >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${props => props.buttonSize};
  font-family: Rubik;
  font-weight: 900;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
  z-index: 1;
  color: ${props => props.darkmode ? 'white' : 'black'};
  border-radius: ${props => props.rounded};

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
    color:  ${props => props.darkmode ? 'black' : 'white'};
    transition: all 0.1s ease;
  }

  &:hover {
    background: ${props => props.darkmode ? 'white': 'black'};
    color: white;
    border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkmode ? 'black' : 'white'};
  }
`;

export default Button;
