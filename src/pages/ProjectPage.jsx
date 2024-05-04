import React, { useState } from 'react';
import styled from 'styled-components';

import ProjectVideo from '../components/ProjectVideo';
import TipTallyPro from '../assets/video/TipTallyPro.mp4';
import SCD from '../assets/video/SCD.mp4';
import SCD_photo from '../assets/photos/SCD.jpg';
import tpr_logo from '../assets/photos/tpr_logo.jpg';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';

export default function ProjectPage () {
  const [blurToggle, setBlurToggle] = useState(false);
  const isMobile = window.innerWidth < 1024;

  function handleToggle () {
    setBlurToggle(!blurToggle);
  }

  return (
    <Container isMobile={isMobile}>
      { isMobile ?
        <ProjectList>
          {/* <A href='https://thestonedcolddreamery.com' target='_blank' rel='noopener noreferrer'> */}
            <MobileProject
              src={SCD_photo}
              onClick={handleToggle}
              blur={blurToggle} />
            <Info blur={blurToggle}>
              <P>Savor the extraordinary at <br /> <AllCaps>STONED COLD DREAMERY</AllCaps>, <br /> where each scoop is a tantalizing delight. Taste the difference today!</P>
            </Info>
          
          {/* </A> */}
          {/* <A href='https://tiptallypro.netlify.app' target='_blank' rel='noopener noreferrer'> */}
            <MobileProject src={tpr_logo} />
          {/* </A> */}
        </ProjectList>
        :
        <ProjectList>
          <ProjectVideo
            bio='Webstore / Ice Cream Shop'
            title='STONED COLD DREAMERY'
            href1='https://thestonedcolddreamery.com'
            href2='https://github.com/jonnicwolf/stoned_cold_dreamery'
            videoSrc={SCD} />
          <ProjectVideo
            bio='Closing Bartender Calculator'
            title='TIP TALLY PRO'
            href1='https://tiptallypro.netlify.app'
            href2='https://github.com/jonnicwolf/tiptallypro'
            videoSrc={TipTallyPro} />
        </ProjectList>
      }
      <Background strokeColor={105}/>
    </Container>
  );
};

const Container = styled.div`
  display: ${props => props.isMobile ? 'flex' : ''};
  justify-content: center;
`;
const Background = styled(P5_LORENZ_ATTRACTOR)`
  position: sticky;
  z-index: 1;
`;
const ProjectList = styled.div`
  display: flex;
  padding-top: 10vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 20vh;
  z-index: 99;
  position: absolute;
  max-height: 150%;
`;

const Info = styled.div`
  opacity: ${props => props.blur ? '1' : '0'};
  transform: translate(0px, -360px);
  width: 80vw;
  z-index: 99;
  color: white;
  font-family: Rubik;
  font-weight: bold;
  transition: opacity 1.5s ease-in-out;
`
const MobileProject = styled.img`
  height: 100vw;
  width: 80vw;
  border: 1px solid grey;
  box-shadow: 10px 15px 20px;
  filter: blur(${props => props.blur ? '5.5rem' : 0});
  transition: filter 0.3s linear;
`;
const P = styled.p`
  text-align: center;
  font-weight: bolder;
  font-size: 18px;
  color: rgb(15,15,15);
`
const AllCaps = styled.span`
  font-size: 26px;
`
const A = styled.a`
  text-decoration: none;
  color: grey;
`;
