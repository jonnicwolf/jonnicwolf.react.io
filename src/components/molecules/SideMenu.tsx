import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import SideMenuButton from '../atoms/SideMenuButton';
import Carousel from '../atoms/Carousel';

const SideMenu: FC = () => {

  const children = [

    <SideMenuButton img='devicon-react-original' />,
    <SideMenuButton img="devicon-blender-original" />,
    <SideMenuButton img="devicon-apple-original" />,
  ];

  return (
    <Container>
      <Current>WEB</Current>
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
  border: 1px solid red;
  gap: 20px;
  width: 300px;
  height: 300px;
  `;
  const Current = styled.div`
  padding: 15px 60px;
  border: 1px solid red;
  font-family: Michroma;
`;

export default SideMenu;
