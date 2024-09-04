import { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

interface Props {
  text: string,
  onclick: () => void,
};

const Button: FC<Props> = ({ text, onclick }) => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <StyledButton darkMode={darkmode} onClick={onclick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: ${(props: {buttonSize: string}) => props.buttonSize === 'large' ? '25px 80px' : '1em'};
  font-family: var(--font-family-rubik);
  font-weight: 900;
  font-size: ${(props: {fontSize: string}) => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
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
    background: black;
    color:  ${(props: {darkmode: boolean}) => props.darkmode ? 'black' : 'white'};
    transition: all 0.1s ease;
  }

  &:hover {
    background: ${(props: {darkmode: boolean}) => props.darkmode ? 'white': 'black'};
    color: white;
    border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${(props: {darkmode: boolean}) => props.darkmode ? 'black' : 'white'};
  }
`;

export default Button;
