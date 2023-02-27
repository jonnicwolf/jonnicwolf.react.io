import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const Socials = () => {
  return (
    <SocialsList>
      <li>
        <SocialIcon
          url='https://www.linkedin.com/in/jonathannarine/'
          bgColor='white'
        />
      </li>
      <li>
        <SocialIcon
          url='https://github.com/jonnicwolf'
          bgColor='white'
          />
      </li>
    </SocialsList>
  )
};

const SocialsList = styled.ul`
  display: flex;  
  column-gap: 10px;
  list-style: none;
  padding-inline-start: 0px;
`;

export default Socials;