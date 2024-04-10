import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LinkButton from '../Button';

const NavBar = ({ darkMode }) => {
  return (
    <NavbarContainer>
      <Fezz>
        <Link to='/projects' style={{textDecoration: 'none', color: 'black'}} >
          <RampartOneText darkMode={darkMode}>
            FEZZ
          </RampartOneText>
        </Link>
      </Fezz>
      <About to='/about'>
        <LinkButton textContent={'ABOUT'} fontSize={true}/>
      </About>
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
  margin-bottom: 10vh;
  padding-inline-start: 0;
  width: 90vw;
`;
const Fezz = styled.div`
  margin-right: auto;
`;
const About = styled(Link)`
  padding: 1vh;
  font-size: 2rem;
`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 40px;
  margin: 0;
  color: ${props => props.darkMode ? 'white' : 'black'};
  
`;

export default NavBar;
