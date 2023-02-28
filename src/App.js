import LandingPage from './pages/LandingPage';
import ProjectPage from './pages/ProjectPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/projects' element={<ProjectPage />} />
    </Routes>
  );
};

export default App;