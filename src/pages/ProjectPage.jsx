import React, { useState } from 'react';
import styled, { keyframes} from 'styled-components';

import ProjectVideo from '../components/ProjectVideo';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';
import ExternalButton from '../assets/buttons/ExternalButton';

import SCD from 'https://res.cloudinary.com/dhah4xjvr/video/upload/v1722178613/fezz.dev/videos/fw46sp7q0mlfjngljwxa.mov';
import Hotc from 'https://res.cloudinary.com/dhah4xjvr/video/upload/v1722178613/fezz.dev/videos/fw46sp7q0mlfjngljwxa.mov';

import SCD_photo from 'https://res.cloudinary.com/dhah4xjvr/image/upload/v1722178672/fezz.dev/photos/photos/z265st6zxzzcvahg9sca.jpg';
import tpr_logo from 'https://res.cloudinary.com/dhah4xjvr/image/upload/v1722178670/fezz.dev/photos/photos/b78dtd45ccc9edyg9dad.png';
import Hotc_photo from 'https://res.cloudinary.com/dhah4xjvr/image/upload/v1722178671/fezz.dev/photos/photos/roqapvvi16ddsfoeqmfp.png'

export default function ProjectPage () {
  const [blurToggle1, setBlurToggle1] = useState(false);
  const [blurToggle2, setBlurToggle2] = useState(false);
  const [blurToggle3, setBlurToggle3] = useState(false);
  const isMobile = window.innerWidth < 1024;

  function handleToggle (setBlur, getBlur) {
    setBlur(!getBlur);
  };

  const [
    javascript,
    react,
    p5,
    firebase,
    postgresql,
    css3,
  ] = [
    'devicon-javascript-plain',
    "devicon-react-original",
    "devicon-p5js-original",
    "devicon-firebase-plain-wordmark",
    "devicon-postgresql-plain",
    "devicon-css3-plain-wordmark",
  ];

  const hotc_devi = [javascript, react, p5, firebase];
  const scd_devi= [javascript, react, postgresql, firebase];
  const ttp_devi = [javascript, react, css3];

  return (
    <Container isMobile={isMobile}>
      { isMobile ?
        <ProjectList>
          <ProjectContainer>
            <MobileProject
              src={Hotc_photo}
              onClick={() =>handleToggle(setBlurToggle3, blurToggle3)}
              blur={blurToggle3} />
            <Info blur={blurToggle3} onClick={() =>handleToggle(setBlurToggle3, blurToggle3)}>
              <P>Discover your destiny with <br />Secrets of the Cartomancer <br /> Receive three random cards and personalized readings that reveal insights and guidance. Uncover the mysteries today!
              </P>
              <TechContainer>
                <i className="devicon-javascript-plain" />
                <i className="devicon-react-original" />
                <i className="devicon-p5js-original" />
                <i className="devicon-firebase-plain-wordmark" />
              </TechContainer>
              <AContainer>
                <ExternalButton 
                  link='https://cartomancerssecrets.netlify.app'
                  text='LIVESITE'
                  buttonSize='large'
                  />
                <ExternalButton
                  link='https://github.com/jonnicwolf/heart_of_the_cards'
                  text='GITHUB'
                  buttonSize='large'
                />
              </AContainer>
            </Info>
          </ProjectContainer>

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
                  link='https://github.com/jonnicwolf/tiptallypro'
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
            bio='Tarot Card Reader'
            title='ESPERI'
            href1='https://esperi.netlify.app'
            href2='https://github.com/jonnicwolf/heart_of_the_cards'
            videoSrc={Hotc}
            description={'Discover your destiny with Esperi. Receive three random cards and personalized readings that reveal insights and guidance. Uncover the mysteries today!'}
            devicons={hotc_devi}
          />
          <ProjectVideo
            bio='Webstore / Ice Cream Shop'
            title='STONED COLD DREAMERY'
            href1='https://thestonedcolddreamery.com'
            href2='https://github.com/jonnicwolf/stoned_cold_dreamery'
            videoSrc={SCD}
            description={'Savor the extraordinary at Stoned Cold Dreamery! Where each scoop is a tantalizing delight. Taste the difference today!'}
            devicons={scd_devi}
          />
          <ProjectVideo
            bio='Closing Bartender Calculator'
            title='TIP TALLY PRO'
            href1='https://tiptallypro.netlify.app'
            href2='https://github.com/jonnicwolf/tiptallypro'
            videoSrc={TipTallyPro}
            description={'Your ultimate tool for effortless tip counting and bank balancing Tip Tally Pro! Utilized daily by 6 NYC bars'}
            devicons={ttp_devi}
          />
        </ProjectList>
      }
      <Background strokeColor={150} showControls={false}/>
    </Container>
  );
};

const Container = styled.div`
  display: ${props => props.isMobile ? 'flex' : ''};
  justify-content: center;
  height: 250vh;
`;
const Background = styled(P5_LORENZ_ATTRACTOR)`
  height: 100vh;
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
  padding-bottom: 10vh;
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
  font-size: 46px;
  color: black;

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
