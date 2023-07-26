import React, { useRef, useEffect }  from 'react';
import styled from 'styled-components';

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
    <>
      <Project
        ref={videoRef}
        muted
        loop={true}
        src={videoSrc}
      />
      <HoverCover>
        <Title>{title}</Title>
        <Bio>{bio}</Bio>
        <LinkButton>
          <Link href={href}>LIVE SITE</Link>
        </LinkButton>
      </HoverCover>
    </>
  );
};

const HoverCover = styled.div`
  // border: 2px solid red;
  display: block;
  transform: translate(-450px,-500px);
  z-index: 1;
  &:hover {
    display: block;
  }
`;
const Title = styled.h1`
font-family: var(--font-family-modak);
font-weight: var(--font-weight-normal);
  font-size: 40px;
  margin: 0;
`;
const Bio = styled.p`
  font-family: var(--font-family-rubik);
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: 5px;
  margin-bottom: 3px;
`;
const LinkButton = styled.button`
  // background-color: none;
  height: 45px;
  width: 120px;
`;
const Link = styled.a`
  background-color: none;
  font-family: var(--font-family-rubik);
  color: black;
  font-size: 15px;
  text-decoration: none;
`;
const Project = styled.video`
  box-shadow: 1px 1px 15px 10px grey;
  height: 80vh;
  width: 80vw;
  opacity: 0.35;
  z-index: 2;
  &:hover {
    opacity: 0.35;
  }
`;

export default ProjectVideo;
