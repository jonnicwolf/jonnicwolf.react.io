import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LinkButton from '../Button';
import Icons8_about_me_50 from '../../assets/icons/Icons8_about_me_50.png';


const NavBar = () => {
  return (
    <NavbarContainer>
      <Fezz>
        <Link to='/projects' style={{textDecoration: 'none', color: 'black'}} >
          <RampartOneText>FEZZ</RampartOneText>
        </Link>
      </Fezz>
      <About to='/fezz'>
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
  // font-family: Permanent Marker;
  // text-decoration: none;
  // font-size: 2rem;
  // color: black;
  // &:hover {
  //   transition: all .4s ease-in;
  //   background-color: black;
  //   color: white;
  //   border-radius: 10px;
  //   padding: 2px;
  // }

`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 40px;
  margin: 0;
`;

export default NavBar;
