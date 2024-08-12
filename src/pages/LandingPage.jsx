import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AboutCard from '../components/AboutCard.jsx';
import NameCard from '../components/NameCard.jsx';
import LinkButton from '../assets/buttons/LinkButton.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';

export default function LandingPage ({ darkmode }) {
  const [isClicked, setIsClicked] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    !isClicked
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setShowAbout(true);
    }, 2500);
  };

  return (
    <Background
      variants={backgroundAnimation}
      initial="hidden"
      animate={isClicked ? 'show': 'hidden'}
      showAbout={showAbout} >
        {showAbout
          ? <AboutCard darkmode={darkmode} />
          : <LandingPageContainer>
              <NameCard />

              <EnterButton onClick={handleClick}>
                <LinkButton
                  textContent='ENTER'
                  buttonSize={'large'}
                  isScaleAnimation={true} />
              </EnterButton>

              <PProject isclicked={isClicked}>
                <P5_PLANE strokeColor={255} showSun={false}/>
              </PProject>
            </LandingPageContainer>
        }
    </Background>
  );
};

const backgroundAnimation = {
  hidden: {
    height: '100vh',
    width: '100vw',
    y: -80
  },
  show: {
    height: '800px',
    width: '800px',
    y: 70,
    transition: { duration: 2 },
  }
};

const Background = styled(motion.div)`
  background-image: radial-gradient(circle 750px, white, ${props => props.showAbout ? `rgb(255,255,255)`: `rgb(42, 191, 250)`  });
  
  transform: translateY(${props => props.isclicked ? '100px': '-100px'});
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
  opacity: ${props => props.isclicked ? 0 : 1}
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 99;
  transform: translateY(5vh);
`;
