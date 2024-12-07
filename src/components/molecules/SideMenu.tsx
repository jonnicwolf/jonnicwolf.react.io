import { FC, useState, useContext } from 'react';
import { useDarkmode } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

import SideMenuButton from '../atoms/SideMenuButton';
import Carousel from '../atoms/Carousel';

interface Props {
  getter: number,
  setter: React.Dispatch<React.SetStateAction<number>>
};

const SideMenu: FC<Props> = ({ getter, setter }) => {
  const { darkmode } = useDarkmode();

  function handleClick (i: number): void {
    setter(i);
  };

  const children = [
    { name: 'WEB', component: <SideMenuButton img='devicon-react-original' onclick={()=> handleClick(0)} /> },
    { name: 'BLENDER', component: <SideMenuButton img='devicon-blender-original' onclick={()=> handleClick(1)} /> },
    { name: 'IOS', component: <SideMenuButton img='devicon-apple-original' onclick={()=> handleClick(2)} /> },
  ];

  return (
    <Container darkmode={darkmode}>
      <Current darkmode={darkmode}>{children[getter].name}</Current>
      <Carousel
        children={children}
        setter={setter}
        getter={getter} />
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 15px 0;
  width: 150px;
  border: 1px solid red;
  font-family: Michroma;
  border: 1px solid ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
  color: ${(props: {darkmode: boolean}) => props.darkmode ? 'white' : 'black'};
`;

export default SideMenu;
