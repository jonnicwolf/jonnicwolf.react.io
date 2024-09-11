import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import SideMenuButton from '../atoms/SideMenuButton';
import Carousel from '../atoms/Carousel';

const SideMenu: FC = () => {
  return (
    <Container>
      <Current>WEB</Current>
      <Carousel
        children={[
        <SideMenuButton img="devicon-blender-original" />,
        <SideMenuButton img="devicon-apple-original" />,
         ] } />
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
  padding: 25px 80px;
  // padding: 1em;
  border: 1px solid red;
  font-family: Michroma;
`;

export default SideMenu;
