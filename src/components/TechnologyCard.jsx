import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export default function TechnologyCard() {
  return (
    <Container>
      TechnologyCard
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
  justify-content: space-between;
  list-style: none;
  overflow: scroll;
  height: 800px;
  width: 800px;
  border: 1px solid grey;
  animation: ${fadeIn} 1.5s forwards;
`;
