import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from '../../assets/buttons/LinkButton';
import DarkModeButton from '../../assets/buttons/DarModeButton';

const NavBar = ({ darkModeGetter, darkModeSetter }) => {
  const location = useLocation().pathname.split('/')[1];

  return (
    <NavbarContainer>
      <Fezz>
        <Link to='/projects' style={{textDecoration: 'none', color: 'black'}}>
          <RampartOneText darkMode={darkModeGetter}>
            FEZZ
          </RampartOneText>
        </Link>
        <PageMarker darkMode={darkModeGetter}>
          | {location.toUpperCase()}
        </PageMarker>
      </Fezz>

      <DarkModeButton darkModeGetter={darkModeGetter} darkModeSetter={darkModeSetter} />

      <LinkButton subDirectory={'/about'} textContent={'ABOUT'} fontSize={true} darkMode={darkModeGetter}/>
      <LinkButton subDirectory={'/gallery'} textContent={'GALLERY'} fontSize={true} darkMode={darkModeGetter}/>
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
  font-size: 40px;
  margin: 0;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;
const PageMarker = styled.h3`
  font-family: Rubik;
  font-size: 1.2rem;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;

export default NavBar;
