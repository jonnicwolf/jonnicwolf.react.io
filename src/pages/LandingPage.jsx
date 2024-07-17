import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import NameCard from '../components/NameCard.jsx';
import LinkButton from '../assets/buttons/LinkButton.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';

export default function LandingPage () {
  const controls = useAnimation();
  const navigate = useNavigate();

  const handleClick = async () => {
    await controls.start({
      backgroundImage: 'radial-gradient(circle 2000px, white, rgb(42, 191, 250))',
      transition: { duration: 2 }
    });
    navigate('/projects');
  };

  return (
    <Background
      variants={backgroundAnimation}
      initial="hidden"
      animate='show'>
      <LandingPageContainer>
        <NameCard variants={items}/>

        <EnterButton onClick={handleClick}>
          <LinkButton
            subDirectory={'/projects'}
            textContent='ENTER'
            buttonSize={'large'}
            isScaleAnimation={true} />
        </EnterButton>

        <PProject>
          <P5_PLANE strokeColor={255} />
        </PProject>
      </LandingPageContainer>
    </Background>
  );
};

const backgroundAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1 },
  }
};
const items = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' }
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    delay: 2,
    transition: {
      delay: i * 0.3,
      duration: 1.5,
    }
  })
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
  z-index: 1;
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 99;
  transform: translateY(5vh);
`;
