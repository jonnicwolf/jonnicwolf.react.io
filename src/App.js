import { lazy, Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop.jsx';

import Loader from './components/navigation/Loader';
import NavBar from './components/navigation/NavBar';
import MobileNav from './components/navigation/MobileNav.jsx';
import Test from './pages/Test.jsx';

const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));

function App() {
  const isMobile = window.innerWidth < 1025;
  const [darkMode, setDarkMode] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);

  return (
    <Container darkMode={darkMode} isMobile={isMobile}>
      { isMobile && <MobileNav enterClicked={enterClicked} />}
      {!isMobile && <NavBar darkModeGetter={darkMode} darkModeSetter={setDarkMode} />}

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
  );
};

const Container = styled.div`
  overflow-x: hidden;
  background: ${props => props.darkMode ? '#5c5c5b' : '#fffcf5'};
`;

export default App;
