import React, { useState } from 'react';
import styled from 'styled-components';
import ExternalButton from '../assets/buttons/ExternalButton';

const cover2 = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/vnetkkhro2uaglzi3ffp'
const cover1 = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/xqczgmsedksvyqf0d4vu'
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
  
  function handleChange () {
    setShowMore(!showMore);
  }
  
  return (
    <Container>
      {showMore
      ? <Cover src={cover2} onMouseEnter={handleChange} />
      : <Gif src={cover1} onMouseLeave={handleChange} />
    }
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  width: 50vw;
`;
const Cover = styled.img`
  height: 100%;
  width: 100%;
   object-fit: cover;
`;
const GifContainer = styled.div`
  height: 100%;
  width: 100%;
  // filter: blur(4px);
  border: 1px solid red;
  background: none;
`
const Gif = styled.img`
  height: 100%;
  width: 100%;
  // object-fit: contain;

  &:hover {
    // filter: blur(3px);
  }
`;
const HoverInfo = styled.div`

`;
