import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/navigation/NavBar';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import AboutmePage from './pages/AboutmePage';

function App() {
  const location = useLocation();
  return (
    <Container>
      {location.pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/fezz' element={<AboutmePage />} />
      </Routes>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100%;
  overflow-x: hidden;
`;

export default App;
