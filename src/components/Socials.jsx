import React from 'react';
import styled from 'styled-components';

import { SocialIcon } from 'react-social-icons';

const Socials = () => {
  return (
    <SocialsList>
      <SocialIcon url='https://www.linkedin.com/in/jonathannarine/' target='_blank' />
      <SocialIcon url='https://github.com/jonnicwolf' target='_blank' />
      <SocialIcon url='https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/edit?usp=sharing' target='_blank' />
    </SocialsList>
  );
};

const SocialsList = styled.div`
  column-gap: 10px;
  display: flex;
  position: relative;
  z-index: 9;
`;

export default Socials;
