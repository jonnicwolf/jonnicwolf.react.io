import React from 'react';
import styled from 'styled-components';
import BioBox from '../components/BioBox';
import TimeLine from '../components/TimeLine';

import headshot from '../assets/icons/Headshot.png';

export default function AboutmePage ({ darkMode }) {
  return (
    <AboutMeContainer>
      <BioContainer>
        <Headshot src={headshot}/>
        <BioBox darkMode={darkMode} />
      </BioContainer>
      
      <TimeLine darkMode={darkMode} />
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  padding-top: 10vh;
`;
const BioContainer = styled.div`
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 90%;
  max-width: 1124px;
  @media only screen and (max-width: 857px) {
    flex-direction: column;
  }
`;
const Headshot = styled.img`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;

  @media only screen and (max-width: 767px) {
   height: 20rem;
   width: 20rem;
  }
`;
