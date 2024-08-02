import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import ExternalButton from '../assets/buttons/ExternalButton';
import EsperiCover from './EsperiCover';

//const cover2 = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/vnetkkhro2uaglzi3ffp'
const cover1 = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/heicbedxhzwocfzxqzky'
export default function ProjectCard ({
  bio,
  title,
  href1,
  href2,
  // cover,
  gifPath,
  description,
  devicons,
}) {
  const [showMore, setShowMore] = useState(false);

  function onMouseLeave () {
    setShowMore(false);
  };

  return (
    <Container>
       {/* {showMore ? ( */}
        <HoverInfo>
          <Gif src={cover1} onMouseLeave={onMouseLeave} />
          <Title>{title}</Title>
          <Bio>{bio}</Bio>
          <P>
           {description}
          </P>
          <TechContainer>
            {/* {devicons.map(icon => ( <i className={icon} />))} */}
          </TechContainer>
          <ExternalButton link={href1} text={'LIVE SITE'} buttonSize={'large'} />
          &#160;
          <ExternalButton link={href2} text={'GITHUB'} buttonSize={'large'} buffer={true} />
        </HoverInfo>
      {/* ) : (
          <EsperiCover setter={setShowMore} />
      )} */}
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  width: 50vw;
`;

const Gif = styled.img`
  height: 100%;
  width: 100%;

  &:hover {
    filter: blur(3px);
  }
`;
const HoverInfo = styled.div`
  height: 100%;
  width: 100%;
  font-family: Rubik;
`;
const P = styled.p`
  font-weight: bolder;
  font-family: var(--font-family-noto-sans-display);
  font-size: 18px;
  text-wrap: wrap;
`
const Title = styled.h1`
  font-family: var(--font-family-rubik);
  font-weight: var(--font-weight-normal);
  font-size: 35px;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
const Bio = styled.p`
  font-family: var(--font-family-noto-sans-display);
  font-size: 30px;
  font-weight: bolder;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 3px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const TechContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;
  font-size: 5vh;
  margin-bottom: 2vh;

  & > i {
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
  }

  & > i:nth-child(1) {
    animation-delay: 0.3s;
  }
  & > i:nth-child(2) {
    animation-delay: 0.5s;
  }
  & > i:nth-child(3) {
    animation-delay: 0.8s;
  }
  & > i:nth-child(4) {
    animation-delay: 1.1s;
  }
`;
