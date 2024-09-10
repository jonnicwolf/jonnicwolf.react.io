import { FC } from 'react';
// @ts-ignore
import styled from 'styled-components';

import Button from '../../assets/buttons/Button';
import Carousel from '../atoms/Carousel';

interface Cprops {
  text: string
}

const CarouselItem: FC<Cprops> = ({text}) => {
  return (
    <Button text={text} />
  );
};

const SideMenu: FC = () => {
  return (
    <Carousel 
      children={[
      <CarouselItem text='</>' />,
      <CarouselItem text='🍎' />,
      <CarouselItem text='🔫' />] } />
  );
};



export default SideMenu;
