import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NameCard from '../components/NameCard.jsx';

const LandingPage = () => {
  return (
    <Background>
      <LandingPageContainer>
        <li><NameCard /></li>
        <li>Space for p5js project</li>
        <LandingPageItem>
          <Link to='/projects'>
            <EntryButton>ENTER</EntryButton>
          </Link>
        </LandingPageItem>
      </LandingPageContainer>
    </Background>
  )
};

const Background = styled.div`
  background-image: radial-gradient(circle 1550px, white, rgb(42, 191, 250));
  // background-size: 1000px;
  opacity: 100%;
  margin: 20px 20px;
`;

const LandingPageContainer = styled.ul`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const LandingPageItem = styled.li`
  padding-bottom: 2em;
`

const EntryButton = styled.button`
  padding: 15px 80px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 15px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 1px solid rgb(0,0,0);
  z-index: 1;
  color: rgb(0,0,0);
  left: 20px;

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: red;
    transition: all 0.3s ease;
  }

  &:hover {
    color: rgb(0,0,0);
    border: 1px solid rgb(0,0,0);
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
`;

export default LandingPage;