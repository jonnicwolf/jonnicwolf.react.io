import React, { useState } from 'react';
import styled from 'styled-components';
import ExternalButton from '../assets/buttons/ExternalButton';

const cover1 = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/z265st6zxzzcvahg9sca'
const cover2 = ''
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
      {
        showMore 
        ? <Gif src={cover1} onMouseEnter={handleChange} />
        : <Cover src={cover2} onMouseLeave={handleChange} />
      }
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  width: 50vw;
  border: 1px solid red;
`;
const Cover = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Gif = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const HoverInfo = styled.div`

`;
