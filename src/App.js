import LandingPage from './pages/LandingPage';
import { Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route path='/' component={<LandingPage />} />
      <Route path='/' component={<ProjectPage />} />
    </Router>
  );
}

export default App;