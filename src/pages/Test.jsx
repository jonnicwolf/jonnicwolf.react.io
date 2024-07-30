import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';

const Test = () => {
  return (
    <Container>
      {/* WELL HELLO MOTHERFUCKER, NOTHING TO SEE HERE */}
      <ProjectCard />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Rubik;
  font-weight: bold;
  font-size: 2em;
  height: 100vh;
`;

export default Test;
