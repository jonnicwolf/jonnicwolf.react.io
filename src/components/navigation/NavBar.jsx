import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from '../../assets/buttons/LinkButton';
import DarkModeButton from '../../assets/buttons/DarModeButton';

const NavBar = ({ darkModeGetter, darkModeSetter }) => {
  return (
    <NavbarContainer>
      <Fezz>
        <Link to='/projects' style={{textDecoration: 'none', color: 'black'}}>
          <RampartOneText darkMode={darkModeGetter}>
            FEZZ
          </RampartOneText>
        </Link>
      </Fezz>

      <DarkModeButton darkModeGetter={darkModeGetter} darkModeSetter={darkModeSetter} />

      <LinkButton subDirectory={'/about'} textContent={'ABOUT'} fontSize={true} />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  border-bottom: 2px solid ${props => props.darkMode ? 'black' : '#fffcf5'};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  list-style: none;
  column-gap: 10px;
  justify-content: end;
  margin-right: 5vw;
  margin-left: 5vw;
  padding-inline-start: 0;
  width: 90vw;
`;
const Fezz = styled.div`
  margin-right: auto;
`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 40px;
  margin: 0;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;

export default NavBar;
