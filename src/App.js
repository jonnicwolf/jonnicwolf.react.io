import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/projects' element={<ProjectPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;