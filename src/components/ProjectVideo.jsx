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

    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      videoRef.current.setAttribute('autoplay', 'false');
      videoRef.current.removeAttribute('loop');
    } else {
      videoRef.current.setAttribute('autoplay', 'true');
      videoRef.current.setAttribute('loop', 'true');
    }

    return () => {
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
  transition: opacity 0.1s ease-in, transform 0.1s ease;
  width: 420px;
  z-index: 1;
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
  width: 70%;
  object-fit: fill;
  opacity: 1;
  transition: opacity 0.1s ease-in, transform 0.1s ease;
  // @media (max-width: 2140px) {
  //   height: 88vh;
  //   width: 71vw;
  // }
  // @media (max-width: 1940px) {
  //   height: 78vh;
  //   width: 69vw;
  // }
  // @media (max-width: 1740px) {
  //   height: 68vh;
  //   width: 67vw;
  // }
  // @media (max-width: 1540px) {
  //   height: 62vh;
  //   width: 70vw;
  // }
  // @media (max-width: 1340px) {
  //   height: 57vh;
  //   height: 56vh;
  //   width: 100vh;
  // }
  // @media (max-width: 1240px) {
  //   height: 54.8vh;
  //   width: 75.5vw;
  // }
  // @media (max-width: 1100px){
  //   height: 50.1vh;
  //   width: 86vw;
  // }
  // @media (max-width: 950px) {
  //   height: 44.2vh;
  //   width: 86vw;
  // }
  // @media (max-width: 800px) {
  //   height: 44vh;
  //   width: 85vw;
  //   autoplay: false;
  //   loop: false;
  // }
  // @media (max-width: 510px) {
  //   height: 33vh;
  //   width: 100vw;
  // }
  // @media (max-width: 425px) {
  //   height: 27vh;
  // }
  @media (max-width: 667px, min-width: 375) {
    height: 24vh;
  }
`;
const Container = styled.div`
  border: ;
  height: 100%;
  padding-left: 7vw;
  transform: translateX(10vw);
  &:hover {
    & ${Project} {
      opacity: 0.35;
    }
    & ${HoverCover} {
      opacity: 1;
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
