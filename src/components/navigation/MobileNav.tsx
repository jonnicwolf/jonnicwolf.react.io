import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Hamburger from '../../assets/icons/Hamburger';

interface Props {
  enterClicked: boolean,
};

interface Container {
  isOpen: boolean,
  enterClicked: boolean,
};
interface Nav {};
interface Item {};
interface ExternalItem {};
interface Fezz {};

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

      <ExternalItem
        onClick={() =>setIsOpen(!isOpen)}
        href='https://github.com/jonnicwolf'>
          GITHUB</ExternalItem>
    </Container>
  );
};

const Container = styled.div<Container>`
  position: fixed;
  background-color: #fffcf5;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: ${props => props.isOpen ? 'auto' : '8vh'};
  overflow: hidden;
  transition: height .3s linear;
  width: 100%;
  z-index: ${props => props.enterClicked ? '2' : '3'};
`;
const Nav = styled.div<Nav>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
const Item = styled(Link)<Item>`
  border-bottom: 2px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const ExternalItem = styled.a<ExternalItem>`
  border-bottom: 2px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const Fezz = styled.p<Fezz>`
  padding: 0;
  margin: 0;
  font-family: Rampart One;
  font-size: 2rem;
`;

export default MobileNav;
