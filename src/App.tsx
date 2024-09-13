import { FC, lazy, Suspense, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DarkmodeContext, DarkmodeProvider } from './Darkmode';
// @ts-ignore
import styled from 'styled-components';

import Loader from './components/navigation/Loader';
import NavBar from './components/navigation/NavBar';
import MobileNav from './components/navigation/MobileNav';
import Footer from './components/atoms/Footer';

const Test        = lazy(() => import('./routes/Test'))
const WebProjects = lazy(() => import('./routes/WebProjects'));
const Gallery = lazy(() => import('./routes/Gallery'));
const IOSProjects = lazy(() => import('./routes/IOSProjects'));

interface StyleProps {
  darkmode: boolean,
  isMobile: boolean,
};

const App: FC = () => {
  const [enterClicked, setEnterClicked] = useState<boolean>(false);
  const [projectType, setProjectType] = useState<number>(0);

  const { darkmode } = useContext(DarkmodeContext);
  const isMobile: boolean = window.innerWidth < 1025;

  return (
    <Container darkmode={darkmode} isMobile={isMobile}>
      <Suspense fallback={<Loader strokeColor={150} />} >
        { isMobile && <MobileNav enterClicked={enterClicked} />}
        {!isMobile && <NavBar />}
        <Routes>
          <Route path='/' element={<WebProjects setEnterClicked={setEnterClicked} enterClicked={enterClicked} projectType={projectType} setProjectType={setProjectType} />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/gallery/:projectName' element={<Gallery />} />
          <Route path='/ios' element={<IOSProjects />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </Suspense>

      <Footer />
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  overflow-x: hidden;
  background: ${(props: {darkmode: boolean}) => props.darkmode ? '#5c5c5b' : '#fffcf5'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-apart;
  height: 100%;
`;

export default function ContextApp (): JSX.Element {
  return (
    <DarkmodeProvider>
      <App />
    </DarkmodeProvider>
  );
};
