import React, { useState } from 'react';
import styled, { keyframes} from 'styled-components';

import ProjectVideo from '../components/ProjectVideo';
import TipTallyPro from '../assets/video/TipTallyPro.mp4';
import SCD from '../assets/video/SCD.mp4';
import SCD_photo from '../assets/photos/SCD.jpg';
import tpr_logo from '../assets/photos/tpr_logo.jpg';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';
import ExternalButton from '../assets/buttons/ExternalButton';

export default function ProjectPage () {
  const [blurToggle1, setBlurToggle1] = useState(false);
  const [blurToggle2, setBlurToggle2] = useState(false);
  const isMobile = window.innerWidth < 1024;

  function handleToggle (setBlur, getBlur) {
    setBlur(!getBlur);
  }

  return (
    <Container isMobile={isMobile}>
      { isMobile ?
        <ProjectList>
          <ProjectContainer>
            <MobileProject
              src={SCD_photo}
              onClick={() =>handleToggle(setBlurToggle1, blurToggle1)}
              blur={blurToggle1} />
            <Info blur={blurToggle1} onClick={() =>handleToggle(setBlurToggle1, blurToggle1)}>
              <P>
                Savor the extraordinary at <br /> <AllCaps>STONED COLD DREAMERY</AllCaps> <br /> where each scoop is a tantalizing delight. Taste the difference today!
              </P>
              <TechContainer>
                <i className="devicon-javascript-plain" style={{fontSize: '46px', color: 'black'}} />
                <i className="devicon-react-original" style={{fontSize: '46px', color: 'black'}} />
                <i className="devicon-p5js-original" style={{fontSize: '56px', color: 'black'}} />
                <i className="devicon-postgresql-plain" style={{fontSize: '46px', color: 'black'}} />
              </TechContainer>
              <AContainer>
                <ExternalButton 
                  link='https://thestonedcolddreamery.com'
                  text='LIVESITE'
                  buttonSize='large'
                  />
                <ExternalButton 
                  link='https://github.com/jonnicwolf/stoned_cold_dreamery'
                  text='GITHUB'
                  buttonSize='large'
                />
              </AContainer>
            </Info>
          </ProjectContainer>

          <ProjectContainer>
            <MobileProject
              src={tpr_logo}
              onClick={() =>handleToggle(setBlurToggle2, blurToggle2)}
              blur={blurToggle2}
              />
            <Info blur={blurToggle2} onClick={() =>handleToggle(setBlurToggle2, blurToggle2)}>
              <P>
                Your ultimate tool for effortless tip counting and bank balancing
                <br />
                <AllCaps>
                  TipTallyPro
                </AllCaps>
                <br />
                Utilized daily by 6 NYC bars
              </P>
              <TechContainer>
                <i className="devicon-javascript-plain"    style={{fontSize: '46px', color: 'black', opacity: 0}} />
                <i className="devicon-react-original"      style={{fontSize: '46px', color: 'black', opacity: 0}} />
                <i className="devicon-css3-plain-wordmark" style={{fontSize: '46px', color: 'black', opacity: 0}} />
              </TechContainer>
              <AContainer>
                <ExternalButton 
                  link='https://tiptallypro.netlify.app'
                  text='LIVESITE'
                  buttonSize='large'
                  />
                <ExternalButton 
                  link='https://github.com/jonnicwolf/stoned_cold_dreamery'
                  text='GITHUB'
                  buttonSize='large'
                />
              </AContainer>
            </Info>
          </ProjectContainer>
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
  padding: 15px;
  display: ${props => props.blur ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
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
  padding-top: 5vh;
  padding-bottom: 5vh;
`
const AContainer = styled.div`
  display: flex;
  gap: 2vw;
`;
const ProjectContainer = styled.div`
  height: 60vh;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const TechContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5vw;
  margin-bottom: 2vh;

  & > i {
    opacity: 0;
    animation: ${fadeIn} 1s forwards;
  }

  & > i:nth-child(1) {
    animation-delay: 0.3s;
  }
  & > i:nth-child(2) {
    animation-delay: 0.5s;
  }
  & > i:nth-child(3) {
    animation-delay: 0.8s;
  }
  & > i:nth-child(4) {
    animation-delay: 1.1s;
  }
`;

