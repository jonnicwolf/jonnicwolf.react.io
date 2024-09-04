import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import P5_LOADER from '../p5/P5_LOADER';

interface Props {
  strokeColor: number,
};

const Loader: FC<Props> = ({ strokeColor }) => {
  return (
    <Container>
      <P5Container>
        <P5_LOADER strokeColor={strokeColor} controls={false} />
      </P5Container>
      <Loading>LOADING</Loading>
    </Container>
  );
};

// Define a styled component named LoadingAnimation
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(112, 110, 110);
  height: 100vh;
`;
const P5Container = styled.div`
  z-index: 1;
`;
const Loading = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 3vh;
  color: white;
  z-index: 2;
`;

export default Loader;
