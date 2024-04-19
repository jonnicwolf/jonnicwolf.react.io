import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../assets/buttons/Button.jsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR.jsx';
import P5_PLANE from '../components/p5/P5_PLANE.jsx';
import P5_TORUS from '../components/p5/P5_TORUS.jsx';


const GalleryPage = ({ darkMode }) => {
  const [index, setIndex] = useState(0);
  const [title, setTitle] = useState('TORUS');
  const p5_projs = [ Torus, Plane, Lorenz ];
  
  const handleNext = () => setIndex( index >= p5_projs.length - 1 ? 0 : index++ );
  const handleLast = () => setIndex( index <= 1 ? p5_projs.length - 1 : index--);

  const ActiveProject = p5_projs[index];

  return (
    <Container>
      <DisplayBox>
        <ControlBox>
          <Last text={'LAST'}/>
          <Title>{title}</Title>
          <Next text={'NEXT'}/>
        </ControlBox>
        <ActiveProject />
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid red;
`;
const Title = styled.h3`
  height: 100%;
  display: flex;
  font-family: var(--font-family-rubik);
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
const DisplayBox = styled.div`
  height: 120vw;
`;
const ControlBox = styled.div`
  display: flex;
  float: right;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  border: 1px solid grey;
  width: 30%;
`;

const Next   = styled(Button)``;
const Last   = styled(Button)``;

const Torus  = styled(P5_TORUS)``;
const Lorenz = styled(P5_LORENZ_ATTRACTOR)``;
const Plane  = styled(P5_PLANE)``;

export default GalleryPage;
