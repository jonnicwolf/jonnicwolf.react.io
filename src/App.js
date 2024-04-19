import { lazy, Suspense, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Loader from './components/navigation/Loader';
import LandingPage from './pages/LandingPage';
import NavBar from './components/navigation/NavBar';
import Test from './pages/Test.jsx';

const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'));
const AboutmePage = lazy(() => import('./pages/AboutmePage.jsx'));
const GalleryPage = lazy(() => import('./pages/GalleryPage.jsx'));

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container darkMode={darkMode}>
      { location.pathname !== '/' && <NavBar darkModeGetter={darkMode} darkModeSetter={setDarkMode} /> }
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/'         element={<LandingPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/gallery'  element={<GalleryPage />} />
          <Route path='/about'    element={<AboutmePage darkMode={darkMode}/>} />
          <Route path='/test'     element={<Test />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  background: ${props => props.darkMode ? '#5c5c5b' : '#fffcf5'};
  height: 200vh;
`;

export default App;
