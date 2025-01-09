import { FC, useState, useEffect } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import AboutCard from '../components/molecules/AboutCard';
import NameCard from '../components/molecules/NameCard';
import LinkButton from '../assets/buttons/LinkButton';
import P5_PLANE from '../components/p5/P5_PLANE';

interface Props {
  setter: (open: boolean) => void,
};

interface Background {
  showAbout: boolean,
  isclicked: boolean ,
}
interface LandingPageContainer{};
interface LandingPageItem {};
interface Content {};
interface PProject {
  isclicked: boolean,
};
interface EnterButton {};
interface Button {};

const LandingPage: FC<Props> = ({ setter }) => {
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
    setter(true);
    setTimeout(() => {
      setShowAbout(true);
    }, 2500);
  };

  const backgroundAnimation = {
    hidden: {
      height: '120vh',
      width: '100vw',
      y: -100,
    },
    show: {
      height: isMobile ? '60vh' :'800px',
      width: isMobile ? '90vw' :'800px',
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
              <Content>
                <NameCard />

                <EnterButton onClick={handleClick}>
                  <Button
                    color='white'
                    textContent='ENTER'
                    buttonSize={'large'}
                    isScaleAnimation={true}
                    padding={false}
                    onClick={handleClick}
                    subDirectory={''} />
                </EnterButton>
              </Content>

              <PProject isclicked={isClicked}>
                <P5_PLANE strokeColor={255} showSun={false} />
              </PProject>
            </LandingPageContainer>
        }
    </Background>
  );
};

const Background = styled(motion.div)<Background>`
  background-image: radial-gradient(circle 80vh, #62c2c4, ${props => props.showAbout ? `rgb(255,255,255)`: `rgb(17, 100, 102)` });
  transform: translateY(${props => props.isclicked ? '100px': '-100px'});

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vw;
  };
`;
const LandingPageContainer = styled.div<LandingPageContainer>`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;
const LandingPageItem = styled.div<LandingPageItem>`
  padding-bottom: 2em;
`;
const Content = styled.div<Content>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(20vh);
  z-index: 3;

  @media onlyscreen and (max-width: 700px) {
    transform: translateY(10vh);
  }
`;
const PProject = styled(LandingPageItem)<PProject>`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: ${props => props.isclicked ? 0 : 1};

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
const EnterButton = styled(LandingPageItem)<EnterButton>`
  z-index: 3;
  @media only screen and (max-width: 700px) {
    scale: 0.6;
  }
`;
const Button = styled(LinkButton)<Button>`
  color: white !important;
  border: 2px solid white !important;
`;

export default LandingPage;
