import { FC, useState, useEffect } from 'react';
// @ts-ignore
import styled from 'styled-components';

import P5_LOADER from '../p5/P5_LOADER';

interface Props {
  strokeColor: number,
};

const Loader: FC<Props> = ({ strokeColor }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer)
  }, [isLoaded]);

  return (
    <>
      {!isLoaded &&
        <Container>
          <P5Container>
            <P5_LOADER strokeColor={strokeColor} controls={false} />
          </P5Container>
          <Loading>LOADING</Loading>
        </Container>}
    </>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(112, 110, 110);
  height: 100vh;
  width: 100vw;
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
