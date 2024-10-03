import { FC, useState, useEffect } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { motion } from 'framer-motion';

import AboutCard from '../components/molecules/AboutCard';
import NameCard from '../components/molecules/NameCard';
import LinkButton from '../assets/buttons/LinkButton';
import P5_PLANE from '../components/p5/P5_PLANE';

interface Props {
  setter: (open: boolean) => void,
};

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
              <Content>
                <NameCard />

                <EnterButton onClick={handleClick}>
                  <LinkButton
                    textContent='ENTER'
                    buttonSize={'large'}
                    isScaleAnimation={true} padding={false} onClick={handleClick} subDirectory={''} />
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

const Background = styled(motion.div)`
  background-image: radial-gradient(circle 80vh, white, ${(props: { showAbout: boolean}) => props.showAbout ? `rgb(255,255,255)`: `rgb(17, 100, 102)` });
  transform: translateY(${(props: { isclicked: boolean }) => props.isclicked ? '100px': '-100px'});
`;
const LandingPageContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;
`;
const LandingPageItem = styled.div`
  padding-bottom: 2em;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(30vh);
`;
const PProject = styled(LandingPageItem)`
  height: 100vh;
  width: 100vw;
  z-index: 1;
  opacity: ${(props: { isclicked: boolean }) => props.isclicked ? 0 : 1};
`;
const EnterButton = styled(LandingPageItem)`
  z-index: 3;
  // transform: translateY(5vh);
`;

export default LandingPage;
