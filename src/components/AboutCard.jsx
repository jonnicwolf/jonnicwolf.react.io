import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from './ContactMe';
import TechnologyCard from './TechnologyCard';
import BioCard from './BioCard';

export default function AboutCard() {
  const [view, setView] = useState(null);

  function renderView (view) {
    console.log(view)
    switch (view) {
      case 'bio':
        return <BioCard viewSetter={setView} />
      case 'contact':
        return <ContactMe viewSetter={setView} />
      case 'tech':
        return <TechnologyCard viewSetter={setView} />
      // case 'offline':
      //   return <OfflineCard />
      // case 'exp':
      //   return <ExperienceCard />
      default:
        return <BioCard viewSetter={setView} />
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
