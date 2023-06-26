// import React from 'react';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import '../assets/fonts/fonts.css';

import Socials from '../components/Socials.jsx'

const NameCard = () => {
  return (
    <section>
      <NameCardContainer style={{order: 0}}>
        <li key={uuidv4()} style={{height: '105px'}}>
          <RampartOneText>FEZZ</RampartOneText>
        </li>

        <NameCardItem key={uuidv4()}>
          <JuliusSansOneText size={'20px'} letterSpacing={'0.2em'}>
            FULL STACK DEVELOPER
          </JuliusSansOneText>
        </NameCardItem>

        <NameCardItem key={uuidv4()}>
          <JuliusSansOneText size={'16px'} letterSpacing={'0.0250em'}>
            FREELANCE, PREVIOUSLY SEATGEEK COMMERCE MARKETPLACE ENGINEERING
          </JuliusSansOneText>
        </NameCardItem>

        <NameCardItem key={uuidv4()}>
          <JuliusSansOneText size={'18px'}>
              BASED IN NEW YORK CITY
          </JuliusSansOneText>
        </NameCardItem>
        <br /><br />
        <NameCardItem key={uuidv4()}>
          <Socials />
        </NameCardItem >
      </NameCardContainer>
    </section>
  )
};

const NameCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding-left: 0;

  @media (max-width: 400px) {

  }
`;

const NameCardItem = styled.li`
  height: 1.8em;
  @media (max-width: 400px) {
    height: 6em;
  }
`;

const JuliusSansOneText = styled.p`
  font-family: var(--font-family-julius-sans-one);
  font-weight: var(--font-weight-normal);
  font-size: ${props => props.size};
  letter-spacing: ${props => props.letterSpacing};
  // @media (max-width: 400px) {
  //   font-size: 20px;
  // }
`;

const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 50px;
  @media (max-width: 400px) {
    font-size: 40px;
  }
`;
export default NameCard;
