import React from 'react';
import styled from 'styled-components';

import Socials from './Socials';
import ContactForm from './ContactForm';

export default function ContactMe() {
  return (
    <Container>
      <Background/>
      <FormWrap>
        <Title>Contact Me</Title>
        <ContactForm />
        <Socials gap={'10px'}/>
      </FormWrap>
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
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  font-family: Michroma;
`;

