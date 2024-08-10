import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

import ContactMe from './ContactMe';
import LinkButton from '../assets/buttons/LinkButton';

export default function AboutCard() {
  const [showContactMe, setShowContactMe] = useState(false);

  const headshot = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/kzdwwh2b4yepik7c5amm';

  function handleClick () {
    setShowContactMe(!showContactMe);
    console.log('clicked');
  };

  return (
    <Container>
      {/* {showContactMe
        ? */}
         <ContactMe />
        {/* : <>
            <Headshot src={headshot}/>

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

              <LinkButton onClick={handleClick} textContent='GET IN TOUCH' isScaleAnimation={true} />
            </BioContainer>
          </>
      } */}
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled(motion.div)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  list-style: none;
  overflow: scroll;
  height: 800px;
  width: 800px;
  border: 1px solid grey;
  animation: ${fadeIn} 1.5s forwards;
`;
const Headshot = styled.img`
  height: 100%;
  width: 60%;
  margin: 0;
  filter: greyScale(100%);
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