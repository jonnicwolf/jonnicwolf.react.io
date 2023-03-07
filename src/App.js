import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NavBar from './components/navigation/NavBar';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import AboutmePage from './pages/AboutmePage';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
      <div>
        {location.pathname !== '/' && <NavBar/>}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/fezz' element={<AboutmePage />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;