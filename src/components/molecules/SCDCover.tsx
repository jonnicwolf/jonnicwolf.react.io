import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

interface Props {
  setter: (value: boolean) => void,
}

const SCDCover: FC<Props> = ({ setter }) => {
  function onMouseEnter () {
    setter(true);
  };

  return (
    <Container onMouseEnter={onMouseEnter}>
      <Img src="https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/z265st6zxzzcvahg9sca" alt="" />
    </Container>
  );
};


const Container = styled.div`
  height: 100%;
  width: 100%;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export default SCDCover;
