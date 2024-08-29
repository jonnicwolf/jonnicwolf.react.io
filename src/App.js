import { lazy, Suspense, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkmodeContext, DarkModeProvider } from './components/contexts/Darkmode.jsx';
import styled from 'styled-components';

import ScrollToTop from './components/ScrollToTop.jsx';
import Loader from './components/navigation/Loader';
import NavBar from './components/navigation/NavBar';
import MobileNav from './components/navigation/MobileNav.jsx';
import Test from './pages/Test.jsx';

const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);
  const isMobile = window.innerWidth < 1025;
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <DarkModeProvider>
      <Container darkmode={darkmode} isMobile={isMobile}>
        { isMobile && <MobileNav enterClicked={enterClicked} />}
        {!isMobile && <NavBar darkModeGetter={darkmode} darkModeSetter={setDarkMode} />}

        <ScrollToTop />
        <Suspense fallback={<Loader strokeColor={150}/>}>
          <Routes>
            <Route path='/' element={<ProjectPage darkMode={darkMode} setEnterClicked={setEnterClicked} />} />
            <Route path='/gallery' element={<GalleryPage darkMode={darkMode}/>} />
            <Route path='/gallery/:projectName'  element={<GalleryPage darkMode={darkMode}/>} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </Suspense>
      </Container>
    </DarkModeProvider>
  );
};

const Container = styled.div`
  overflow-x: hidden;
  background: ${props => props.darkmode ? '#5c5c5b' : '#fffcf5'};
`;

export default App;
