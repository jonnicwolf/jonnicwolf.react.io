import { FC, useState, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from './ContactMe';
import TechnologyCard from './TechnologyCard';
import BioCard from './BioCard';
import ExpCard from './ExpCard';

interface ContainerProps {
  darkmode: boolean,
};

const AboutCard: FC = () => {
  const [view, setView] = useState<string>('');
  const { darkmode } = useContext(DarkmodeContext);

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
  align-items: center;
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow: scroll;
  height: 800px;
  width: 800px;
  border: 1px solid ${(props: {darkmode: boolean}) => (props.darkmode ? 'white' : 'none')};
  animation: ${fadeIn} 1.5s forwards;
  color: ${(props: {darkmode: boolean}) => (props.darkmode ? 'white' : 'black')};
  background-color: ${(props: {darkmode: boolean}) => (props.darkmode ? '#969696' : null)};
  font-color: ${(props: {darkmode: boolean}) => (props.darkmode ? 'grey' : 'white')};

  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 80vw;
  };
`;

export default AboutCard;