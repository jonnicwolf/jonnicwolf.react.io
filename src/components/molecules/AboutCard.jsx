import React, { useState, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from '../molecules/ContactMe';
import TechnologyCard from '../molecules/TechnologyCard';
import BioCard from '../molecules/BioCard';
import ExpCard from '../molecules/ExpCard';

export default function AboutCard () {
  const [view, setView] = useState(null);
  const { darkmode } = useContext(DarkmodeContext);

  function renderView (view) {
    switch (view) {
      case 'bio':
        return <BioCard viewSetter={setView} />
      case 'contact':
        return <ContactMe viewSetter={setView} />
      case 'tech':
        return <TechnologyCard viewSetter={setView} />
      case 'exp':
        return <ExpCard viewSetter={setView} />
      default:
        return <BioCard viewSetter={setView} />
    };
  };

  return (
    <Container darkmode={darkmode}>
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
  border: 1px solid ${props => (props.darkmode ? 'white' : 'none')};
  animation: ${fadeIn} 1.5s forwards;
  color: ${props => (props.darkmode ? 'white' : 'black')};
  background-color: ${props => (props.darkmode ? '#969696' : null)};
  font-color: ${props => (props.darkmode ? 'grey' : 'white')};

  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 80vw;
  };
`;
