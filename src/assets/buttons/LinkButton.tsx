import React, { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';

import { Link } from 'react-router-dom';
// @ts-ignore
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Props {
  padding: boolean,
  onClick: () => void | null,
  buttonSize: string,
  textContent: string,
  subDirectory: string,
  isScaleAnimation: boolean | null,
};

const LinkButton: FC<Props> = ({
  padding,
  onClick,
  textContent,
  buttonSize,
  subDirectory,
  isScaleAnimation,
}) => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <LinkStyle
      to={subDirectory}
      onClick={onClick}
      padding={padding} >
      { isScaleAnimation
        ? <Button
          as={motion.button}
          initial={{ scaleX: 0, opacity: 0, }}
          animate={{ scaleX: 1, opacity: 1, }}
          transition={{ delay: 1, duration: 0.3 }}
          buttonSize={buttonSize}
          darkMode={darkmode} >
            {textContent}</Button>
        : <Button
          buttonSize={buttonSize}
          darkMode={darkmode} >
            {textContent}</Button>
      }
    </LinkStyle>
  );
};

interface LinkButtonProps {
  padding: boolean,
};
const LinkStyle = styled(motion(Link))<LinkButtonProps>`
  padding: ${props => props.padding ? '1vh' : '0'} ;
  font-size: 2rem;
`;
interface ButtonProps {
  buttonSize: boolean,
  darkMode: boolean,
};
const Button = styled.button<ButtonProps>`
  padding: ${props => props.buttonSize === 'large' ? '25px 80px' : '1em'};
  font-family: var(--font-family-rubik);
  font-size: ${props => props.buttonSize === 'large' ? '1.5rem' : '0.8rem'};
  font-weight: 900;
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
    transition: all 0.15s ease;
  }

  &:hover {
    background: ${props => props.darkMode ? 'white': 'black'};
    color:  ${props => props.darkMode ? 'white' : 'white'};
    border: 1px solid ${props => props.darkMode ? 'white' : 'black'};
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkMode ? 'black' : 'white'};
  }
`;

export default LinkButton;
