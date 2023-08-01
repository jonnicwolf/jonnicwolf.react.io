import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

const BioBox = () => {
  return (
    <div>
      <PermanentMarkerText>
        Hi there!
        <br/>
        <a
          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/export?format=pdf"
          style={{textDecoration: 'none', color: 'red'}} rel='noopener noreferrer'
          target='_blank'>
            I'm Jon Narine
        </a>,
      </PermanentMarkerText>
      <NotoSansDisplay>
        a full-stack web developer based in NYC. I specialize in front-end development and am proficient in coding with JavaScript, Python, and Go.
        <br></br><br></br>
        I have a passion for working in teams to create products that are important to end-users. I love the collaborative process of bringing ideas to life, and take pride in delivering products that are both user-friendly and aesthetically pleasing.
        <br></br><br></br>
        In addition to my web development skills, I'm also interested in cybersecurity, platform architecture, and front-end development. 
        <br></br><br></br>
        If you have a project in mind or just want to say hi, feel free to drop me a line below.
        <br></br><br></br>
        I'd love to hear from you!
      </NotoSansDisplay>
      <Socials/>
    </div>
  )
};

const NotoSansDisplay = styled.p`
  color: dark brown;
  font-family: Noto Sans Display;
  font-weight: var(--font-weight-bold);
  font-size: 16px;
`;
const PermanentMarkerText = styled.p`
  font-family: Permanent Marker;
  font-weight: var(--font-weight-bold);
  font-size: 25px;
  letter-spacing: 0.0120em;
`;

export default BioBox;
