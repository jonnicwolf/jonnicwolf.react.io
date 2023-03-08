import React from 'react';
import styled from 'styled-components';

const ContactMe = () => {
  return (
    <div>
      <Form action=''>
        <FirstRow>
          <RowItem>
            <label htmlFor="name">*Full Name</label>
            <ContactInfoInput type="text" id='name' required />
          </RowItem>
          <RowItem>
            <label htmlFor="email">*Email</label>
            <ContactInfoInput type="text" id='email' required />
          </RowItem>
          <RowItem>
            <label htmlFor="company">Company</label>
            <ContactInfoInput type="text" id='company'/>
          </RowItem>
        </FirstRow>
        <SecondRow>
            <label htmlFor="message">Message</label>
            <MessageInput type="text" id='message'/>
        </SecondRow>
        <SubmitButton type='submit' onClick="location.href='mailto:jonnicwolf@gmail.com';">
          SUBMIT
        </SubmitButton>
      </Form>
    </div>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
const FirstRow = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 200px;
  font-family: var(--font-family-noto-sans-display);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  color: dark brown;
`
const SecondRow = styled.div`
  display: flex;
  flex-direction: column;
  font-family: var(--font-family-noto-sans-display);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  color: dark brown;
`
const ContactInfoInput = styled.input`
  height: 20px;
`
const MessageInput = styled.input`
  height: 300px;
  font-family: var(--font-family-noto-sans-display);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  color: dark brown;
`
const RowItem = styled.div`
  display: flex;
  flex-direction: column;
`
const SubmitButton = styled.button`
  padding: 15px 80px;
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 15px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  border: 1px solid rgb(0,0,0);
  z-index: 1;
  color: rgb(0,0,0);

  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    background: red;
    transition: all 0.3s ease;
  }

  &:hover {
    color: rgb(0,0,0);
    border: 1px solid rgb(0,0,0);
  }

  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
`;

export default ContactMe;