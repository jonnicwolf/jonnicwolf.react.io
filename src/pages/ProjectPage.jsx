import React from 'react';
import styled from 'styled-components';
import ProjectVideo from '../components/ProjectVideo';
import TipTallyPro from '../assets/video/TipTallyPro.mp4';
import SCD from '../assets/video/SCD.mp4';

const ProjectPage = () => {
  return (
    <section id='projects'>
      <ProjectList>
        <ProjectVideo
          bio='Webstore / Ice Cream Shop'
          title='Stoned Cold Dreamery'
          href='https://thestonedcolddreamery.com'
          videoSrc={SCD}
          buttonSize={'large'}
          fontSize={'15px'}
        />
        <ProjectVideo
          bio='Closing Bartender Calculator'
          title='Tip Tally Pro'
          href='https://tiptallypro.netlify.app'
          videoSrc={TipTallyPro}
          buttonSize={'large'}
          fontSize={'15px'}
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
`;

export default ProjectPage;
