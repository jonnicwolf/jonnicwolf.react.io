// import React from 'react';
import React from 'react';
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
          <JuliusSansOneText size={'12px'} letterSpacing={'0.025em'} mobile={true}>
            FREELANCE, PREVIOUSLY SEATGEEK COMMERCE MARKETPLACE ENGINEERING
          </JuliusSansOneText>
        </NameCardItem>

        <NameCardItem key={uuidv4()}>
          <JuliusSansOneText size={'15px'}>
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
`;
const NameCardItem = styled.li`
  height: 3em;
  @media (max-width: 400px) {
    height: 3em;
  }
`;
const JuliusSansOneText = styled.p`
  font-family: var(--font-family-julius-sans-one);
  font-weight: var(--font-weight-normal);
  font-size: ${props => props.size};
  letter-spacing: ${props => props.letterSpacing};

  @media (max-width: 400px) {
    overflow: hidden;
    white-space: nowrap;
    animation: ${props => props.mobile ? 'newsTickerStyle 10s linear infinite' : 'none'};
  }

  @keyframes newsTickerStyle {
    0% {
      transform: translateX(75%);
      opacity: 0;
    }
    10%, 90% { opacity: 0.5; }
    30%, 70% { opacity: 1; }
    100% {
      transform: translateX(-75%);
      opacity: 0;
    }
  }
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
