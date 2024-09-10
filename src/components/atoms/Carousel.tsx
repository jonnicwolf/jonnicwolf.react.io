// import { dblClick } from '@testing-library/user-event/dist/click';
// import { randomUUID } from 'crypto';
// import { FC, useState } from 'react';
// // @ts-ignore 
// import styled from 'styled-components';

// interface Props {
//   children: React.ReactNode[];
// };

// const Carousel: FC<Props> = ({ children }) => {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);

//   function handleNext (): void {
//     if (currentIndex >= children.length) setCurrentIndex(0)
//       else setCurrentIndex(currentIndex + 1);
//   };

//   function handlePrev (): void {
//     if (currentIndex <= 0) setCurrentIndex(children.length)
//       else setCurrentIndex(currentIndex - 1);
//   };

//   return (
//     <div>
//       {children.map((Element)=>(
//         <div key={randomUUID()}>{Element}</div>
//       ))}
//     </div>
//   );
// };

// export default Carousel;

import React, { FC, useState } from 'react';
//@ts-ignore
import styled from 'styled-components';

// Styled Components

const CarouselContainer = styled.section`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`;

const Viewport = styled.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`;

const Slide = styled.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;
  scroll-snap-align: center;
  
  &:nth-child(even) {
    background-color: #99f;
  }

  &:before {
    content: counter(item);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-40%,70px);
    color: #fff;
    font-size: 2em;
  }
`;

const Snapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Navigation = styled.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`;

const NavigationList = styled.ol`
  display: inline-block;
`;

const NavigationItem = styled.li`
  display: inline-block;
`;

const NavigationButton = styled.a`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #333;
  background-clip: content-box;
  border: 0.25rem solid transparent;
  border-radius: 50%;
  font-size: 0;
  transition: transform 0.1s;
`;

const PrevButton = styled.a`
  position: absolute;
  top: 0;
  left: -1rem;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='0,50 80,100 80,0' fill='%23fff'/%3E%3C/svg%3E");
`;

const NextButton = styled.a`
  position: absolute;
  top: 0;
  right: -1rem;
  margin-top: 37.5%;
  width: 4rem;
  height: 4rem;
  transform: translateY(-50%);
  border-radius: 50%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='100,50 20,100 20,0' fill='%23fff'/%3E%3C/svg%3E");
`;

interface Props {
  children: React.ReactNode[];
}

const Carousel: FC<Props> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function handleNext(): void {
    if (currentIndex >= children.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrev(): void {
    if (currentIndex <= 0) {
      setCurrentIndex(children.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <CarouselContainer aria-label="Gallery">
      <Viewport>
        {children.map((Element, index) => (
          <Slide key={index}>
            <Snapper>{Element}</Snapper>
          </Slide>
        ))}
      </Viewport>
      <PrevButton href="#!" onClick={handlePrev}>Previous</PrevButton>
      <NextButton href="#!" onClick={handleNext}>Next</NextButton>
      <Navigation>
        <NavigationList>
          {children.map((_, index) => (
            <NavigationItem key={index}>
              <NavigationButton href={`#${index + 1}`} onClick={() => setCurrentIndex(index)}>
                Go to slide {index + 1}
              </NavigationButton>
            </NavigationItem>
          ))}
        </NavigationList>
      </Navigation>
    </CarouselContainer>
  );
};

export default Carousel;
