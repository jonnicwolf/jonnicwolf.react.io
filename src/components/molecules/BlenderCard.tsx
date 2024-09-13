import { FC, ReactElement } from 'react';
// @ts-ignore
import styled from 'styled-components';

interface Props {
  light: number[],
  color: string,
  model: ReactElement,
  intensity: number,
  orbitControls: boolean,
};

const BlenderCard: FC<Props> = ({ light, color, model, intensity, orbitControls }) => {
  return (
    <Container>
      
    </Container>
  );
};

const Container = styled.div`
  width: 800px;
  height: 800px;
`;

export default BlenderCard;
