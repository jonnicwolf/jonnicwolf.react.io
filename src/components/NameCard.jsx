import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../assets/fonts/fonts.css';

import Socials from '../components/Socials.jsx'

const NameCard = () => {
  return (
    <Container>
        <RampartOneText variants={items} custom={0} >FEZZ</RampartOneText>
        <FSD            variants={items} custom={1} > FULL STACK DEVELOPER  </FSD>
        <CurrentRole    variants={items} custom={2} > FREELANCER, PREVIOUSLY SEATGEEK COMMERCE MARKETPLACE ENGINEERING </CurrentRole>
        <Hometown       variants={items} custom={3} > BASED IN NEW YORK CITY </Hometown>
        <br /><br />
        <Socials        variants={items} custom={4} gap={'1.5vw'}/>
    </Container>
  )
};

const items = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' }
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 1,
      duration: 2,
    }
  })
};


const CurrentRole = styled(motion.p)`
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
const FSD = styled(motion.p)`
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
const Hometown = styled(motion.p)`
  font-family: Julius Sans One;
  font-size: 18px;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const RampartOneText = styled(motion.p)`
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
