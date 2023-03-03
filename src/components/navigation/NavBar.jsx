import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Me from '../../assets/photos/IMG_5542 2.jpeg';
import Git from '../../assets/photos/git.png';
import DarkMode from '../../assets/photos/day-and-night.png'
import '../../assets/fonts/fonts.css';

const NavBar = () => {
  return (
    <NavbarContainer>
      <Fezz key={uuidv4()}>
        <Link style={{textDecoration: 'none'}}>
          <RampartOneText>FEZZ</RampartOneText>
        </Link>
      </Fezz>
      <li key={uuidv4()}>
        <Link to='/about me'>
          <img 
            src={Me}
            alt="about me"
            style={{height: '40px', width: '40px', borderRadius: '50%'}}
          />
        </Link>
      </li>
      <li key={uuidv4()}>
        <Link to='/contributions'>
          <img 
            src={Git}
            alt="contributions"
            style={{height: '40px', width: '40px'}}
            />
        </Link>
      </li>
      <li key={uuidv4()}>
        <img
          src={DarkMode}
          alt="dark mode"
          style={{height: '40px', width: '40px'}}
        />
      </li>
    </NavbarContainer>
  )
};

const NavbarContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  column-gap: 10px;
  justify-content: end;
  margin-right: 30px;
`

const Fezz = styled.li`
  margin-right: auto;
`

const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 40px;
  margin: 0;
`;
export default NavBar;