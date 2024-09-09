import { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

import Socials from './Socials';
import Button from '../../assets/buttons/Button';

const Footer: FC = () => {
  const { darkmode } = useContext(DarkmodeContext);

  function scrollToTop (): void {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  // const colors = {
  //   primary: '#000000',
  //   secondary: 'none',
  //   tertiary: '#969696'
  // };
  const colors = {
    primary: '#969696',
    secondary: '#ffffff',
    tertiary: 'white',
  };

  return (
    <Container>
      <Dummy />
      <Content>
        <SocialsWrap>
          <Socials gap='10px'  colors={colors} />
        </SocialsWrap>

        <RampartOneText darkmode={darkmode}>
          FEZZ
        </RampartOneText>

        <Copyright darkmode={darkmode}>Copyright &#169; 2024 Jonathan Narine</Copyright>
      </Content>

      <ButtonWrap>
        <ToTopButton text='&#8593;' onclick={scrollToTop} />
      </ButtonWrap>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 200px;
  width: 97%;
  position: relative;
  justify-content: center;
  background-color: rgba(179, 179, 179, 0.8);
  margin-top: auto;
  border-radius: 0 0 20px 20px;

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
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
  const SocialsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const RampartOneText = styled.p`
    font-family: Rampart One;
    font-size: 3.5rem;
    margin: 0;
    color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;

const Copyright = styled.div`
  font-size: 1rem;
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  @media screen and (max-width: 720px) {
    font-size: 0.7rem;
  }
`;
const ButtonWrap = styled(Dummy)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ToTopButton = styled(Button)`
  align-self: end;
`;
export default Footer;
