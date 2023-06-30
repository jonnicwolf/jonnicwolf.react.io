import React from 'react';
import styled from 'styled-components';
import '../assets/fonts/fonts.css';

import Socials from '../components/Socials.jsx'

const NameCard = () => {
  return (
    <section>
      <NameCardContainer>
          <RampartOneText>FEZZ</RampartOneText>
          <JuliusSansOneText size={'25px'} letterSpacing={'0.020em'}>
            FULL STACK DEVELOPER
          </JuliusSansOneText>
          <JuliusSansOneText size={'14px'} letterSpacing={'0.020em'}>
            FREELANCER, PREVIOUSLY SEATGEEK COMMERCE MARKETPLACE ENGINEERING
          </JuliusSansOneText>
          <JuliusSansOneText size={'18px'}>
              BASED IN NEW YORK CITY
          </JuliusSansOneText>
        <br /><br />
          <Socials />
      </NameCardContainer>
    </section>
  )
};

const NameCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-left: 0;
  order: 0;
`;
const JuliusSansOneText = styled.p`
  font-family: var(--font-family-julius-sans-one);
  font-weight: var(--font-weight-normal);
  font-size: ${props => props.size};
  letter-spacing: ${props => props.letterSpacing};

`;
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 50px;
  height: 50px;
`;
export default NameCard;