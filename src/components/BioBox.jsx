import React from 'react';
import styled from 'styled-components';

const BioBox = () => {
  return (
    <div>
      <PermanentMarkerText>
        Hi there! I'm Jon Narine,
      </PermanentMarkerText>
      <NotoSansDisplay>
      a full-stack web developer and mixologist based in NYC. I specialize in front-end development and am proficient in coding with JavaScript and Python.
      <br></br><br></br>
      I have a passion for working in teams to create products that are important to end-users. I love the collaborative process of bringing ideas to life, and take pride in delivering products that are both user-friendly and aesthetically pleasing.
      <br></br><br></br>
      In addition to my web development skills, I'm also interested in self-driving AI technology, platform architecture, and front-end development. 
      <br></br><br></br>
      I'm constantly seeking to expand my knowledge and skills in these areas, and believe that staying up-to-date with the latest technologies and practices is key to delivering high-quality work.
      <br></br><br></br>
      If you have a project in mind or just want to say hi, feel free to drop me a line below.
      <br></br><br></br>
      I'd love to hear from you!
      </NotoSansDisplay>
    </div>
  )
};

const NotoSansDisplay = styled.p`
  font-family: var(--font-family-noto-sans-display);
  font-weight: var(--font-weight-bold);
  font-size: 16px;
  color: dark brown;
`;
const PermanentMarkerText = styled.p`
  font-family: var(--font-family-permanent-marker);
  font-weight: var(--font-weight-bold);
  font-size: 25px;
`;

export default BioBox;