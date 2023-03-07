import React, { useState } from 'react';
import styled from 'styled-components';
import BioBox from './BioBox';
import LeftArrow from '../assets/photos/icons/LeftArrow_Icon.png';
import RightArrow from '../assets/photos/icons/RightArrow_Icon.png';
// image/icon imports ↓↓↓↓
import austinGP from '../assets/photos/carousel_photos/austinGP.jpeg';
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
    austinGP,
    follyTeam,
    headshot,
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

  console.log(slide)

  return (
    <div>
      <CarouselContainer>
        <li>
          <button onClick={()=>moveLeft(slide, photoList.length)}>
            <img src={LeftArrow} alt='Previous Frame'/>
          </button>
        </li>
        <li>
          <img
            src={photoList[slide]}
            style={{height: '690px', width: '550px'}}
            alt='Bio Pic'
            />
        </li>
        <li>
          <BioBox/>
        </li>
        <li>
          <button onClick={()=>moveRight(slide, photoList.length)}>
            <img src={RightArrow} alt='Next Frame'/>
          </button>
        </li>
      </CarouselContainer>
    </div>
  )
};

const CarouselContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`
export default Carousel;