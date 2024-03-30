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

export default AboutmePage;
