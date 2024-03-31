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
          title='STONED COLD DREAMERY'
          href1='https://thestonedcolddreamery.com'
          href2='https://github.com/jonnicwolf/stoned_cold_dreamery'
          videoSrc={SCD}
          buttonSize={'large'}
          fontSize={'15px'}
        />
        <ProjectVideo
          bio='Closing Bartender Calculator'
          title='TIP TALLY PRO'
          href1='https://tiptallypro.netlify.app'
          href2='https://github.com/jonnicwolf/tiptallypro'
          videoSrc={TipTallyPro}
          buttonSize={'large'}
          fontSize={'15px'}
        />
      </ProjectList>
    </section>
  );
};

const ProjectList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  row-gap: 100px;
`;

export default ProjectPage;
