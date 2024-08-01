import React, { useState } from 'react';
import styled from 'styled-components';

// import ExternalButton from '../assets/buttons/ExternalButton';
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
       {showMore ? (
        <Gif src={cover1} onMouseLeave={onMouseLeave} />
      ) : (
        <EsperiCover setter={setShowMore} />
      )}
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
// const HoverInfo = styled.div``;
