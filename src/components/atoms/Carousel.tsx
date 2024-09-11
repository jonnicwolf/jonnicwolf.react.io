import { FC, useState } from 'react';
// @ts-ignore 
import styled from 'styled-components';

import Button from '../../assets/buttons/Button';

interface Props {
  children: React.ReactNode[];
};

const Carousel: FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleNext (): void {
    if (currentIndex >= children.length) setCurrentIndex(0)
      else setCurrentIndex(currentIndex + 1);
  };

  function handlePrev (): void {
    if (currentIndex <= 0) setCurrentIndex(children.length)
      else setCurrentIndex(currentIndex - 1);
  };

  return (
    <Container>
      {/* <Button text='&#8678;' onclick={handlePrev} /> */}
      {children.map((Element, i)=>(
        <div key={i}>{Element}</div>
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
