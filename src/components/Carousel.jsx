import React, { useState } from 'react';
import austinGP from '../assets/photos/carousel_photos/austinGP.jpeg';
import follyTeam from '../assets/photos/carousel_photos/follyteam.jpg';
import headshot from '../assets/photos/carousel_photos/headshot.jpeg';
import natureHike from '../assets/photos/carousel_photos/naturehike.jpeg';
import office from '../assets/photos/carousel_photos/office.jpeg';
import officeParty from '..src/assets/photos/carousel_photos/officeParty.jpeg';
import team from '../assets/photos/carousel_photos/team.jpeg';
import tiffNfezz from '../assets/photos/carousel_photos/tiffNfezz.jpeg';

const Carousel = () => {
  const [currentSlide, setSlide] = useState(0);

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
    if (listLength-1 === currentSlide) setSlide(0);
    setSlide(currentSlide++);
  };

  function moveLeft (currentSlide, listLength) {
    if (currentSlide === 0) setSlide(listLength-1);
    setSlide(currentSlide--);
  };

  return (
    <div>
      <div>
        <img src={photoList[currentSlide]} />
        <p></p>
      </div>
      
    </div>
  )
}

export default Carousel