import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Hamburger from '../../assets/icons/Hamburger';

interface Props {
  enterClicked: boolean,
};

interface ContainerProps {
  isOpen: boolean,
  enterClicked: boolean,
};
interface NavProps {};
interface ItemProps {};
interface ExternalItemProps {};
interface FezzProps {};

const MobileNav: FC<Props> = ({ enterClicked }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container isOpen={isOpen} enterClicked={enterClicked}>
      <Nav>
        <Fezz>JN</Fezz>
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

const Container = styled.div<ContainerProps>`
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
  z-index: ${props => props.enterClicked ? '4' : '3'};
`;
const Nav = styled.div<NavProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;
const Item = styled(Link)<ItemProps>`
  border-bottom: 2px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const ExternalItem = styled.a<ExternalItemProps>`
  border-bottom: 2px solid grey;
  color: black;
  font-family: Rubik;
  font-weight: bold;
  padding: 5vw;
  text-align: center;
  text-decoration: none;
`;
const Fezz = styled.p<FezzProps>`
  padding: 0;
  margin: 0;
  font-family: Permanent Marker;
  font-size: 2rem;
`;

export default MobileNav;
