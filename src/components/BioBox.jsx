import React from 'react';
import styled from 'styled-components';

import Socials from './Socials';

const BioBox = ({ darkMode }) => {
  return (
    <>
      <PermanentMarkerText darkMode={darkMode}>
        Jon Fezz Narine
      </PermanentMarkerText>

      <NotoSansDisplay darkMode={darkMode}>
        <strong>
          Web Developer | NYC
        </strong>
      </NotoSansDisplay>

      <NotoSansDisplay darkMode={darkMode}>
        <p>Fezz is a full-stack web developer based in the heart of NYC. He has worked with teams to create user-centric products that are both intuitive and visually appealing. His expertise lies in front-end development, with proficiency in JavaScript, Python, and Swift.</p>
        <p>Passionate about collaboration, Fezz has successfully crafted seamless interfaces. Additionally, Fezz holds a keen interest in cloud architecture, game engines, and generative art. These diverse interests and experiences continuously inform and elevate his work.</p>
        <p>Whether you have a project in mind or simply want to connect, feel free to reach out!</p>
      </NotoSansDisplay>

      <SocialsContainer darkMode={darkMode}>
        <Socials />
      </SocialsContainer>
    </>
  );
};

const NotoSansDisplay = styled.p`
  color: #f7f7f7;
  font-family: var(--font-family-rubik);
  font-size: 16px;
`;
const PermanentMarkerText = styled.p`
  font-family: Permanent Marker;
  font-weight: var(--font-weight-bold);
  padding: 0;
  margin: 0;
  font-size: 25px;
  letter-spacing: 0.0120em;
  color:  #f7f7f7 ;
`;
const SocialsContainer = styled.div`
  @media (max-width: 385px) {
    display: none;
  }
`;

export default BioBox;
