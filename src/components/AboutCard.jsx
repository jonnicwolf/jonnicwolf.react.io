import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from './ContactMe';
import TechnologyCard from './TechnologyCard';
import BioCard from './BioCard';
import ExpCard from './ExpCard';

export default function AboutCard({ darkmode }) {
  const [view, setView] = useState(null);

  function renderView (view) {
    switch (view) {
      case 'bio':
        return <BioCard viewSetter={setView} darkmode={darkmode} />
      case 'contact':
        return <ContactMe viewSetter={setView} darkmode={darkmode} />
      case 'tech':
        return <TechnologyCard viewSetter={setView} darkmode={darkmode} />
      case 'exp':
        return <ExpCard viewSetter={setView} />
      default:
        return <BioCard viewSetter={setView} darkmode={darkmode} />
    };
  };

  return (
    <Container darkmode={darkmode} >
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
  border: 1px solid ${props => (props.darkmode ? 'white' : 'black')};
  animation: ${fadeIn} 1.5s forwards;
  color: ${props => (props.darkmode ? 'white' : 'black')};
  background-color: ${props => (props.darkmode ? '#969696' : null)};
  font-color: ${props => (props.darkmode ? 'grey' : 'white')};

  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 80vw;
  };
`;
