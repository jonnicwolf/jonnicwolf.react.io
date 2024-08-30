import React, { useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from '../../assets/buttons/LinkButton';
import DarkModeButton from '../../assets/buttons/DarModeButton';

const NavBar = () => {
  const location = useLocation().pathname.split('/')[1] || 'HOME';
  const { darkmode, toggleDarkmode } = useContext(DarkmodeContext);

  return (
    <NavbarContainer>
      <Fezz>
        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
          <RampartOneText darkMode={darkmode}>
            FEZZ
          </RampartOneText>
        </Link>
        <PageMarker darkMode={darkmode}>
          | {location.toUpperCase()}
        </PageMarker>
      </Fezz>

      <DarkModeButton darkModeGetter={darkmode} darkModeSetter={toggleDarkmode} />
      <LinkButton subDirectory={'/gallery'} textContent={'GALLERY'}  darkMode={darkmode} fontSize padding />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
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
  border-bottom: 2px solid #a3a3a3;
`;
const Fezz = styled.div`
  margin-right: auto;
  padding-left: 15px;
  padding-top: 15px;
  display: flex;
  gap: 1vh;
`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 2.5rem;
  margin: 0;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;
const PageMarker = styled.h3`
  font-family: Rubik;
  font-size: 1.2rem;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;

export default NavBar;
