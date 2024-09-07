import React, { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import styled from 'styled-components';

import LinkButton from '../../assets/buttons/LinkButton';
import DarkModeButton from '../../assets/buttons/DarkModeButton';

const NavBar: FC = () => {
  const location = useLocation().pathname.split('/')[1] || 'HOME';
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <NavbarContainer darkmode={darkmode}>
      <Fezz>
        <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
          <RampartOneText darkmode={darkmode}>
            FEZZ
          </RampartOneText>
        </Link>
        <PageMarker darkmode={darkmode}>
          | {location.toUpperCase()}
        </PageMarker>
      </Fezz>

      <DarkModeButton />
      <LinkButton
        subDirectory={'/gallery'}
        textContent={'GALLERY'}
        padding
        onClick={function (): void | null { throw new Error('Function not implemented.'); } } buttonSize={''} isScaleAnimation={null} />
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
  margin: 0 5vw 5vw;
  padding-inline-start: 0;
  width: 97vw;
  border-bottom: 2px solid #a3a3a3;
  background-color: ${(props: {darkmode: boolean}) => props.darkmode ? '#5c5c5b' : '#fffcf5' };
  position: fixed;
  z-index: 3;
`;
const Fezz = styled.div`
  margin-right: auto;
  padding-left: 15px;
  display: flex;
  align-items: center;
  gap: 1vh;
`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 2.5rem;
  margin: 0;
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;
const PageMarker = styled.h3`
  font-family: Rubik;
  font-size: 1.2rem;
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;

export default NavBar;
