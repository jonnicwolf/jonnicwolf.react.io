import { FC, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

import SideMenuButton from '../atoms/SideMenuButton';
import Carousel from '../atoms/Carousel';

const SideMenu: FC = () => {
  const { darkmode } = useContext(DarkmodeContext);

  const children = [
    <SideMenuButton img='devicon-react-original' />,
    <SideMenuButton img="devicon-blender-original" />,
    <SideMenuButton img="devicon-apple-original" />,
  ];

  return (
    <Container darkmode={darkmode}>
      <Current darkmode={darkmode}>WEB</Current>
      <Carousel
        children={children} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 25px 40px;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  `;
  const Current = styled.div`
  padding: 15px 60px;
  border: 1px solid red;
  font-family: Michroma;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;

export default SideMenu;
