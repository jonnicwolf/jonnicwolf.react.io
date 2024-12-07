import { FC, useContext } from 'react';
import { useDarkmode } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { SocialIcon } from 'react-social-icons';

interface Colors {
  primary: string,
  secondary: string,
  tertiary: string,
};
interface Props {
  gap: string,
  colors: Colors
};

interface SocialsListProps {
  gap: string,
};

const Socials: FC<Props> = ({ gap, colors }) => {
  const { darkmode } = useDarkmode();
  const {primary, secondary, tertiary} = colors;

  return (
    <SocialsList gap={gap}>
      <SocialItem
        title='LinkedIn'
        variants={items} custom={0}
        bgColor={darkmode ? primary : secondary}
        fgColor={darkmode ? tertiary : primary}
        url='https://www.linkedin.com/in/jonathannarine/'
        target='_blank' />
      <SocialItem
          title='GitHub'
          variants={items} custom={1}
          bgColor={darkmode ? primary : secondary}
          fgColor={darkmode ? tertiary : primary}
          url='https://github.com/jonnicwolf'
          target='_blank' />
      <SocialItem
          title='Instagram'
          variants={items} custom={2}
          bgColor={darkmode ? primary : secondary}
          fgColor={darkmode ? tertiary : primary}
          url='https://www.instagram.com/fezz_xiii/' target='_blank' />
    </SocialsList>
  );
};

const items = {
  hidden: {
    transition: { when: 'afterChildren' }
  },
  show: (i: number) => ({
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

const SocialsList = styled.div<SocialsListProps>`
  column-gap: ${(props: { gap: string; }) => props.gap};
  display: flex;
  position: relative;
  z-index: 9;
`;

export default Socials;
