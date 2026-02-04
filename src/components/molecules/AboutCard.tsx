import { FC, useState, } from 'react';
import { useDarkmode } from '../../Darkmode';
// @ts-ignore
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from './ContactMe';
import TechnologyCard from './TechnologyCard';
import BioCard from './BioCard';
import ExpCard from './ExpCard';

interface ContainerProps {
  darkmode: boolean,
}

const AboutCard: FC = () => {
  const [view, setView] = useState<string>('');
  const { darkmode } = useDarkmode();

  function renderView (view: string) {
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

const Container = styled(motion.div)<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  height: 800px;
  width: 900px;
  border: 1px solid ${props => props.darkmode ? 'white' : 'none'};
  animation: ${fadeIn} 1.5s forwards;
  background-color: ${props => props.darkmode ? '#969696' : 'none'};
  color: ${props => props.darkmode ? 'white' : 'black'};
  scale: 0.9;

  @media screen and (max-width: 600px) {
    height: 100%;
    width: 80%;
  };
`;

export default AboutCard;
