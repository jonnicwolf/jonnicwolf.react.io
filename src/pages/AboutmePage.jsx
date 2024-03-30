import React from 'react';
import styled from 'styled-components';
import BioBox from '../components/BioBox';
const headshot = require('../assets/icons/Headshot.png')

const AboutmePage = () => {
  return (
    <AboutMeContainer>
      <BioContainer>
        <Headshot src={headshot}/>
        <BioBox />
      </BioContainer>
      <Contributions src="https://ghchart.rshah.org/jonnicwolf" alt="My Github Contributions" />
    </AboutMeContainer>
  )
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
`;
const Contributions = styled.img`
  height: 15vh;
  margin-bottom: 2vh;
  @media only screen and (max-width: 767px) {
    width: 70vw;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90vw;
  }
  @media only screen and (min-width: 1024px) {
    height: 20vh;
    width: 90vw;
  }
`;
const Headshot = styled.img`
  height: 45rem;
  width: 45rem;
  border-radius: 50%;
`;

export default AboutmePage;
