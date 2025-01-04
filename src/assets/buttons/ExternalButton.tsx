import { FC, } from 'react';
import styled from 'styled-components';

import { useDarkmode } from '../../Darkmode'

interface Props {
  link: string,
  text: string,
  buttonSize: string,
  buffer: boolean,
  fontSize: string,
  overrideDarkmode: boolean,
};

interface StyledButtonProps {
  buttonSize: string | null,
  buffer: boolean,
  fontSize: string,
  darkmode: boolean,
};

const ExternalButton: FC<Props> = ({
  link,
  text,
  buttonSize,
  buffer,
  fontSize,
  overrideDarkmode,
}) => {
  const { darkmode } = useDarkmode();

  return (
    <StyledButton
      href={link}
      buttonSize={buttonSize}
      buffer={buffer}
      target='_blank'
      fontSize={fontSize}
      darkmode={overrideDarkmode ? false : darkmode}
      rel='noreferrer' >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.a<StyledButtonProps>`
  margin-left:  ${props => props.buffer ? '1vw' : '0'};
  padding: ${props => props.buttonSize === 'large' ? '10px 60px' : '0.5em'};
  font-family: Rubik;
  font-weight: 900;
  font-size: ${props => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${props => props.darkmode ? 'white' : 'black'} ;
  text-decoration: none;
  z-index: 1;
  color: ${props => props.darkmode ? 'white' : 'black'};

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
    border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
    text-decoration: underline;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkmode ? 'black' : 'white'};
  }
`;

export default ExternalButton;
