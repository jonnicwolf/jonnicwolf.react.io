import React from 'react';
import styled from 'styled-components';

import LandingPage from './LandingPage';

const Test = () => {

  return (
    <Container>
      {/* WELL HELLO MOTHERFUCKER, NOTHING TO SEE HERE */}
      <LandingPage />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 26vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Rubik;
  font-weight: bold;
  font-size: 2em;
  height: 100vh;
`;

export default Test;
