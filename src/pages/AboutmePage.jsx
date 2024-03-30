import React from 'react';
import styled from 'styled-components';
import BioBox from '../components/BioBox';
import Timeline from '../components/Timeline';

const headshot = require('../assets/icons/Headshot.png');

const AboutmePage = () => {
  return (
    <AboutMeContainer>
      <BioContainer>
        <Headshot src={headshot}/>
        <BioBox />
      </BioContainer>
      <Contributions src="https://ghchart.rshah.org/jonnicwolf" alt="My Github Contributions" />
      <Timeline />
    </AboutMeContainer>
  );
};

const AboutMeContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  padding-inline-start: 0px;
  padding-bottom: 5vh;
`;
const BioContainer = styled.div`
  display: flex; 
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: 90%;
  max-width: 1124px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
const Contributions = styled.img`
  margin-bottom: 2vh;
  height: auto;
  @media only screen and (max-width: 767px) {
    width: 95%;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 90vw;
  }
`;
const Headshot = styled.img`
  height: 35rem;
  width: 35rem;
  border-radius: 50%;

  @media only screen and (max-width: 767px) {
    border-radius: unset;
  }
`;

export default AboutmePage;
