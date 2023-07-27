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
  padding-inline-start: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
  list-style: none;
`;
const Contributions = styled.img`
  height: 150px;
`;

export default AboutmePage;
