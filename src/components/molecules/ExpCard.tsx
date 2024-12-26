import { FC } from 'react';
// @ts-ignore'
import styled from 'styled-components';

import LinkButton from '../../assets/buttons/LinkButton';

interface Props {
  viewSetter: (value: string) => void,
}

const ExpCard: FC<Props> = ({ viewSetter }) => {
  return (
    <Container>
      <Iframe src="https://docs.google.com/document/d/e/2PACX-1vRyXRd1lF-re6bNRig9bRmNPyA_p8Uhxz-PVDUN_4hGpU10bRk5kdDuMqFFUSh2y26EUbUuMgXzHa54/pub?embedded=true" />

      <Buttons>
        <LinkButton
          onClick={() => viewSetter('tech')}
          textContent='TECH'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        <LinkButton
          onClick={() => viewSetter('contact')}
          textContent='GET IN TOUCH'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        <LinkButton
          onClick={() => viewSetter('bio')}
          textContent='ABOUT'
          isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        </Buttons>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  height: 800px;
`;

const Iframe = styled.iframe`
  width: 840px;
  height: 740px;
  border-bottom: none;
  
  @media screen and (max-width: 600px) {
    height: 60vh;
    width: 95vw;
    overflow: hidden;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export default ExpCard;
