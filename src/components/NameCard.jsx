import React from 'react';
import '../assets/fonts/fonts.css';
import styled from 'styled-components';

import Socials from '../components/Socials.jsx'

const NameCard = () => {
  return (
    <section>
      <NameCardContainer style={{order: 0}}>
        <li style={{height: '105px'}}>
          <RampartOneText>FEZZ</RampartOneText>
        </li>

        <NameCardItem>
          <JuliusSansOneText>
            {'WEB DEV / MIXOLOGIST'
              .split('')
              .map(letter=> <span style={{letterSpacing: '0.20em'}}>{letter}</span>
            )}
          </JuliusSansOneText>
        </NameCardItem>

        <NameCardItem style={{}}>
          <JuliusSansOneText>
            {'Freelancer, previously SeatGeek Commerce Marketplace Engineering'
              .toUpperCase()
              .split('')
              .map(letter=> <span style={{letterSpacing: '0.0250em', fontSize: '18px'}}>{letter}</span>
            )}
          </JuliusSansOneText>
        </NameCardItem>

        <NameCardItem>
          <JuliusSansOneText>
            <span style={{fontSize: '18px'}}>
              BASED IN NEW YORK CITY
            </span>
          </JuliusSansOneText>
        </NameCardItem>
        <NameCardItem>

        </NameCardItem>
        <Socials />
      </NameCardContainer>
    </section>
  )
};

const NameCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
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
`;
export default NameCard;