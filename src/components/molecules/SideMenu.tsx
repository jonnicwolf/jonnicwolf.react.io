import { FC, useState, useContext } from 'react';
import { DarkmodeContext } from '../../Darkmode';
// @ts-ignore
import styled from 'styled-components';

import SideMenuButton from '../atoms/SideMenuButton';
import Carousel from '../atoms/Carousel';

const SideMenu: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const { darkmode } = useContext(DarkmodeContext);

  function setter (i: number): void {
    setCurrent(i);
  };

  const children = [
    { name: 'WEB', component: <SideMenuButton img='devicon-react-original' onclick={()=> setter(0)}/> },
    { name: 'BLENDER', component: <SideMenuButton img='devicon-blender-original' onclick={()=> setter(1)}/> },
    { name: 'IOS', component: <SideMenuButton img='devicon-apple-original' onclick={()=> setter(2)} /> },
  ];

  return (
    <Container darkmode={darkmode}>
      <Current darkmode={darkmode}>{children[current].name}</Current>
      <Carousel
        children={children} setter={setCurrent} getter={current}/>
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
