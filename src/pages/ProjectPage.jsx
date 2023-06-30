import React from 'react';
import styled from 'styled-components';
import DragonRend from '../assets/video/DragonRend-trim.mp4';
import SnowMan from '../assets/video/SnowMan-trim.mp4';
import FollyInternal from '../assets/video/FollyInternal.mp4';

const ProjectPage = () => {
  return (
    <section id='projects'>
      <ProjectList>
        <a href='https://follyinternal.com' target='_blank' rel="noopener">
          <ProjectGIF
            src={FollyInternal}
            muted
            onMouseEnter={(event)=>event.target.play()}
            onMouseLeave={event=>{
              event.target.currentTime=0
              event.target.pause()
            }}
          />
        </a>
        <ProjectGIF
          src={DragonRend}
          muted
          onMouseEnter={(event)=>event.target.play()}
          onMouseLeave={event=>{
            event.target.currentTime=0
            event.target.pause()
          }}
        />
        <ProjectGIF
          src={SnowMan}
          muted
          onMouseOver={event=>event.target.play()}
          onMouseLeave={event=>{
            event.target.currentTime=0
            event.target.pause()
          }}
        />
      </ProjectList>
    </section>
  )
};

const ProjectList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  row-gap: 300px;
  @media (max-width: 401px) {
    row-gap:10px;
  }
`;
const ProjectGIF = styled.video`
  height: 600px;
  @media (max-width: 400px) {
    width: 390px;
    height: 400px;
    margin-right: 15px;
  }
`;

export default ProjectPage;