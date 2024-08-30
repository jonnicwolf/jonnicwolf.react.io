import React, { useContext } from 'react';
import { DarkmodeContext } from '../contexts/Darkmode';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SocialIcon } from 'react-social-icons';

const Socials = ({ gap }) => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <SocialsList gap={gap}>
      <SocialItem
        title='LinkedIn'
        variants={items} custom={0}
        bgColor={darkmode ? 'white' : 'black'}
        fgColor={darkmode ? 'grey' : 'white'}
        url='https://www.linkedin.com/in/jonathannarine/'
        target='_blank' />
      <SocialItem
          title='GitHub'
          variants={items} custom={1}
          bgColor={darkmode ? 'white' : 'black'}
          fgColor={darkmode ? 'grey' : 'white'}
          url='https://github.com/jonnicwolf'
          target='_blank' />
      <SocialItem
          title='Instagram'
          variants={items} custom={2}
          bgColor={darkmode ? 'white' : 'black'}
          fgColor={darkmode ? 'grey' : 'white'}
          url='https://www.instagram.com/fezz_xiii/' target='_blank' />
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

const SocialItem = styled(motion(SocialIcon))`
  &: hover {
    transform: scale(1.2);
  }
  transition: all 0.3s linear;
`;

const SocialsList = styled.div`
  column-gap: ${props => props.gap};
  display: flex;
  position: relative;
  z-index: 9;
`;

export default Socials;
