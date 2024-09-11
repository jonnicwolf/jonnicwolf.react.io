import { FC, } from 'react';
// @ts-ignore 
import styled from 'styled-components';

type ButtonConfig = {
  name: string,
  component: JSX.Element
}

interface Props {
  children: ButtonConfig[];
  setter: React.Dispatch<React.SetStateAction<number>>;
  getter: number
};

const Carousel: FC<Props> = ({ children, setter, getter }) => {
  function handleNext (): void {
    if (getter >= children.length) setter(0)
      else setter(getter + 1);
  };

  function handlePrev (): void {
    if (getter <= 0) setter(children.length)
      else setter(getter - 1);
  };

  return (
    <Container>
      {/* <Button text='&#8678;' onclick={handlePrev} /> */}
      {children.map((Element, i)=>(
        <div key={i}>{Element.component}</div>
      ))}
      {/* <Button text='&#8680;' onclick={handleNext} /> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
`;

export default Carousel;
