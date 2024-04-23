import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Hamburger from '../../assets/icons/Hamburger';

const MobileNav = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('MobileNav', isOpen)

  return (
    <Container isOpen={isOpen}>
      <Nav>
        <Fezz>FEZZ</Fezz>
        <Hamburger
          darkMode={darkMode}
          isOpen={isOpen}
          isOpenSet={setIsOpen}
        />
      </Nav>
      <Item to='/projects'>HOME</Item>
      <Item to='/about'   >ABOUT</Item>
      <Item to='/gallery' >GALLERY</Item>
      <ExternalItem href='https://www.linkedin.com/in/jonathannarine/' >LINKEDIN</ExternalItem>
      <ExternalItem href='https://github.com/jonnicwolf' style={{borderBottom: '1px solid grey'}}>GITHUB</ExternalItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-top: 1px solid grey;
  height: ${props => props.isOpen ? '55vh' : '5vh'};
  overflow: hidden;
  transition: height .3s linear;
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 35%;
`;
const Item = styled(Link)`
  border-bottom: 1px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const ExternalItem = styled.a`
  border-bottom: 1px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const Fezz = styled.p`
  padding: 0;
  margin: 0;
  font-family: var(--font-family-rampart-one);
  font-size: 25px;
`;

export default MobileNav;
