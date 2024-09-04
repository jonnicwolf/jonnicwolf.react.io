import { FC, useState, useEffect, useMemo, useContext } from 'react';
import { DarkmodeContext } from '../Darkmode.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
// @ts-ignore
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

import Button from '../assets/buttons/Button.tsx';
import P5_LORENZ_ATTRACTOR from '../components/p5/P5_LORENZ_ATTRACTOR';
import P5_PLANE from '../components/p5/P5_PLANE';
import P5_LOADER from '../components/p5/P5_LOADER';
import P5_ANJA from '../components/p5/P5_ANJA';
import P5_GEOSTORM from '../components/p5/P5_GEOSTORM.tsx';

interface P5Props {
  strokeColor: number,
  showControls: boolean,
  showSun: boolean,
  isMobile: boolean,
};

type P5Type = FC<P5Props>;

const GalleryPage: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const { darkmode } = useContext(DarkmodeContext);
  const { projectName } = useParams();
  const navigate = useNavigate();
  const controls = useAnimation();

  const sw: boolean = window.innerWidth > 720;
  // @ts-ignore !!!! FIX !!!!
  const p5_projs: { component: P5Type, title: string, name: string, info?: string }[] = useMemo(() => [
    { component: P5_PLANE, title: 'HORIZON', name: 'horizon', info: 'MOVE YOUR CURSOR'},
    { component: P5_LORENZ_ATTRACTOR, title: 'CHAOS THEORY', name: 'chaos-theory' },
    { component: P5_LOADER, title: 'AFTERIMAGE', name: 'afterimage' },
    { component: P5_ANJA, title: 'ANJA', name: 'anja', info: 'MOVE YOUR CURSOR' },
    { component: P5_GEOSTORM, title: 'TRIGON SQUALL', name: 'trigon-squall' },
  ], []);

  useEffect(() => {
    const animationSequence = async () => {
      await controls.start('hidden');
      await controls.start('show');
    };
    animationSequence();

    const param_index: number = p5_projs.findIndex(item => item.name === projectName);
    param_index >= 0
      ? setIndex(param_index)
      : navigate(`/gallery/${p5_projs[0].name}`);
  }, [projectName, p5_projs, navigate, controls]);

  const handleNext = () => {
    const nextIndex = (index + 1) % p5_projs.length;
    navigate(`/gallery/${p5_projs[nextIndex].name}`);
  };

  const handleLast = () => {
    const prevIndex = (index - 1 + p5_projs.length) % p5_projs.length;
    navigate(`/gallery/${p5_projs[prevIndex].name}`);
  };

  const handleSwipes = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handleLast,
  });

  const { component: ActiveProject, title, info } = p5_projs[index];
  const RenderedProject = ActiveProject as React.ComponentType<P5Props>;


  return (
    <Container {...handleSwipes}>
      <DisplayBox>
        <ControlBox darkMode={darkmode}>
          <Button text={'LAST'} onclick={handleLast} />
          <Title>{title}</Title>
          <Button text={'NEXT'} onclick={handleNext} />
        </ControlBox>
        {info && <Info
          darkMode={darkmode}
          variants={infoAnimation}
          initial='hidden'
          animate='show'>
            {info}
        </Info>}
        <RenderedProject
          strokeColor={200}
          showControls={true}
          showSun={true}
          isMobile={sw} />
      </DisplayBox>
    </Container>
  );
};

const Container = styled.div`
  max-height: 100vh;
  overflow: hidden;
  height: 100vh;
`;
const Title = styled.h2`
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  font-weight: bold;
  font-family: 'Rubik', sans-serif;
`;
const DisplayBox = styled.div`
  position: fixed;
  height: 100vh;
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;
const ControlBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 10px 0 10px;
  width: 30%;
  text-wrap: wrap;
  color: ${(props: {darkmode: boolean}) => (props.darkmode ? 'white' : 'black')};
  background-color: ${(props: {darkmode: boolean}) => (props.darkmode ? '150' : null)};
  font-color: ${(props: {darkmode: boolean}) => (props.darkmode ? 'grey' : 'white')};
  z-index: 3;
  @media screen and (max-width: 1024px) {
    margin-top: 6vh;
    gap: 5vw;
    justify-content: center;
    width: auto;
  }
`;
const Info = styled(motion.div)`
  font-family: Rubik;
  font-weight: bold;
  color: ${(props: {darkmode: boolean}) => (props.darkmode ? 'white' : 'black')};
  background-color: ${(props: {darkmode: boolean}) => (props.darkmode ? '150' : null)};
  font-color: ${(props: {darkmode: boolean}) => (props.darkmode ? 'grey' : 'white')};
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'grey'};
  padding: 25px 80px;
`;
const infoAnimation = {
  hidden: { scale: 0, opacity: 0, borderWidth: '2px' },
  show: {
    scale: 1,
    opacity: 1,
    borderWidth: '0px',
    transition: {
      delay: 2,
      scale: { duration: 0.5 },
      opacity: { duration: 3 },
      borderWidth: { duration: 4, ease: 'linear' },
    },
  },
};

export default GalleryPage;