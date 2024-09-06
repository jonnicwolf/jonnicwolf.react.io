import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import Footer from '../components/atoms/Footer';

const Test: FC = () => {
  return (
    <Container>
      {/* WELL HELLO MOTHERFUCKER, NOTHING TO SEE HERE */}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 26vh;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Test;
