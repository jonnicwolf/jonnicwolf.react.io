import React, { useState } from 'react';
import styled from 'styled-components';
import ExternalButton from '../assets/buttons/ExternalButton';

const cover = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/z265st6zxzzcvahg9sca'
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
  return (
    <Container>
      {
        showMore 
        ? <Gif src={cover}/>
        : <Cover src={cover}/>
      }
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
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
