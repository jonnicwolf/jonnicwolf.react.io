import { FC, ReactElement, createElement, useState } from 'react';
// @ts-ignore
import styled, { keyframes } from 'styled-components';

import HoverCover from './HoverCover';

interface Props {
  bio: string,
  title: string,
  liveLink?: string,
  githubLink: string,
  coverLink?: string,
  cover: ReactElement,
  gifPath: string,
  apis: string[],
  descriptions: string[],
  devicons: string[],
};

const ProjectCard: FC<Props> = ({
  bio,
  title,
  liveLink,
  githubLink,
  coverLink,
  cover: Cover,
  gifPath,
  apis,
  descriptions,
  devicons,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

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
          devicons={devicons}  />
          // @ts-ignore !!!! FIX !!!!!
        : createElement(Cover, {setter: setShowMore, link: coverLink}) }
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
  animation: ${fadeIn} 0.3s forwards;
  box-shadow: -2rem 2rem 20rem;

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 55%;
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 100vw;
  }
`;

export default ProjectCard;
