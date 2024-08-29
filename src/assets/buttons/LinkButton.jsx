import React, { useContext } from 'react';
import { DarkModeContext } from './context/Darkmode';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LinkButton = ({
  padding,
  onClick,
  textContent,
  buttonSize,
  subDirectory,
  isScaleAnimation,
}) => {
  const { darkmode } = useContext(DarkModeContext);

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

const LinkStyle = styled(motion(Link))`
  padding: ${props => props.padding ? '1vh' : '0'} ;
  font-size: 2rem;
`;
const Button = styled.button`
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
