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

interface BackgroundProps {
  showAbout: boolean,
  hasEntered: boolean,
};
interface LandingPageContainerProps {};
interface LandingPageItemProps {};
interface ContentProps {};
interface PProjectProps {
  hasEntered: boolean,
};
interface EnterButtonProps {};
interface ButtonProps {};

const LandingPage: FC<Props> = ({ setter }) => {
  const [showAbout, setShowAbout] = useState(false);
  const isMobile = window.innerWidth < 720;

  useEffect(() => {
    const hasEntered = sessionStorage.getItem('hasEntered');

    if (hasEntered) {
      setShowAbout(true);
      setter(true);
    };
  }, [setter]);

  useEffect(() => {
    document.body.style.overflow = showAbout ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showAbout]);

  const handleClick = () => {
    sessionStorage.setItem('hasEntered', 'true');
    setter(true);

    setTimeout(() => {
      setShowAbout(true);
    }, 2500);
  };
  
  const hasEntered = Boolean(sessionStorage.getItem('hasEntered'));

  const backgroundAnimation = {
    hidden: {
      height: '100vh',
      width: '100vw',
      y: 0,
    },
    show: {
      height: isMobile ? '125vh' :'800px',
      width: isMobile ? '90vw' :'900px',
      y: 70,
      transition: { duration: 2 },
    }
  };

  return (
    <Background
      hasEntered={hasEntered}
      variants={backgroundAnimation}
      initial={hasEntered? false : "hidden"}
      animate={hasEntered? 'show': 'hidden'}
      showAbout={showAbout}>
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

              <PProject hasEntered={hasEntered}>
                <P5_PLANE strokeColor={255} showSun={false} />
              </PProject>
            </LandingPageContainer>
        }
    </Background>
  );
};

const Background = styled(motion.div)<BackgroundProps>`
  background-image: radial-gradient(circle 80vh, #62c2c4, ${props => props.showAbout ? `rgb(255,255,255)`: `rgb(17, 100, 102)` });
  transform: translateY(${props => props.hasEntered ? '100px': '-100px'}); 

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 5vw;
    height: 50%;
  };
`;
const LandingPageContainer = styled.div<LandingPageContainerProps>`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;
const LandingPageItem = styled.div<LandingPageItemProps>`
  padding-bottom: 2em;
`;
const Content = styled.div<ContentProps>`
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
const PProject = styled(LandingPageItem)<PProjectProps>`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: ${props => props.hasEntered ? 0 : 1};

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;
const EnterButton = styled(LandingPageItem)<EnterButtonProps>`
  z-index: 3;
  @media only screen and (max-width: 700px) {
    scale: 0.6;
  }
`;
const Button = styled(LinkButton)<ButtonProps>`
  color: white !important;
  border: 2px solid white !important;
`;

export default LandingPage;
