import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NameCard: FC = () => {
  return (
    <Container
      variants={fadeIn}
      initial="hidden"
      animate="show" >
        <RampartOneText variants={items} custom={0} >
          FEZZ
        </RampartOneText>
        <FSD variants={items} custom={1}>
          FULL STACK SWE & CREATIVE DEV
        </FSD>
        <CurrentRole variants={items} custom={2} >
          FREELANCER, PREVIOUSLY SEATGEEK COMMERCE MARKETPLACE ENGINEERING
        </CurrentRole>
        <Hometown variants={items} custom={3} >
          BASED IN NEW YORK CITY
        </Hometown>
        <br /><br />
    </Container>
  );
};

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const items = {
  hidden: {
    y: -50,
  },
  show: (i: number) => ({
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1,
    }
  })
};

const CurrentRole = styled(motion.p)`
  font-family: Julius Sans One;
  font-size: 0.8rem;
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
  font-family: Michroma;
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 530px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const Hometown = styled(motion.p)`
  font-family: Julius Sans One;
  font-size: 1rem;
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;
const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;
const RampartOneText = styled(motion.p)`
  font-family: Rampart One;
  font-size: 7rem;
  margin: 0;
  @media (max-width: 400px) {
    font-size: 5rem;
  }
`;

export default NameCard;
