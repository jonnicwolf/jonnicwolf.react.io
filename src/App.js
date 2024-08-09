import { lazy, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ScrollToTop from './components/ScrollToTop.jsx';

import Loader from './components/navigation/Loader';
import NavBar from './components/navigation/NavBar';
import MobileNav from './components/navigation/MobileNav.jsx';
import Test from './pages/Test.jsx';

import LandingPage from './pages/LandingPage';
const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));
const AboutmePage = lazy(() => import('./pages/AboutmePage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));

function App() {
  const location = useLocation();
  const isMobile = window.innerWidth < 1025;
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container darkMode={darkMode} isMobile={isMobile}>
      { location.pathname !== '/' && isMobile
        ? <MobileNav />
        : location.pathname !== '/' && !isMobile
          ? <NavBar darkModeGetter={darkMode} darkModeSetter={setDarkMode} />
          : null
      }
      <ScrollToTop />
      <Suspense fallback={<Loader strokeColor={150}/>}>
        <Routes>
          <Route path='/'         element={<LandingPage />} />
          <Route path='/projects' element={<ProjectPage darkMode={darkMode}/>} />
          <Route path='/gallery'  element={<GalleryPage darkMode={darkMode}/>} />
          <Route path='/gallery/:projectName'  element={<GalleryPage darkMode={darkMode}/>} />
          <Route path='/about'    element={<AboutmePage darkMode={darkMode}/>} />
          <Route path='/test'     element={<Test />} />
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
