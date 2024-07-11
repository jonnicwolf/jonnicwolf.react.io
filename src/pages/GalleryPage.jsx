import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

import Button from '../assets/buttons/Button.jsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';
import P5_TORUS from '../components/p5/P5_TORUS.jsx';
import P5_LOADER from '../components/p5/P5_LOADER.jsx';
import P5_ANJA from '../components/p5/P5_ANJA.jsx';
import P5_GEOSTORM from '../components/p5/P5_GEOSTORM.jsx';

const GalleryPage = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const { projectName } = useParams();
  const navigate = useNavigate();

  const p5_projs = useMemo(() => [
    { component: P5_TORUS, title: 'TORUS', name: 'torus' },
    { component: P5_PLANE, title: 'HORIZON', name: 'horizon' },
    { component: P5_LORENZ_ATTRACTOR, title: 'CHAOS THEORY', name: 'chaos-theory' },
    { component: P5_LOADER, title: 'AFTERIMAGE', name: 'afterimage' },
    { component: P5_ANJA, title: 'ANJA', name: 'anja' },
    { component: P5_GEOSTORM, title: 'TRIGON SQUALL', name: 'trigon-squall' },
  ], []);

  useEffect(() => {
    const param_index = p5_projs.findIndex(item => item.name === projectName);
    param_index >= 0
      ? setIndex(param_index)
      : navigate(`/gallery/${p5_projs[0].name}`);
  }, [projectName, p5_projs, navigate]);

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

  const ActiveProject = p5_projs[index].component;
  const projectTitle = p5_projs[index].title;

  return (
    <Container {...handleSwipes}>
      <DisplayBox>
        <ControlBox darkMode={darkMode}>
          <Button text={'LAST'} onclick={handleLast} darkModeGetter={darkMode} />
          <Title>{projectTitle}</Title>
          <Button text={'NEXT'} onclick={handleNext} darkModeGetter={darkMode} />
        </ControlBox>
        <ActiveProject strokeColor={200} darkMode={darkMode} />
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
  @media screen and (max-width: 1024px) {
    margin-top: 6vh;
    gap: 5vw;
    justify-content: center;
    width: auto;
  }
`;

export default GalleryPage;
