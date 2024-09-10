import { FC, useState } from 'react';
// @ts-ignore 
import styled from 'styled-components';

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
      {children.map((Element, i)=>(
        <div key={i}>{Element}</div>
      ))}
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
