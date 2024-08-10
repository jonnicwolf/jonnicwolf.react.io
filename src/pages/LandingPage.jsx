import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import NameCard from '../components/NameCard.jsx';
import LinkButton from '../assets/buttons/LinkButton.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';

export default function LandingPage () {
  const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   if (isClicked) {
  //     window.location.reload();
  //   }
  // }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Background
      variants={backgroundAnimation}
      initial="hidden"
      animate={isClicked ? 'show': 'hidden'}
      >
      <LandingPageContainer>
        <NameCard />

        <EnterButton onClick={handleClick}>
          <LinkButton
            textContent='ENTER'
            buttonSize={'large'}
            isScaleAnimation={true} />
        </EnterButton>

        <PProject isClicked={isClicked}>
          <P5_PLANE strokeColor={255} showSun={false}/>
        </PProject>
      </LandingPageContainer>
    </Background>
  );
};

const backgroundAnimation = {
  hidden: {
    height: '100%',
    width: '100%'
  },
  show: {
    height: '800px',
    width: '800px',
    transition: { duration: 2 },
  }
};

const Background = styled(motion.div)`
  background-image: radial-gradient(circle 750px, white, rgb(42, 191, 250));
  
`;
const LandingPageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  overflow: hidden;
`;
const LandingPageItem = styled.div`
  padding-bottom: 2em;
`;
const PProject = styled(LandingPageItem)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: ${props => props.isClicked ? 0 : 1}
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 99;
  transform: translateY(5vh);
`;
