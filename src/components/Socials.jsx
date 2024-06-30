import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SocialIcon } from 'react-social-icons';

const Socials = ({ gap }) => {
  return (
    <SocialsList gap={gap}>
      <SocialItem custom={0} variants={items} url='https://www.linkedin.com/in/jonathannarine/' target='_blank' />
      <SocialItem custom={1} variants={items} url='https://github.com/jonnicwolf' target='_blank' />
      <SocialItem custom={2} variants={items} url='https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/edit?usp=sharing' target='_blank' />
    </SocialsList>
  );
};

const items = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren' }
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 1.5,
      duration: 1,
    }
  })
};

const SocialItem = styled(SocialIcon)``

const SocialsList = styled.div`
  column-gap: ${props => props.gap};
  display: flex;
  position: relative;
  z-index: 9;
`;

export default Socials;
