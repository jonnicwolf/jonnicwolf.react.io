import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NameCard from '../components/NameCard.jsx';
import Button from '../components/Button.jsx'

const LandingPage = () => {
  return (
    <Background>
      <LandingPageContainer>
        <NameCard />
        <LandingPageItem>
          <LinkContainer>
            <Link to="/projects">
              <Button textContent='ENTER'/>
            </Link>
          </LinkContainer>
        </LandingPageItem>
      </LandingPageContainer>
    </Background>
  )
};

const Background = styled.div`
  background-image: radial-gradient(circle 1550px, white, rgb(42, 191, 250));
  opacity: 100%;
  margin: 20px 20px;

  @media (max-width: 400px) {
    width: 475px;
  }
    background-image: radial-gradient(circle 750px, white, rgb(42, 191, 250));
`;
const LandingPageContainer = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;
const LandingPageItem = styled.div`
  padding-bottom: 2em;
  padding-right: 40px;
`;
const LinkContainer = styled.div`
  transform: translateX(15px);
`;

export default LandingPage;