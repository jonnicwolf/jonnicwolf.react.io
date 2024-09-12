import { FC, SetStateAction } from 'react';
// @ts-ignore
import styled from 'styled-components';

interface Props {
  setter: React.Dispatch<SetStateAction<boolean>>,
  link: string,
}

const SCDCover: FC<Props> = ({ setter, link }) => {
  function onMouseEnter () {
    setter(true);
  };

  return (
    <Container onMouseEnter={onMouseEnter}>
      <Img src={link} alt="Project Example" />
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
