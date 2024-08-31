import React, { FC, LazyExoticComponent, lazy, Suspense, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkmodeContext, DarkmodeProvider } from './Darkmode';
import styled from 'styled-components';

// import ScrollToTop from './components/utils/ScrollToTop';
import Loader from './components/navigation/Loader';
import NavBar from './components/navigation/NavBar.tsx';
import MobileNav from './components/navigation/MobileNav';

import Test from './routes/Test.jsx';
const ProjectPage: <LazyExoticComponent> = lazy(() => import('./routes/ProjectPage'))
;
const GalleryPage = lazy(() => import('./routes/GalleryPage'));

interface StyleProps {
  darkmode: boolean,
  isMobile: boolean,
};

const App: FC = () => {
  const [enterClicked, setEnterClicked] = useState<boolean>(false);
  const { darkmode } = useContext(DarkmodeContext);
  const isMobile: boolean = window.innerWidth < 1025;

  return (
    <Container darkmode={darkmode} isMobile={isMobile}>
      { isMobile && <MobileNav enterClicked={enterClicked} />}
      {!isMobile && <NavBar />}

    {/* <ScrollToTop /> */}
      <Suspense fallback={<Loader strokeColor={150}/>} >
        <Routes>
          <Route path='/' element={<ProjectPage setEnterClicked={setEnterClicked} />} />
          <Route path='/gallery' element={<GalleryPage/>} />
          <Route path='/gallery/:projectName' element={<GalleryPage />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  overflow-x: hidden;
  background: ${props => props.darkmode ? '#5c5c5b' : '#fffcf5'};
`;

export default function ContextApp () {
  return (
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  );
};
