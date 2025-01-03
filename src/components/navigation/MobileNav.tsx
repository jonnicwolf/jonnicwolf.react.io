import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
import styled from 'styled-components';

import Hamburger from '../../assets/icons/Hamburger';

interface Props {
  enterClicked: boolean
};

const MobileNav: FC<Props> = ({ enterClicked }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container isOpen={isOpen} enterClicked={enterClicked}>
      <Nav>
        <Fezz>FEZZ</Fezz>
        <Hamburger isOpen={isOpen} isOpenSet={setIsOpen} />
      </Nav>

      <Item to='/' onClick={() =>setIsOpen(!isOpen)}>HOME</Item>
      <Item to='/gallery' onClick={() =>setIsOpen(!isOpen)}>GALLERY</Item>
      <ExternalItem onClick={()=> setIsOpen(!isOpen)} href='https://www.linkedin.com/in/jonathannarine/'>LINKEDIN</ExternalItem>
      {/* borderBottom is 1px solid grey here to better define the menu bottom */}
      <ExternalItem
        onClick={() =>setIsOpen(!isOpen)}
        href='https://github.com/jonnicwolf'
        style={{borderBottom: '1px solid grey'}}>GITHUB</ExternalItem>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  background-color: #fffcf5;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${(props: {isOpen: boolean}) => props.isOpen ? 'auto' : '8vh'};
  overflow: hidden;
  transition: height .3s linear;
  width: 100%;
  z-index: ${(props: {enterClicked: boolean}) => props.enterClicked ? '3' : '2'};
`;
const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
const Item = styled(Link)`
  border-bottom: 2px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const ExternalItem = styled.a`
  border-bottom: 2px solid grey;
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
  font-size: 1.5rem;
`;

export default MobileNav;
