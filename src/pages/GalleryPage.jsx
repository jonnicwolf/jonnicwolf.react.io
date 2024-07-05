import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../assets/buttons/Button.jsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';
import P5_TORUS from '../components/p5/P5_TORUS.jsx';
import P5_LOADER from '../components/p5/P5_LOADER.jsx';
import P5_ANJA from '../components/p5/P5_ANJA.jsx';
import P5_GEOSTORM from '../components/p5/P5_GEOSTORM.jsx';

const GalleryPage = ({ darkMode }) => {
  const { project } = useParams();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('');
  const p5_projs = [
    // { component: P5_ , title: '', name: '' },
    { component: P5_TORUS, title: 'TORUS', name: 'torus' },
    { component: P5_PLANE, title: 'HORIZON', name: 'horizon' },
    { component: P5_LORENZ_ATTRACTOR, title: 'CHAOS THEORY', name: 'chaos-theory' },
    { component: P5_ANJA, title: 'ANJA', name: 'anja' },
    { component: P5_GEOSTORM, title: 'TRIGON SQUALL', name: 'trigon-squall' },
  ];

  useEffect(() => {
    const index = p5_projs.findIndex( proj => proj.name === project);
    if (index >= 0) {
      setIndex(index);
      setTitle(p5_projs[index].title);
    } else {
      navigate('/gallery/torus');
    };
  }, [index]);

  const handleNext = (index) => {
    setIndex(index >= p5_projs.length - 1 ? 0 : index + 1);
    navigate(`/gallery/${p5_projs[index].name}`);
  };
  const handleLast = (index) => {
    setIndex(index <= 0 ? p5_projs.length - 1 : index - 1);
    navigate(`/gallery/${p5_projs[index].name}`);
  };

  const ActiveProject = p5_projs[index].component;

  return (
    <Container>
      <DisplayBox>
        <ControlBox darkMode={darkMode}>
          <Button text={'LAST'} onclick={ () => handleLast(index) } darkModeGetter={ darkMode } />
          <Title>{ title }</Title>
          <Button text={'NEXT'} onclick={ () => handleNext(index) } darkModeGetter={ darkMode } />
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
  color:            ${props => props.darkMode ? 'white' : 'black'};
  background-color: ${props => props.darkMode ? '150'   : null};
  font-color:       ${props => props.darkMode ? 'grey'  : 'white'};
  @media screen and (max-width: 1024px) {
    margin-top: 6vh;
    gap: 5vw;
    justify-content: center;
    width: auto;
  }
`;

export default GalleryPage;
