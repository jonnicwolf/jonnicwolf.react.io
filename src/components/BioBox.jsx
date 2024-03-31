import React from 'react';
import styled from 'styled-components';
import Socials from './Socials';

const BioBox = () => {
  return (
    <div>
      <PermanentMarkerText>
        Hello!
        <br/>
        <a
          href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1L--uuFkBDl2thpDIuyzyUWNqv5Q0BShsKrwGvy6DusU/export?format=pdf"
          style={{textDecoration: 'none', color: 'red'}} rel='noopener noreferrer'
          target='_blank'>
            I'm Jon Narine
        </a>,
      </PermanentMarkerText>
      <NotoSansDisplay>
        A full-stack web developer based in the heart of NYC. My expertise lies in front-end development, with a proficiency in JavaScript, Python, and Swift.
        <br></br><br></br>
        Collaboration is my cornerstone—I thrive on working with teams to bring user-centric products to fruition. I take pride in crafting interfaces that are both intuitive and visually appealing.
        <br></br><br></br>
        In addition to web development, I have a keen interest in cloud architecture, game engines, and generative art.
        <br></br><br></br>
        Whether you have a project in mind or simply want to connect, feel free to reach out below.
        <br></br><br></br>
        I look forward to collaborating with you!
      </NotoSansDisplay>
      <SocialsContainer>
        <Socials />
      </SocialsContainer>
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
const SocialsContainer = styled.div`
  @media (max-width: 385px) {
    display: none;
  }
`;

export default BioBox;
