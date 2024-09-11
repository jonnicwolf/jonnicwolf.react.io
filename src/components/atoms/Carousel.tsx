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

const Carousel: FC<Props> = ({ children }) => {

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
  align-items: center;
  gap: 15px;
`;

export default Carousel;
