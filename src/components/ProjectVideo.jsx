import React, { useRef, useEffect }  from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const ProjectVideo = ({bio, title, href, videoSrc}) => {
  const videoRef = useRef(null);

  const playVideoOnScroll = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    };
  };

  useEffect(()=>{
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(playVideoOnScroll, options);
    const target = videoRef.current;
    if (target) {
      observer.observe(target);
    }
    return () =>{
      if (target) {
        observer.unobserve(target);
      }
    };
  },[]);

  return (
    <Container>
      <Project
        ref={videoRef}
        muted
        loop={true}
        src={videoSrc}
      />
      <HoverCover>
        <Title>{title}</Title>
        <Bio>{bio}</Bio>
        <a href={href} target='_blank' rel="noopener noreferrer">
          <Button textContent='LIVE SITE' />
        </a>
      </HoverCover>
    </Container>
  );
};

const HoverCover = styled.div`
  opacity: 0;
  transform: translate(-80px,-400px);
  width: 420px;
  transition: opacity 0.1s ease-in, transform 0.1s ease;
  z-index: 1;
`;
const Title = styled.h1`
font-family: var(--font-family-rubik);
font-weight: var(--font-weight-normal);
  font-size: 35px;
  margin: 0;
`;
const Bio = styled.p`
  font-family: var(--font-family-noto-sans-display);
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 3px;
`;
const Project = styled.video`
  box-shadow: 1px 1px 15px 10px grey;
  height: 80vh;
  width: 80vw;
  opacity: 1;
  transition: opacity 0.1s ease-in, transform 0.1s ease;
`;
const Container = styled.div`
  height: 90vh;
  padding-left: 7vw;
  transform: translateX(-4vw);
  &:hover {
    & ${Project} {
      opacity: 0.35;
    }
    & ${HoverCover} {
      opacity: 1;
    }
  }
`;

export default ProjectVideo;
