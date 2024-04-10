import React from 'react';
import styled from 'styled-components';

import NameCard from '../components/NameCard.jsx';
import LinkButton from '../assets/buttons/Button.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';

export default function LandingPage () {
  return (
    <Background>
      <LandingPageContainer>
        <NameCard />

        <EnterButton>
          <LinkButton subDirectory={'/projects'} textContent='ENTER' buttonSize={'large'}/>
        </EnterButton>

        <PProject>
          <P5_PLANE/>
        </PProject>
      </LandingPageContainer>
    </Background>
  );
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
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 99;
  padding-top: 3vh;
`;
