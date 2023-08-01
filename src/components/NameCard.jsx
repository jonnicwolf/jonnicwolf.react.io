import React from 'react';
import styled from 'styled-components';
import '../assets/fonts/fonts.css';

import Socials from '../components/Socials.jsx'

const NameCard = () => {
  return (
    <section>
      <NameCardContainer>
          <RampartOneText>FEZZ</RampartOneText>
          <FSD>
            FULL STACK DEVELOPER
          </FSD>
          <CurrentRole>
            FREELANCER, PREVIOUSLY SEATGEEK COMMERCE MARKETPLACE ENGINEERING
          </CurrentRole>
          <Hometown>
              BASED IN NEW YORK CITY
          </Hometown>
        <br /><br />

          <Socials />
      </NameCardContainer>
    </section>
  )
};

const CurrentRole = styled.p`
  font-family: Julius Sans One;
  font-size: 20px;
  letter-spacing: 0.020em;
  margin: 0;
  @media (max-width: 850px) {
    font-size: 15px;
  }
  @media (max-width: 650px) {
    font-size: 12px;
  }
  @media (max-width: 530px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    text-align: center;
  }
`;
const FSD = styled.p`
  font-family: Julius Sans One;
  font-size: 25px;
  letter-spacing: 0.020em;
  @media (max-width: 530px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const Hometown = styled.p`
  font-family: Julius Sans One;
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const NameCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-size: 50px;
  height: 10vh;
  margin: 0;
  margin-top: 5vh;
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;

export default NameCard;
