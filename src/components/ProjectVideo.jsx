import React from 'react';
import styled from 'styled-components';

const ProjectVideo = (bio, title, href, videoSrc) => {
  return (
    <>
      <Project
        onMouseEnter={(event)=>event.target.play()}
        onMouseLeave={event=>{
          event.target.currentTime=0
          event.target.pause()
        }}
        muted
        loop='true'
        src={videoSrc}
      />
      <HoverCover>
        <h1>{title}</h1>
        <h2>{bio}</h2>
        <Link href={href}>Live Site</Link>
      </HoverCover>
    </>
  );
};

const HoverCover = styled.div`
  display: none;
  &:hover {
    display: block;
  }
`;
const Link = styled.link`
  border: 1px solid black;
`;
const Project = styled.video`
  box-shadow: 1px 1px 15px 10px grey;
  height: 90vh;
  width: 90vw;
  &:hover {
    opacity: 0.35;
  }
`;

export default ProjectVideo;
