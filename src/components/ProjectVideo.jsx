import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import ExternalButton from '../assets/buttons/ExternalButton';

const ProjectVideo = ({ bio, title, href1, href2, videoSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = window.innerWidth < 1024;

  useEffect(() => {
    const playVideoOnScroll = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !isMobile) {
        setIsPlaying(true);
        videoRef.current.play();
      } else {
        setIsPlaying(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      };
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(playVideoOnScroll, options);
    const target = videoRef.current;

    if (target) {
      observer.observe(target);
    };

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [isMobile]);

  return (
    <Container>
      <Project
        ref={videoRef}
        src={videoSrc}
        isPlaying={isPlaying}
        isMobile={isMobile}
        loop={true}
        muted
      />
      <HoverCover>
        <Title>{title}</Title>
        <Bio>{bio}</Bio>
        <ExternalButton link={href1} text={'LIVE SITE'} buttonSize={'large'} />
        &#160;
        <ExternalButton link={href2} text={'GITHUB'} buttonSize={'large'} buffer={true} />
      </HoverCover>
    </Container>
  );
};

const HoverCover = styled.div`
  opacity: 0;
  transform: translate(-80px, -650px);
  width: 420px;
  z-index: 99;
  padding: 16% 50% 16% 0;
  transition: opacity .5s ease-in-out;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 800px) {
    transform: translate(-40px, -200px);
  }
  @media (max-width: 510px) {
    transform: translate(10px, -200px);
  }
`;

const Title = styled.h1`
  font-family: var(--font-family-rubik);
  font-weight: var(--font-weight-normal);
  font-size: 35px;
  margin: 0;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const Bio = styled.p`
  font-family: var(--font-family-noto-sans-display);
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 3px;
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const Project = styled.video`
  box-shadow: 1px 1px 15px 10px grey;
  height: 100%;
  width: 100%;
  object-fit: fill;
  filter: blur(${({ isPlaying, isMobile }) => (!isPlaying && !isMobile ? '0.2rem' : '0')});
  transition: opacity 0.1s ease-in, transform 0.1s ease;
`;

const Container = styled.div`
  height: 60vh;
  width: 70vw;
  padding-left: 7vw;
  transform: translateX(10vw);
  &:hover {
    & ${Project} {
      filter: blur(0.35rem);
    }
    & ${HoverCover} {
      filter: blur(0);
    }
  }
  @media (max-width: 740px) and (min-width: 320px) {
    transform: translateX(50px);
    height: 50vh;
    margin-bottom: 5vh;
    &:hover {
      & ${Project} {
        opacity: 0.35;
      }
      & ${HoverCover} {
        opacity: 1;
      }
    }
  }
  @media (max-width: 667px) and (min-width: 375px) {
    transform: translateX(50px);
    height: 25vh;
    height: 50vh;
    margin-bottom: 5vh;
    &:hover {
      & ${Project} {
        opacity: 0.35;
      }
      & ${HoverCover} {
        opacity: 1;
      }
    }
  }
`;

export default ProjectVideo;
