import React, { useState, useContext } from 'react';
import { DarkmodeContext } from '../Darkmode';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

import LinkButton from '../assets/buttons/LinkButton';

export default function ContactForm({ viewSetter }) {
  const { darkmode } = useContext(DarkmodeContext);
  const [formData, setFormData] = useState({
    to_name: '',
    from_name: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.init('p1Pm1Q0_4BJ-G3HYU');
    emailjs
      .send('service_dna0xvk', 'template_9zxn0jo', formData)
      .then((response) => {
          console.log('Email sent successfully!', response);
          alert('Email sent successfully!');
          setFormData({ to_name: '', from_name: '', message: '' });
      })
      .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email.');
      });
  };

  return (
    <Form>
      <Wrap darkmode={darkmode} >
        <Img src={`https://img.icons8.com/?size=100&id=61005&format=png&color=${darkmode ? 'ffffff' : '000000'}`} alt="" />
        <Input
          placeholder='Full Name'
          name='to_name'
          value={formData.to_name}
          onChange={handleChange}
          required />
      </Wrap>

      <Wrap darkmode={darkmode} >
        <Img src={`https://img.icons8.com/?size=100&id=85500&format=png&color=${darkmode ? 'ffffff' : '000000'}`}/>
        <Input
          placeholder='Email'
          name='from_name'
          value={formData.from_name}
          onChange={handleChange}
          required />
      </Wrap>

      <Message
        darkmode={darkmode}
        placeholder='Message...'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required />

      {formData.message && <LinkButton darkMode={darkmode} textContent='SUBMIT' isScaleAnimation={true} onClick={handleSubmit} />}

      <ButtonWrap>
        <LinkButton
          darkMode={darkmode}
          onClick={()=> viewSetter('bio')} 
          textContent='ABOUT'
          isScaleAnimation />
        <LinkButton
          darkMode={darkmode}
          onClick={()=> viewSetter('exp')}
          textContent='EXPERIENCE'
          isScaleAnimation />
        <LinkButton
          darkMode={darkmode}
          onClick={()=> viewSetter('tech')}
          textContent='TECH'
          isScaleAnimation />
      </ButtonWrap>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
`;
const Wrap = styled.div`
  display: flex;
  border: 1px solid black;
  height: 2rem;
  padding: 10px;
  color: ${props => (props.darkmode ? 'white' : 'black')};
  border: 1px solid ${props => (props.darkmode ? 'white' : 'black')};
`;
const ButtonWrap = styled(Wrap)`
  border: none;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const Img = styled.img`
  height: 50%;
  align-self: center;
  color: inherit;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 1.5rem;
  background: none;
  color: inherit;
  outline: none;
`;
const Message = styled.textarea`
  height: 200px;
  width: 100%;
  background: none;
  outline: none;
  border: 1px solid ${props => (props.darkmode ? 'white' : 'black')};
  color: ${props => (props.darkmode ? 'white' : 'black')};
`;
