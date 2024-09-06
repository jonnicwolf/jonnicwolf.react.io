import { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

import Socials from './Socials';

const Footer: FC = () => {
  const { darkmode } = useContext(DarkmodeContext);

  return (
    <Container>
      <Dummy />
      <Content>
        <SocialsWrap>
          <Socials gap='20px' />
        </SocialsWrap>

        <RampartOneText darkmode={darkmode}>
          FEZZ
        </RampartOneText>

        <Copyright darkmode={darkmode}>Copyright &#169; 2024 Jonathan Narine</Copyright>
      </Content>
      <ButtonWrap/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 200px;
  width: 98%;
  position: relative;
  justify-content: center;
  background-color: rgba(179, 179, 179, 0.8);
  border-radius: 0 0 40px 40px;

  &::before {
    content: '';
    position: absolute;
    top: -150px;
    left: 0;
    right: 0;
    height: 150px; /* Thickness of the gradient border */
    background: linear-gradient(to top, rgba(179, 179, 179,0.8), rgba(255, 0, 0, 0));
  }
`;
const Dummy = styled.div`
  width: 30%;
  border: 1px solid red;
`
const Content = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const ButtonWrap = styled(Dummy)``;
  const SocialsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const RampartOneText = styled.p`
    font-family: var(--font-family-rampart-one);
    font-weight: var(--font-weight-normal);
    font-size: 3.5rem;
    margin: 0;
    color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;

const Copyright = styled.div`
  font-size: 1rem;
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;

export default Footer;
