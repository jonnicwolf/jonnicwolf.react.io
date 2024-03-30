import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NameCard from '../components/NameCard.jsx';
import Button from '../components/Button.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';

const LandingPage = () => {
  return (
    <Background>
      <LandingPageContainer>
        <NameCard />

        <EnterButton>
            <Link to="/projects">
              <Button textContent='ENTER' buttonSize={'large'}/>
            </Link>
        </EnterButton>

        <PProject>
          <P5_PLANE/>
        </PProject>

      </LandingPageContainer>
    </Background>
  )
};

const Background = styled.div`
  background-image: radial-gradient(circle 750px, white, rgb(42, 191, 250));
  opacity: 100%;
`;
const LandingPageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
`;
const LandingPageItem = styled.div`
  padding-bottom: 2em;
`;
const PProject = styled(LandingPageItem)`
  z-index: 1;
`
const EnterButton = styled(LandingPageItem)`
  z-index: 99;
  padding-top: 3vh;
`;


export default LandingPage;
