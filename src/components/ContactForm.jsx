import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'

import LinkButton from '../assets/buttons/LinkButton';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

    emailjs.init('p1Pm1Q0_4BJ-G3HYU')

    emailjs
      .send('service_dna0xvk', 'template_twr9wfe', formData, 'YOUR_USER_ID')
      .then((response) => {
          console.log('Email sent successfully!', response);
          alert('Email sent successfully!');
          setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send email.');
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrap>
        <Img src="https://img.icons8.com/?size=100&id=61005&format=png&color=000000" alt="" />
        <Input
          placeholder='Full Name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required />
      </Wrap>

      <Wrap>
        <Img src="https://img.icons8.com/?size=100&id=85500&format=png&color=000000"/>
        <Input
          placeholder='Email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required />
      </Wrap>

      <Message
        placeholder='Message...'
        name='message'
        value={formData.message}
        onChange={handleChange}
        required />

      <LinkButton textContent='Submit' />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const Wrap = styled.div`
  display: flex;
  border: 1px solid black;
  height: 2rem;
  padding: 10px;
`;
const Img = styled.img`
  height: 50%;
  align-self: center;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 1.5rem;
`;
const Message = styled.textarea`
  height: 200px;
  width: 100%;
`;
