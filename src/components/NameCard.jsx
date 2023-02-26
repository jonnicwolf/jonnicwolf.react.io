import React from 'react';
import '../assets/fonts/fonts.css';
import styled from 'styled-components';

const NameCard = () => {
  return (
    <section>
      <RampartOneText>FEZZ</RampartOneText>
      <JuliusSansOneText>
        {'FULL STACK DEV / MIXOLOGIST'
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
    </section>
  )
};

const ClimateCrisisText = styled.p`
  font-family: var(--font-family-climate-crisis);
  font-weight: var(--font-weight-normal);
`
const JuliusSansOneText = styled.p`
  font-family: var(--font-family-julius-sans-one);
  font-weight: var(--font-weight-normal);
  font-size: 25px;
`
const RampartOneText = styled.p`
  font-family: var(--font-family-rampart-one);
  font-weight: var(--font-weight-normal);
  font-size: 50px;
`
export default NameCard;