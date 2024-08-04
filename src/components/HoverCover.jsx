import React from 'react';
import styled, { keyframes } from 'styled-components';

import ExternalButton from '../assets/buttons/ExternalButton';

export default function HoverCover({
  bio,
  title,
  href1,
  href2,
  // cover,
  gifPath,
  apis,
  descriptions,
  devicons
,}) {
  const cover1 = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/heicbedxhzwocfzxqzky'
  return (
    <Container>
      <Gif src={gifPath} />
      <HoverInfo>
        <PaddingWrap>
          <Title>{title}</Title>
          <Bio>{bio}</Bio>
          <TechContainer>
            {devicons.map( icon => ( <i className={icon} /> ))}
          </TechContainer>
          <P>[ {apis.map( item => ` ${item} /`)} ]</P>
          <P>[ {descriptions.map( item => ` ${item} /`)} ]</P>
          <ExternalButton link={href1} text={'LIVE SITE'} fontSize='1rem' />
          <ExternalButton link={href2} text={'GITHUB'} buffer={true} fontSize='1rem' />
        </PaddingWrap>
      </HoverInfo>
    </Container>
  );
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  animation: ${fadeIn} 2s forwards;
`;

  const HoverInfo = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: rgba(225,225,225,0.8);
    animation: ${fadeIn} 1s forwards;
  `;
  const PaddingWrap = styled.div`
    margin-left: -3rem;
    margin-top: 8rem;

    & > * {
      opacity: 0;
      animation: ${fadeIn} 1s forwards;
    }

    & > *:nth-child(1) {
      animation-delay: 0.3s;
    }
    & > *:nth-child(2) {
      animation-delay: 0.5s;
    }
    & > *:nth-child(3) {
      animation-delay: 0.8s;
    }
    & > *:nth-child(4) {
      animation-delay: 1.1s;
    }
    & > *:nth-child(5) {
      animation-delay: 1.4s;
    }
    & > *:nth-child(6) {
      animation-delay: 1.7s;
    }
  `;
  const Gif = styled.img`
    height: 100%;
    width: 100%;
  `;
  const P = styled.p`
    font-weight: bold;
    font-family: Noto Sans Display;
    font-size: 0.8rem;
    text-wrap: wrap;
  `;
  const Title = styled.h1`
    font-family: Michroma;
    font-weight: normal;
    font-size: 3rem;
    margin: 0;
    padding: 0;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  `;
  const Bio = styled.p`
    font-family: Rubik;
    font-size: 1rem;
    font-weight: bolder;
    letter-spacing: 2px;
    margin: 0;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  `;
  const TechContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 2rem;
    font-weight: normal;
    margin-top: 10px;

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