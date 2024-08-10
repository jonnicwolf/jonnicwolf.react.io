import React from 'react';
import styled from 'styled-components';

import AboutCard from '../components/AboutCard';

const Test = () => {

  return (
    <Container>
      {/* WELL HELLO MOTHERFUCKER, NOTHING TO SEE HERE */}
      <AboutCard />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 26vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Test;
