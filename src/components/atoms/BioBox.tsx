import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import Socials from './Socials';

const BioBox: FC = () => {
  return (
    <Container>
      <PermanentMarkerText>
        Jon Fezz Narine
      </PermanentMarkerText>

      <NotoSansDisplay>
        <strong>
          Web Developer | NYC
        </strong>
      </NotoSansDisplay>

      <NotoSansDisplay>
        <p>Fezz is a full-stack web developer based in the heart of NYC. He has worked with elite teams to create user-centric products that are both intuitive and visually appealing.<br/>
          His expertise lies in front-end development, with proficiency in JavaScript, Python, and Swift.</p>
        <p>Passionate about collaboration, Fezz has successfully crafted seamless interfaces. Additionally, Fezz holds a keen interest in cloud architecture, game engines, and generative art. These diverse interests and experiences continuously inform and elevate his work.</p>
        <p>Whether you have a project in mind or simply want to connect, feel free to reach out!</p>
      </NotoSansDisplay>

      <SocialsContainer>
        <Socials gap={'2vw'} />
      </SocialsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const NotoSansDisplay = styled.div`
  color: #f7f7f7;
  font-family: var(--font-family-rubik);
  font-size: 16px;
`;
const PermanentMarkerText = styled.div`
  font-family: Permanent Marker;
  font-weight: var(--font-weight-bold);
  padding: 0;
  margin: 0;
  font-size: 25px;
  letter-spacing: 0.0120em;
  color:  #f7f7f7;
`;
const SocialsContainer = styled.div`
  @media only screen and (max-width: 768px) {
    align-self: center;
  }
`;

export default BioBox;
