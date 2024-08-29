import React, { useState, useEffect, useMemo, useContext } from 'react';
import { DarkmodeContext } from '../components/contexts/Darkmode.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import Button from '../assets/buttons/Button.jsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';
import P5_LOADER from '../components/p5/P5_LOADER.jsx';
import P5_ANJA from '../components/p5/P5_ANJA.jsx';
import P5_GEOSTORM from '../components/p5/P5_GEOSTORM.jsx';

const GalleryPage = () => {
  const [index, setIndex] = useState(0);
  const { darkmode } = useContext(DarkmodeContext);
  const { projectName } = useParams();
  const navigate = useNavigate();
  const controls = useAnimation();

  const sw = window.innerWidth > 720;

  const p5_projs = useMemo(() => [
    { component: P5_PLANE, title: 'HORIZON', name: 'horizon', info: 'MOVE YOUR CURSOR'},
    { component: P5_LORENZ_ATTRACTOR, title: 'CHAOS THEORY', name: 'chaos-theory' },
    { component: P5_LOADER, title: 'AFTERIMAGE', name: 'afterimage' },
    { component: P5_ANJA, title: 'ANJA', name: 'anja', info: 'MOVE YOUR CURSOR' },
    { component: P5_GEOSTORM, title: 'TRIGON SQUALL', name: 'trigon-squall' },
  ], []);

  useEffect(() => {
    const animationSequence = async () => {
      await controls.start('hidden');
      await controls.start('show');
    };
    animationSequence();

    const param_index = p5_projs.findIndex(item => item.name === projectName);
    param_index >= 0
      ? setIndex(param_index)
      : navigate(`/gallery/${p5_projs[0].name}`);
  }, [projectName, p5_projs, navigate, controls]);

  const handleNext = () => {
    const nextIndex = (index + 1) % p5_projs.length;
    navigate(`/gallery/${p5_projs[nextIndex].name}`);
  };

  const handleLast = () => {
    const prevIndex = (index - 1 + p5_projs.length) % p5_projs.length;
    navigate(`/gallery/${p5_projs[prevIndex].name}`);
  };

  const handleSwipes = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handleLast,
  });

  const { component, title, info } = p5_projs[index];
  const ActiveProject = component;

  return (
    <Container {...handleSwipes}>
      <DisplayBox>
        <ControlBox darkMode={darkmode}>
          <Button text={'LAST'} onclick={handleLast} />
          <Title>{title}</Title>
          <Button text={'NEXT'} onclick={handleNext} />
        </ControlBox>
        {info && <Info
          darkMode={darkmode}
          variants={infoAnimation}
          initial='hidden'
          animate='show'>
            {info}
        </Info>}
        <ActiveProject
          strokeColor={200}
          showControls={true}
          showSun={true}
          isMobile={sw} />
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100vh;
  overflow: hidden;
  height: 100vh;
`;
const Title = styled.h2`
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
`;
const DisplayBox = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const ControlBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 10px 0 10px;
  width: 30%;
  text-wrap: wrap;
  color: ${props => (props.darkMode ? 'white' : 'black')};
  background-color: ${props => (props.darkMode ? '150' : null)};
  font-color: ${props => (props.darkMode ? 'grey' : 'white')};
  z-index: 3;
  @media screen and (max-width: 1024px) {
    margin-top: 6vh;
    gap: 5vw;
    justify-content: center;
    width: auto;
  }
`;
const Info = styled(motion.div)`
  font-family: Rubik;
  font-weight: bold;
  color: ${props => (props.darkMode ? 'white' : 'black')};
  background-color: ${props => (props.darkMode ? '150' : null)};
  font-color: ${props => (props.darkMode ? 'grey' : 'white')};
  border: 1px solid ${props => props.darkMode ? 'white' : 'grey'};
  padding: 25px 80px;
`;
const infoAnimation = {
  hidden: { scale: 0, opacity: 0, borderWidth: '2px' },
  show: {
    scale: 1,
    opacity: 1,
    borderWidth: '0px',
    transition: {
      delay: 2,
      scale: { duration: 0.5 },
      opacity: { duration: 3 },
      borderWidth: { duration: 4, ease: 'linear' },
    },
  },
};

export default GalleryPage;
