import React from 'react';
import styled from 'styled-components';
import ProjectVideo from '../components/ProjectVideo';
import FollyInternal from '../assets/video/FollyInternal.mp4';
import SCD from '../assets/video/Stoned_Cold_Dreamery.mp4';

const ProjectPage = () => {
  return (
    <section id='projects'>
      <ProjectList>
        <ProjectVideo
          bio='Webstore / Ice Cream Shop'
          title='Stoned Cold Dreamery'
          href='https://thestonedcolddreamery.com'
          videoSrc={SCD}
        />
        <ProjectVideo
          bio='Internal Website'
          title='The Folly'
          href='https://follyinternal.com'
          videoSrc={FollyInternal}
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
  row-gap: 100px;
  @media (max-width: 401px) {
    row-gap:10px;
  }
`;

export default ProjectPage;
