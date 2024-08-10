import React, { useState } from 'react';
import styled from 'styled-components';

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
    
  }
  return (
    <Form action="https://formspree.io/f/your-endpoint" method="POST">
      <Wrap>
        <Img src="https://img.icons8.com/?size=100&id=61005&format=png&color=000000" alt="" />
        <Input placeholder='Full Name'required />
      </Wrap>

      <Wrap>
        <Img src="https://img.icons8.com/?size=100&id=85500&format=png&color=000000"/>
        <Input placeholder='Email' required />
      </Wrap>

      <Message placeholder='Message...' required></Message>
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
