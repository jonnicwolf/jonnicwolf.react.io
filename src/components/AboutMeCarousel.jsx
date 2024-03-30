import React, { useState } from 'react';
import styled from 'styled-components';
import BioBox from './BioBox';
import Socials from './Socials';

// image/icon imports ↓↓↓↓
import LeftArrow from '../assets/icons/LeftArrow_Icon.png';
import RightArrow from '../assets/icons/RightArrow_Icon.png';
import headshot from '../assets/photos/headshot.jpeg';
import team from '../assets/photos/team.jpg';
import tiffNfezz from '../assets/photos/tiffNfezz.JPG';

const Carousel = ({ images }) => {
  const [slide, setSlide] = useState(0);

  const photoList = [
    headshot,
    team,
    tiffNfezz
  ];

  function moveRight (currentSlide, listLength) {
    if (currentSlide >= listLength-1) setSlide(0)
    else setSlide(currentSlide+1);
  };

  function moveLeft (currentSlide, listLength) {
    if (currentSlide === 0) setSlide(listLength-1)
    else setSlide(currentSlide-1);
  };

  return (
    <CarouselContainer>
      <ButtonContainer>
        <ChangePhotoButton onClick={()=>moveLeft(slide, photoList.length)}>
          <Arrow src={LeftArrow} alt='Previous Frame' style={{alignSelf: 'center'}}/>
        </ChangePhotoButton>
      </ButtonContainer>

      <Photo src={images[slide]} alt='Bio Pic' />
      <BioBox />

      <ButtonContainer>
        <ChangePhotoButton onClick={()=>moveRight(slide, photoList.length)}>
          <Arrow src={RightArrow} alt='Next Frame' />
        </ChangePhotoButton>
      </ButtonContainer>
      <SocialsContainer>
        <Socials />
      </SocialsContainer>
    </CarouselContainer>
  );
};

const Arrow = styled.img`
  height: 60px;
  width: 60px;
  @media (max-width: 745px) {
    display: none;
  }
`;
const ButtonContainer = styled.div`
  width: 8vw;
`;
const CarouselContainer = styled.div`
  align-items: center;
  column-gap: 7vw;
  display: flex;
  width: 85vw;
  @media (max-width: 745px) {
    flex-direction: column;
  }
`;
const ChangePhotoButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const Photo = styled.img`
  height: 60vh;
  width: 30vw;
  @media (max-width: 1240px) {
    height: 75vh;
    width: 30vw;
  }
  @media (max-width: 1000px) {
    height: 85vh;
    width: 30vw;
  }
  @media (max-width: 745px) {
    height: 60vh;
    width: 50vw;
  }
  @media (max-width: 385px) {
    width: 80vw;
  }
`;
const SocialsContainer = styled.div`
  @media (min-width: 385px) {
    display: none;
  }
`;

export default Carousel;
