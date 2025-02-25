import { FC, useContext } from 'react';
import { useDarkmode } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

import Socials from '../atoms/Socials';
import ContactForm from './ContactForm';

interface Props {
  viewSetter: (value: string) => void,
};

const ContactMe: FC<Props> = ({ viewSetter }) => {
  const { darkmode } = useDarkmode();

  const colors = {
    primary: '#ffffff',
    secondary: '#000000',
    tertiary: '#969696'
  };

  return (
    <Container>
      <Background darkmode={darkmode} />
      <FormWrap>
        <Title>Contact Me</Title>
        <Socials gap={'40px'} colors={colors} />
        <ContactForm viewSetter={viewSetter} />
      </FormWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;
const Background = styled.div`
  background: repeat 120px url('https://img.icons8.com/?size=100&id=iZfvYzdS1M3T&format=png&color=${(props: {darkmode: boolean}) => props.darkmode ? 'ffffff': '000000'} ');
  background-size: 150px;
  height: 800px;
  width: 50%;
  opacity: 0.2;

  @media screen and (max-width: 600px) {
    display: none;
  }
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

export default ContactMe;
