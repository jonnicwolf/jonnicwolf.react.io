import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Icons8_about_me_50 from '../../assets/icons/Icons8_about_me_50.png';


const NavBar = () => {
  return (
    <NavbarContainer>
      <Fezz>
        <Link to='/projects' style={{textDecoration: 'none', color: 'black'}} >
          <RampartOneText>FEZZ</RampartOneText>
        </Link>
      </Fezz>
      <Link to='/fezz'>
        <NavImg src={Icons8_about_me_50} alt="About Me" />
      </Link>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  border-bottom: 2px solid rgb(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  list-style: none;
  column-gap: 10px;
  justify-content: end;
  margin-right: 5vw;
  margin-left: 5vw;
  padding-inline-start: 0;
  margin-bottom: 100px;
`;
const Fezz = styled.div`
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
