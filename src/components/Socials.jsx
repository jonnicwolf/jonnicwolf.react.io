import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const Socials = () => {
  return (
    <SocialsList>
        <SocialIcon
          url='https://www.linkedin.com/in/jonathannarine/'
          target='_blank' />
        <SocialIcon
          url='https://github.com/jonnicwolf'
          target='_blank' />
        <SocialIcon
          url='mailto:jonnciwolf@gmail.com'
          target='_blank' />
        <SocialIcon
          url='https://docs.google.com/viewer?url=https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/export?format=pdf' 
          target='_blank' />
    </SocialsList>
  );
};


const SocialsList = styled.div`
  column-gap: 10px;
  display: flex;
  padding-inline-start: 0px;
`;

export default Socials;
