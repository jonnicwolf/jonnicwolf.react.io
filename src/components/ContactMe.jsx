import React from 'react';
import styled from 'styled-components';

import Socials from './Socials';

export default function ContactMe() {
  return (
    <Container>
      <Background/>
      
      <Title>Contact Me</Title>
      
      <Socials gap={'10px'}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
const Background = styled.div`
  background: repeat url('https://img.icons8.com/?size=100&id=iZfvYzdS1M3T&format=png&color=000000');
  width: 50%;
  height: 800px;
  width: 400px;
  opacity: 0.2
`;
const Title = styled.h1`
  font-family: Michroma;
`;

