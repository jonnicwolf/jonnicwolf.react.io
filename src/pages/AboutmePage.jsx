import React from 'react';
import styled from 'styled-components';
import BioBox from '../components/BioBox';
import TimeLine from '../components/TimeLine';

import headshot from '../assets/icons/Headshot.png';

export default function AboutmePage ({ darkMode }) {
  return (
    <AboutMeContainer>
      <BioContainer>
        <HeadshotWrapper>
          <Headshot src={headshot}/>
        </HeadshotWrapper>
        <BioBoxWrapper>
          <BioBox darkMode={darkMode} />
        </BioBoxWrapper>
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
  padding-top: 5vh;
`;
const BioBoxWrapper = styled.div`
  padding: 5px;
  padding-left: 60px;
`;
const BioContainer = styled.div`
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 90%;
  padding: 15px;
  background: linear-gradient(0.25turn, #434352 30%, #c7c8c9 100%, #f7f7f7);
  max-width: 1124px;
  @media only screen and (max-width: 857px) {
    flex-direction: column;
  }
`;
const HeadshotWrapper = styled.div`
  box-shadow: -16px 13px 26px 0px rgba(0,0,0,0.75);
  padding: 0;
  margin: 0;
`;
const Headshot = styled.img`
  height: 20rem;
  width: 20rem;
  clip-path: 
  transform: translateX(-5px);
  clip-path: polygon(1% 1%, 99% 0%, 100% 99%, 1% 99%);
  @media only screen and (max-width: 767px) {
   height: 20rem;
   width: 20rem;
  }
`;
