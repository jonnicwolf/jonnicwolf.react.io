import { FC, } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { useDarkmode } from '../../Darkmode';

interface Props {
  color?: string,
  padding: boolean,
  onClick: () => void | null,
  buttonSize: string,
  textContent: string,
  subDirectory: string,
  isScaleAnimation: boolean | null,
};

interface LinkStyleProps {
  padding: boolean,
};

interface ButtonProps {
  buttonSize: string,
  darkmode: boolean,
};

const LinkButton: FC<Props> = ({
  color,
  padding,
  onClick,
  textContent,
  buttonSize,
  subDirectory,
  isScaleAnimation,
}) => {
  const { darkmode } = useDarkmode();

  return (
    <LinkStyle
      to={subDirectory}
      onClick={onClick}
      padding={padding} >
      { isScaleAnimation
        ? <Button
          color={color}
          as={motion.button}
          initial={{ scaleX: 0, opacity: 0, }}
          animate={{ scaleX: 1, opacity: 1, }}
          transition={{ delay: 1, duration: 0.3 }}
          buttonSize={buttonSize}
          darkmode={darkmode} >
            {textContent}</Button>
        : <Button
          buttonSize={buttonSize}
          darkmode={darkmode} >
            {textContent}</Button>
      }
    </LinkStyle>
  );
};


const LinkStyle = styled(motion(Link))<LinkStyleProps>`
  padding: ${props => props.padding ? '1vh' : '0'};
  font-size: 2rem;
`;
const Button = styled.button<ButtonProps>`
  padding: ${props => props.buttonSize === 'large' ? '25px 80px' : '1em'};
  font-family: Rubik;
  font-size: ${props => props.buttonSize === 'large' ? '1.5rem' : '0.8rem'};
  font-weight: 900;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  position: relative;
  display: inline-block;
  border: 1px solid ${props => props.color ? props.color : props.darkmode ? 'white' : 'black'};
  z-index: 1;
  color: ${props => props.color ? props.color : props.darkmode ? 'white' : 'black'};

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
    transition: all 0.15s ease;
  }

  &:hover {
    background: ${props => props.darkmode ? 'white': 'black'};
    color:  ${props => props.darkmode ? 'white' : 'white'};
    border: 1px solid ${props => props.darkmode ? 'white' : 'black'};
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
    color: ${props => props.darkmode ? 'black' : 'white'};
  }
`;

export default LinkButton;
