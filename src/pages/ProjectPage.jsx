import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import DragonRend from '../assets/video/DragonRend-trim.mp4';
import SnowMan from '../assets/video/SnowMan-trim.mp4';

const ProjectPage = () => {  
  return (
    <section id='projects'>
      <ProjectList>
        <li key={uuidv4()}>
          <video
            src={DragonRend}
            style={{height: '600px'}}
            muted
            onMouseEnter={(event)=>event.target.play()}
            onMouseLeave={event=>{
              event.target.currentTime=0
              event.target.pause()
            }}
          />
        </li>
        <li key={uuidv4()}>
          <video
            src={SnowMan}
            style={{height: '600px'}}
            muted
            onMouseOver={event=>event.target.play()}
            onMouseLeave={event=>{
              event.target.currentTime=0
              event.target.pause()
            }}
          />
        </li>
      </ProjectList>
    </section>
  )
};

const ProjectList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  row-gap: 300px;
`;

export default ProjectPage;