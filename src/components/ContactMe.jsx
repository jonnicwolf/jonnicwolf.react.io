import React from 'react';
import styled from 'styled-components';

import Socials from './Socials';
import ContactForm from './ContactForm';

export default function ContactMe({ viewSetter }) {
  return (
    <Container>
      <Background />
      <FormWrap>
        <Title>Contact Me</Title>
        <ContactForm viewSetter={viewSetter} />
        <Socials gap={'10px'}/>
      </FormWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
`;
const Background = styled.div`
  background: repeat 120px url('https://img.icons8.com/?size=100&id=iZfvYzdS1M3T&format=png&color=000000');
  background-size: 200px;
  height: 800px;
  width: 56%;
  opacity: 0.2;
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;
const Title = styled.h1`
  font-family: Michroma;
`;
