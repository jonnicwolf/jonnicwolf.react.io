import React from 'react';
import styled from 'styled-components';
import LinkButton from '../assets/buttons/LinkButton';

export default function BioCard ({ viewSetter }) {
  const headshot = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/kzdwwh2b4yepik7c5amm';

  return (
    <Wrap>
      <Headshot src={headshot} />

      <BioContainer>
        <IntroText>
          I'm Fezz, a Full-Stack Developer based in the heart of NYC.
        </IntroText>

        <P>
          I've spent the past years working with elite teams to create user-centric products that are both intuitive and visually appealing. My expertise lies in front-end development, with proficiency in JavaScript, Python, and Swift.
        </P>

        <P>
        These days, my time is spent collaborating with talented teams to craft seamless interfaces. I also delve into cloud architecture, game engines, and generative art, which continuously inform and elevate my work.
        </P>

        <P>
          Outside of coding, you'll find me exploring new tech, diving into creative projects, and always on the lookout for inspiring collaborations.
        </P>

        <Buttons>
          <LinkButton
            onClick={()=> viewSetter('contact')}
            textContent='GET IN TOUCH'
            isScaleAnimation />
          <LinkButton
            onClick={()=> viewSetter('exp')}
            textContent='WORK HISTORY'
            isScaleAnimation />
          <LinkButton
            onClick={()=> viewSetter('tech')}
            textContent='TECH'
            isScaleAnimation />
          {/* <LinkButton
            onClick={()=> viewSetter('offline')}
            textContent='OFFLINE'
            isScaleAnimation={true} /> */}
          
        </Buttons>
      </BioContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
const Headshot = styled.img`
  height: 100%;
  width: 60%;
  margin: 0;
  box-shadow: -2rem 2rem 20rem;
`;
const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  font-size: 1rem;
  gap: 20px;
`;
const IntroText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-family: Michroma;
`;
const P = styled.p`
  font-size: 1rem;
  margin: 0;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;
