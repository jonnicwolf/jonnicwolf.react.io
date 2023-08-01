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
`;
const Contributions = styled.img`
  height: 15vh;
  transform: translateX(30px);
  margin-bottom: 2vh;
`;

export default AboutmePage;
