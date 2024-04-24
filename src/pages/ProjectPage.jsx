import React from 'react';
import styled from 'styled-components';

import ProjectVideo from '../components/ProjectVideo';
import TipTallyPro from '../assets/video/TipTallyPro.mp4';
import SCD from '../assets/video/SCD.mp4';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';

export default function ProjectPage () {
  return (
    <>
      <ProjectList>
        <ProjectVideo
          bio='Webstore / Ice Cream Shop'
          title='STONED COLD DREAMERY'
          href1='https://thestonedcolddreamery.com'
          href2='https://github.com/jonnicwolf/stoned_cold_dreamery'
          videoSrc={SCD}
        />
        <ProjectVideo
          bio='Closing Bartender Calculator'
          title='TIP TALLY PRO'
          href1='https://tiptallypro.netlify.app'
          href2='https://github.com/jonnicwolf/tiptallypro'
          videoSrc={TipTallyPro}
        />
      </ProjectList>
      <Background />
    </>
  );
};

const Background = styled(P5_LORENZ_ATTRACTOR)`
  position: sticky;
  z-index: 1;
`;
const ProjectList = styled.div`
  display: flex;
  padding-top: 10vh;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  gap: 20vh;
  z-index: 99;
  position: absolute;
`;
