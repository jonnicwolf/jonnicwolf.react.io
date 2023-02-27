import React from 'react';
import styled from 'styled-components';
import NameCard from '../components/NameCard.jsx';
import ProLinks from './ProLinks';

const LandingPage = () => {
  return (
    <Background>
      <NameCard />
      <br /><br /><br /><br /><br />
      <span>Space for p5js project</span>
      <ProLinks />
      <button>Enter</button>
    </Background>
  )
};

const Background = styled.div`
  background-image: radial-gradient(circle 1550px, white, rgb(42, 191, 250)); 
  opacity: 100%;
  height: 1000px;
`

export default LandingPage;