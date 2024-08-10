import React from 'react';
import styled from 'styled-components';

export default function ContactForm() {
  return (
    <Form action="https://formspree.io/f/your-endpoint" method="POST">
      
      <Wrap>
        <Img src="https://img.icons8.com/?size=100&id=61005&format=png&color=000000" alt="" />
        <Input placeholder=''required />
      </Wrap>

      
      <input type="email" id="email" name="email" required />

      
      <textarea id="message" name="message" required></textarea>

      <button type="submit">Send</button>
    </Form>
  );
};

const Wrap = styled.div`
  border: 1px solid black;
  padding: 0;
  margin: 0;
`
const Img = styled.img`
  // scale: 0.2;
  margin: 0;
  padding: 0;
`
const Input = styled.input`
  border: none;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
