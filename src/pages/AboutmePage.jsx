import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/AboutMeCarousel';

const AboutmePage = () => {
  return (
    <AboutMeContainer>
      <Contributions src="https://ghchart.rshah.org/jonnicwolf" alt="My Github Contributions" />
      <Carousel />
    </AboutMeContainer>
  )
};

const AboutMeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-inline-start: 0px;
  padding-bottom: 5vh;
`;
const Contributions = styled.img`
  height: 15vh;
  margin-bottom: 2vh;
  @media (max-width: 1000px) {
    width: 70vw;
  }
  @media (max-width: 580px) {
    width: 90vw;
  }
  @media (max-width: 385px) {
    height: 20vh;
    width: 98vw;
  }
`;

export default AboutmePage;
