import React, { useState } from 'react';
import styled from 'styled-components';
import BioBox from './BioBox';
// image/icon imports ↓↓↓↓
import LeftArrow from '../assets/photos/icons/LeftArrow_Icon.png';
import RightArrow from '../assets/photos/icons/RightArrow_Icon.png';
import follyTeam from '../assets/photos/carousel_photos/follyteam.jpg';
import headshot from '../assets/photos/carousel_photos/headshot.jpeg';
import natureHike from '../assets/photos/carousel_photos/naturehike.jpeg';
import office from '../assets/photos/carousel_photos/office.jpeg';
import officeParty from '../assets/photos/carousel_photos/officeParty.JPG';
import team from '../assets/photos/carousel_photos/team.jpg';
import tiffNfezz from '../assets/photos/carousel_photos/tiffNfezz.JPG';

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const photoList = [
    headshot,
    follyTeam,
    natureHike,
    office,
    officeParty,
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
        <li>
          <img
            src={photoList[slide]}
            style={{height: '690px', width: '550px'}}
            alt='Bio Pic'
          />
        </li>
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
  )
};

const Arrow = styled.img`
  height: 60px;
  width: 60px;
`;
const BioBoxContainer = styled.li`
  width: 2500px;
`;
const ButtonContainer = styled.li`
  width: 150px;
`;
const CarouselContainer = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 60px;
  list-style: none;
  width: 1300px;
`;
const ChangePhotoButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default Carousel;