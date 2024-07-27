import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import NameCard from '../components/NameCard.jsx';
import LinkButton from '../assets/buttons/LinkButton.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';

export default function LandingPage () {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <Background
      variants={backgroundAnimation}
      initial="hidden"
      animate='show'>
      <LandingPageContainer>
        <NameCard />

        <EnterButton 
          onClick={handleClick}
          variants={backgroundAnimation}
          initial="hidden"
          animate="show"
          >
          <LinkButton
            subDirectory={'/projects'}
            textContent='ENTER'
            buttonSize={'large'}
            isScaleAnimation={true} />
        </EnterButton>

        <PProject>
          <P5_PLANE strokeColor={255} showSun={false}/>
        </PProject>
      </LandingPageContainer>
    </Background>
  );
};

const backgroundAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.5 },
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
`;
const LandingPageItem = styled.div`
  padding-bottom: 2em;
`;
const PProject = styled(LandingPageItem)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 99;
  transform: translateY(5vh);
`;
