import { FC, lazy, Suspense, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import {useDarkmode, } from './Darkmode';
import styled from 'styled-components';

import Loader from './components/navigation/Loader';
import NavBar from './components/navigation/NavBar';
import MobileNav from './components/navigation/MobileNav';

const Test        = lazy(() => import('./routes/Test'))
const WebProjects = lazy(() => import('./routes/WebProjects'));
const Gallery     = lazy(() => import('./routes/Gallery'));
const IOSProjects = lazy(() => import('./routes/IOSProjects'));
const Blender = lazy(() => import('./routes/Blender'));

interface WebProjectsProps {
  darkmode: boolean,
  isMobile: boolean,
};

const App: FC = () => {
  const [enterClicked, setEnterClicked] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<number>(0);

  const { darkmode, } = useDarkmode();
  const isMobile: boolean = window.innerWidth < 1025;

  return (
  <Container darkmode={darkmode} isMobile={isMobile}>
    <Suspense fallback={<Loader strokeColor={150} />} >
      { isMobile && <MobileNav enterClicked={enterClicked} />}
      {!isMobile && <NavBar />}
      <Routes>
        <Route path='/' element={
          <WebProjects
            setEnterClicked={setEnterClicked}
            enterClicked={enterClicked}
            projectType={projectType}
            setProjectType={setProjectType} />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/gallery/:projectName' element={<Gallery  />} />
        <Route path='/ios' element={<IOSProjects />} />
        <Route path='/3D' element={<Blender />} />
        <Route path='/test' element={<Test />} /> 
      </Routes>
    </Suspense>
  </Container>
  );
};

const Container = styled.div<WebProjectsProps>`
  overflow-x: hidden;
  background: ${(props: {darkmode: boolean}) => props.darkmode ? '#5c5c5b' : '#fffcf5'};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350vh;

  @media screen and (max-width: 600px) {
    height: 300vh;
  }
`;

export default function ContextApp (): JSX.Element {
  return (
    <App />
  );
};
