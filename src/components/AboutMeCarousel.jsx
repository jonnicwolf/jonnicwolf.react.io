import React, { useState } from 'react';
import styled from 'styled-components';
import BioBox from './BioBox';
// image/icon imports ↓↓↓↓
import LeftArrow from '../assets/icons/LeftArrow_Icon.png';
import RightArrow from '../assets/icons/RightArrow_Icon.png';
import headshot from '../assets/photos/headshot.jpeg';
import team from '../assets/photos/team.jpg';
import tiffNfezz from '../assets/photos/tiffNfezz.JPG';

const Carousel = () => {
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
    <div>
      <CarouselContainer>
        <ButtonContainer>
          <ChangePhotoButton onClick={()=>moveLeft(slide, photoList.length)}>
            <Arrow src={LeftArrow} alt='Previous Frame' style={{alignSelf: 'center'}}/>
          </ChangePhotoButton>
        </ButtonContainer>

        <Photo
          src={photoList[slide]}
          alt='Bio Pic'
        />

        <BioBoxContainer>
          <BioBox/>
        </BioBoxContainer>

        <ButtonContainer>
          <ChangePhotoButton onClick={()=>moveRight(slide, photoList.length)}>
            <Arrow src={RightArrow} alt='Next Frame' />
          </ChangePhotoButton>
        </ButtonContainer>
      </CarouselContainer>
    </div>
  );
};

const Arrow = styled.img`
  height: 60px;
  width: 60px;
`;
const BioBoxContainer = styled.div`
  width: 30vw;
`;
const ButtonContainer = styled.div`
  width: 150px;
`;
const CarouselContainer = styled.div`
  align-items: center;
  column-gap: 7vw;
  display: flex;
  width: 80vw;
`;
const ChangePhotoButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
const Photo = styled.img`
  height: 690px;
  height: 64vh;
  width: 550px;
`

export default Carousel;