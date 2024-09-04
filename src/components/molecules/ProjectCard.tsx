import { FC, useState } from 'react';
// @ts-ignore
import styled, { keyframes } from 'styled-components';

import HoverCover from './HoverCover';

interface Props {
  bio: string,
  title: string,
  liveLink: string,
  githubLink: string,
  image: string,
  cover: JSX.Element,
  gifPath: string,
  apis: string[],
  descriptions: string[],
  devicons: string[],
}

const ProjectCard: FC<Props> = ({
  bio,
  title,
  liveLink,
  githubLink,
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
          devicons={devicons} image={''} />
          //@ts-ignore
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
  animation: ${fadeIn} 0.3s forwards;

  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 90vw;
  }
`;

export default ProjectCard;
