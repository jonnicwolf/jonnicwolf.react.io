import React from 'react';
import { SocialIcon } from 'react-social-icons';
import styled from 'styled-components';

const Socials = () => {
  return (
    <SocialsList>
        {/* SocialIcons are from an external library, therefore inline styles are necessary. */}
        <SocialIcon
          url='https://www.linkedin.com/in/jonathannarine/'
          bgColor='white'
          fgColor='rgb(130,216,255)'
          style={{border: '1px solid black', borderRadius: '25px'}}
        />
        <SocialIcon
          url='https://github.com/jonnicwolf'
          bgColor='white'
          fgColor='rgb(130,216,255)'
          style={{border: '1px solid black', borderRadius: '25px'}}
        />
        <SocialIcon
          url='mailto:jonnciwolf@gmail.com'
          bgColor='white'
          fgColor='rgb(130,216,255)'
          style={{border: '1px solid black', borderRadius: '25px'}}
        />
        <SocialIcon
          url='https://docs.google.com/viewer?url=https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/export?format=pdf'
          bgColor='white'
          fgColor='rgb(130,216,255)'
          style={{border: '1px solid black', borderRadius: '25px'}}
          target='_blank'
        />
    </SocialsList>
  )
};


const SocialsList = styled.div`  
  column-gap: 10px;
  display: flex;
  padding-inline-start: 0px;
`;

export default Socials;
