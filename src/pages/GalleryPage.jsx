import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../assets/buttons/Button.jsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';
import P5_TORUS from '../components/p5/P5_TORUS.jsx';

const GalleryPage = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('');
  const p5_projs = [P5_TORUS, P5_PLANE, P5_LORENZ_ATTRACTOR];
  
  useEffect(() => {
    const titles = ['TORUS', 'PLANE', 'LORENZ ATTRACTOR'];
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
          <Button text={'NEXT'} onclick={ () => handleNext(index)} darkModeGetter={ darkMode } />
        </ControlBox>
        <ActiveProject strokeColor={darkMode ? 50 : 200}/>
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
`;

const Title = styled.h3`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
`;
const DisplayBox = styled.div`
  height: 100vh;
`;
const ControlBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  border: 1px solid grey;
  width: 30%;
  color: ${props => props.darkModeGetter ? 'white' : 'black'};
  background-color: ${props => props.darkModeGetter ? 'grey' : null};
  transition: all .3s linear;

  &:hover {
    box-shadow: 0 15px 15px grey;
  }
`;

export default GalleryPage;
