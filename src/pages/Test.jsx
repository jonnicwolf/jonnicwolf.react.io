import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import EsperiCover from '../components/EsperiCover';

const Test = () => {
  const [
    javascript,
    react,
    p5,
    firebase,
    //postgresql,
    //css3,
  ] = [
    'devicon-javascript-plain',
    "devicon-react-original",
    "devicon-p5js-original",
    "devicon-firebase-plain",
    //"devicon-postgresql-plain",
    "devicon-css3-plain-wordmark",
  ];

  const hotc_devi = [javascript, react, p5, firebase];
  //const scd_devi= [javascript, react, postgresql, firebase];
  return (
    <Container>
      {/* WELL HELLO MOTHERFUCKER, NOTHING TO SEE HERE */}
      <ProjectCard
        bio='Tarot Interpreter'
        title='Esperi'
        href1='https://esperi.netlify.app'
        href2='https://github.com/jonnicwolf/heart_of_the_cards'
        gifPath='https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/heicbedxhzwocfzxqzky'
        apis={['TAROTAPI', 'OPENAI API']}
        descriptions={['LIFESTYLE & ENTERTAINMENT', 'FULL STACK']}
        devicons={hotc_devi}
        cover={EsperiCover}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Rubik;
  font-weight: bold;
  font-size: 2em;
  height: 100vh;
`;

export default Test;
