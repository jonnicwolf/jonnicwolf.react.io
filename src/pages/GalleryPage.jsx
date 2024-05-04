import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../assets/buttons/Button.jsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';
import P5_TORUS from '../components/p5/P5_TORUS.jsx';
import P5_LOADER from '../components/p5/P5_LOADER.jsx';

const GalleryPage = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('');
  const p5_projs = [P5_TORUS, P5_PLANE, P5_LORENZ_ATTRACTOR, P5_LOADER];

  useEffect(() => {
    const titles = ['TORUS', 'PLANE', 'LORENZ ATTRACTOR', 'TRILATERAL GHOSTS'];
    setTitle(titles[index]);
  }, [index]);

  const handleNext = (prevIndex) => setIndex(prevIndex >= p5_projs.length - 1 ? 0 : prevIndex + 1) ;
  const handleLast = (prevIndex) => setIndex(prevIndex <= 0 ? p5_projs.length - 1 : prevIndex - 1) ;

  const ActiveProject = p5_projs[index];

  return (
    <Container>
      <DisplayBox>
        <ControlBox darkMode={darkMode}>
          <Button text={'LAST'} onclick={ () => handleLast(index) } darkModeGetter={ darkMode } />
          <Title>{ title }</Title>
          <Button text={'NEXT'} onclick={ () => handleNext(index) } darkModeGetter={ darkMode } />
        </ControlBox>
        <ActiveProject strokeColor={200}/>
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`
  height: 80%;
  max-height: 100vh;
  overflow: hidden;

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
    margin-top: 5vh;
    gap: 5vw;
    justify-content: center;
    width: auto;
  }
`;

export default GalleryPage;
