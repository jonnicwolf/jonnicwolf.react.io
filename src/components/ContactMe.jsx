import React from 'react';
import styled from 'styled-components';

import Socials from './Socials';
import ContactForm from './ContactForm';

export default function ContactMe({ viewSetter, darkmode }) {
  return (
    <Container>
      <Background darkmode={darkmode} />
      <FormWrap>
        <Title>Contact Me</Title>
        <Socials gap={'40px'} />
        <ContactForm viewSetter={viewSetter} darkmode={darkmode} />
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
  background: repeat 120px url('https://img.icons8.com/?size=100&id=iZfvYzdS1M3T&format=png&color=${props => props.darkmode ? 'ffffff': '000000'} ');
  background-size: 150px;
  height: 800px;
  width: 50%;
  opacity: 0.2;
`;
const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding: 60px;
`;
const Title = styled.h1`
  font-family: Michroma;
`;
