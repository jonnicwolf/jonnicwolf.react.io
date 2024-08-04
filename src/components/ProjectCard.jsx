import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import HoverCover from './HoverCover';

export default function ProjectCard ({
  bio,
  title,
  liveLink,
  githubLink,
  cover: Cover,
  gifPath,
  apis,
  descriptions,
  devicons,
}) {
  const [showMore, setShowMore] = useState(false);

  function onMouseLeave () {
    setShowMore(false);
  };

  return (
    <Container onMouseLeave={onMouseLeave}>
      {showMore
        ? <HoverCover
          bio={bio}
          title={title}
          liveLink={liveLink}
          githubLink={githubLink}
          gifPath={gifPath}
          apis={apis}
          descriptions={descriptions}
          devicons={devicons}/>
        : <Cover setter={setShowMore} /> }
    </Container>
  ); 
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  height: 800px;
  width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${fadeIn} 1s forwards;
`;
