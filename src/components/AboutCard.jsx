import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from './ContactMe';
import TechnologyCard from './TechnologyCard';
import LinkButton from '../assets/buttons/LinkButton';
import BioCard from './BioCard';

export default function AboutCard() {
  const [view, setView] = useState(null);

  function renderView (view) {
    switch (view) {
      case 'contact':
        return <ContactMe />
      case 'tech':
        return <TechnologyCard />
      // case 'offline':
      //   return <OfflineCard />
      // case 'exp':
      //   return <ExperienceCard />
      default:
        return <BioCard />
    };
  };

  return (
    <Container>
      {renderView(view)}
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow: scroll;
  height: 800px;
  width: 800px;
  border: 1px solid grey;
  animation: ${fadeIn} 1.5s forwards;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const Headshot = styled.img`
  height: 100%;
  width: 60%;
  margin: 0;
  box-shadow: -2rem 2rem 20rem;
`;
const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  font-size: 1rem;
  gap: 20px;
`;
const IntroText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-family: Michroma;
`;
const P = styled.p`
  font-size: 1rem;
  margin: 0;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;
