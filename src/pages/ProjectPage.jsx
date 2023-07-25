import React from 'react';
import styled from 'styled-components';
import FollyInternal from '../assets/video/FollyInternal.mp4';
import SCD from '../assets/video/Stoned_Cold_Dreamery.mp4'

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
        <a href='https://thestonedcolddreamery.com'>
          <ProjectGIF
            src={SCD}
            muted
            onMouseEnter={(event)=>event.target.play()}
            onMouseLeave={event=>{
              event.target.currentTime=0
              event.target.pause()
            }}/>
        </a>
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
  box-shadow: 1px 1px 15px 15px grey;
  height: 600px;
  @media (max-width: 400px) {
    width: 390px;
    height: 400px;
    margin-right: 15px;
  }
`;

export default ProjectPage;
