import { lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = lazy(() => import('./components/navigation/NavBar'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const ProjectPage = lazy(()=> import('./pages/ProjectPage'));
const AboutmePage = lazy(() => import('./pages/AboutmePage'));

function App() {
  const location = useLocation();
  return (
    <Container>
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/about' element={<AboutmePage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

export default App;
