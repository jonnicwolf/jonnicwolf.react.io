import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SocialIcon } from 'react-social-icons';

const Socials = ({ gap }) => {
  return (
    <SocialsList gap={gap}>
      <SocialItem variants={items} custom={0}>
        <SocialIcon  url='https://www.linkedin.com/in/jonathannarine/' target='_blank' />
      </SocialItem>

      <SocialItem variants={items} custom={1}>
        <SocialIcon url='https://github.com/jonnicwolf' target='_blank' />
      </SocialItem>

      <SocialItem variants={items} custom={2}>
        <SocialIcon url='https://www.instagram.com/fezz_xiii/' target='_blank' />
      </SocialItem>
    </SocialsList>
  );
};

const items = {
  hidden: {
    
    transition: { when: 'afterChildren' }
  },
  show: (i) => ({
    
    y: 0,
    transition: {
      delay: i * 1.1,
      duration: 2,
    }
  })
};

const SocialItem = styled(motion.div)``

const SocialsList = styled.div`
  column-gap: ${props => props.gap};
  display: flex;
  position: relative;
  z-index: 9;
`;

export default Socials;
