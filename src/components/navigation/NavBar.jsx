import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Me from '../../assets/photos/icons/Headshot.jpeg';
import DarkMode from '../../assets/photos/icons/DarkMode_Sun_Moon_Icon.png';

const NavBar = () => {
  return (
    <NavbarContainer>
      <Fezz key={uuidv4()}>
        <Link 
          to='/projects'
          style={{textDecoration: 'none', color: 'black'}}>
          <RampartOneText>FEZZ</RampartOneText>
        </Link>
      </Fezz>
      <li key={uuidv4()}>
        <Link to='/fezz'>
          <NavImg 
            src={Me}
            alt="About Me"
            style={{borderRadius: '50%'}}
          />
        </Link>
      </li>
      <li key={uuidv4()} onClick={()=> alert('This feature is currently under construction.')}>
        <NavImg
          src={DarkMode}
          alt="dark mode"
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
  margin-left: 30px;
  padding-inline-start: 0;
  margin-bottom: 100px;
  cursor: pointer;
  border-bottom: 2px solid rgb(0, 0, 0, 0.3);
`;
const Fezz = styled.li`
  margin-right: auto;
`;
const NavImg = styled.img`
  height: 50px;
  width: 50px;
`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 40px;
  margin: 0;
`;

export default NavBar;