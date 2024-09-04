import { FC, useState, useEffect } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AboutCard from '../components/molecules/AboutCard.js';
import NameCard from '../components/molecules/NameCard.js';
import LinkButton from '../assets/buttons/LinkButton.tsx';
import P5_PLANE from '../components/p5/P5_PLANE.js';

interface Props {
  setEnterClicked: (open: boolean) => void,
};

const LandingPage: FC<Props> = ({ setEnterClicked }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showAbout, setShowAbout] = useState<boolean>(false);
  const isMobile: boolean = window.innerWidth < 720;

  // Lock scroll when landing page is at full size
  useEffect(() => {
    !isClicked
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = 'auto'

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isClicked]);

  const handleClick = (): void => {
    setIsClicked(!isClicked);
    setEnterClicked(true);
    setTimeout(() => {
      setShowAbout(true);
    }, 2500);
  };

  const backgroundAnimation = {
    hidden: {
      height: '102vh',
      width: '100vw',
      y: -100,
    },
    show: {
      height: isMobile ? '60vh' :'800px',
      width: isMobile ? '80vw' :'800px',
      y: 70,
      transition: { duration: 2 },
    }
  };

  return (
    <Background
      isclicked={isClicked}
      variants={backgroundAnimation}
      initial="hidden"
      animate={isClicked ? 'show': 'hidden'}
      showAbout={showAbout} >
        {showAbout
          ? <AboutCard />
          : <LandingPageContainer>
              <NameCard />

              <EnterButton onClick={handleClick}>
                <LinkButton
                  textContent='ENTER'
                  buttonSize={'large'}
                  isScaleAnimation={true} padding={false} onClick={function (): void | null {
                throw new Error('Function not implemented.');
              } } subDirectory={''} />
              </EnterButton>

              <PProject isclicked={isClicked}>
                <P5_PLANE strokeColor={255} showSun={false}/>
              </PProject>
            </LandingPageContainer>
        }
    </Background>
  );
};

const Background = styled(motion.div)`
  background-image: radial-gradient(circle 750px, white, ${(props: { showAbout: boolean}) => props.showAbout ? `rgb(255,255,255)`: `rgb(42, 191, 250)` });
  transform: translateY(${(props: { isclicked: boolean }) => props.isclicked ? '100px': '-100px'});
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
  opacity: ${(props: { isclicked: boolean }) => props.isclicked ? 0 : 1};
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 3;
  transform: translateY(5vh);
`;

export default LandingPage;
