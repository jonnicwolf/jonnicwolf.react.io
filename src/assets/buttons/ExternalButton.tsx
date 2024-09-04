import { FC, useContext } from 'react';
// @ts-ignore
import styled from 'styled-components';

import { DarkmodeContext } from '../../Darkmode'

interface Props {
  link: string,
  text: string,
  buttonSize: string,
  buffer: boolean,
  callback: () => void,
  fontSize: string,
};

const ExternalButton: FC<Props> = ({
  link,
  text,
  buttonSize,
  buffer,
  callback,
  fontSize }) => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <StyledButton
      href={link}
      buttonSize={buttonSize}
      buffer={buffer}
      onClick={callback}
      target='_blank'
      fontSize={fontSize}
      darkmode={darkmode}
      rel='noreferrer' >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  margin-left:  ${(props: {buffer: boolean}) => props.buffer ? '1vw' : '0'};
  padding: ${(props: {buttonSize: string}) => props.buttonSize === 'large' ? '10px 60px' : '0.5em'};
  font-family: var(--font-family-rubik);
  font-weight: 900;
  font-size: ${(props: {fontSize: string}) => props.fontSize};
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'} ;
  text-decoration: none;
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
    border: 1px solid ${(props:{darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
    text-decoration: underline;
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${(props: {darkmode: boolean}) => props.darkmode ? 'black' : 'white'};
  }
`;

export default ExternalButton;
