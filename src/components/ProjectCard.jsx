import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import EsperiCover from './EsperiCover';
import HoverCover from './HoverCover';

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
    <Container onMouseLeave={onMouseLeave}>
       {showMore 
        ? <HoverCover
            bio={bio}
            title={title}
            href1={href1}
            href2={href2}
            gifPath={gifPath}
            description={description}
            devicons={devicons}/> : <EsperiCover setter={setShowMore} />}
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
