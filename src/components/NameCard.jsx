import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import '../assets/fonts/fonts.css';

import Socials from '../components/Socials.jsx'

const NameCard = () => {
  return (
    <section>
      <NameCardContainer style={{order: 0}}>
          <RampartOneText>FEZZ</RampartOneText>
          <JuliusSansOneText>
            {'FULL STACK DEVELOPER'
              .split('')
              .map(letter=> <span style={{letterSpacing: '0.20em'}}>{letter}</span>
            )}
          </JuliusSansOneText>
          <JuliusSansOneText>
            {'Freelancer, previously SeatGeek Commerce Marketplace Engineering'
              .toUpperCase()
              .split('')
              .map(letter=> <span style={{letterSpacing: '0.0250em', fontSize: '18px'}}>{letter}</span>
            )}
          </JuliusSansOneText>
          <JuliusSansOneText>
            <span style={{fontSize: '18px'}}>
              BASED IN NEW YORK CITY
            </span>
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
`;

const NameCardItem = styled.li`
  height: 1.8em;
`;

const JuliusSansOneText = styled.p`
  font-family: var(--font-family-julius-sans-one);
  font-weight: var(--font-weight-normal);
  font-size: 25px;
`;

const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 50px;
  height: 105px;
`;
export default NameCard;