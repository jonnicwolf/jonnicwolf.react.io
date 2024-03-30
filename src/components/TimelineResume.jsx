import React from 'react';
import styled from 'styled-components';

const TimelineResume = () => {
  return (
    <Container>
      <Timeline />
      <div class="container right">
          <div class="content">
              <h2>2021 | <a href="https://www.pursuit.org/fellowship?gclid=Cj0KCQjwrsGCBhD1ARIsALILBYoZZTe0XdzsD0GkFi90K4dVpBijEedjBi69BZTan0FS3X1s1DfZiOUaAh4PEALw_wcB" target='_blank'>Pursuit</a></h2>
              <p>12-month, Google-funded software engineering fellowship with a 9% acceptance rate (out of 1500+ applicants) whose graduates are prepared with both technical and professional skills and have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify.</p>
          </div>
      </div>
      <div class="container left">
          <div class="content">
              <h2>2020 | <a href='https://www.mayamezcal.com/' target='_blank'>MayaMezcal</a>  </h2>
              <p>300 cover Mezcal & Tequila bar service and Pueblo/Moroccon fare. Suit and tie atmosphere speakeasy serving cocktails crafted by Mixologist Kristo Tomingas.
              </p>
          </div>
      </div>
      <div class="container right">
          <div class="content">
              <h2>2019 | <a href="https://www.littlespain.com/" target='_blank'>Mercado Little Spain</a></h2>
              <p>Trained under Master Sommelier AJ Ojeda-Pons, Master Sommelier Andy Myers, and esteemed cocktail innovator Miguel Lancha of BarMini. Serving Spanish wines and cocktails at 4000 covers nightly.</p>
          </div>
      </div>        
      <div class="container left">
          <div class="content">
              <h2>2018 | <a href="https://www.facebook.com/nighthawkstroy" target='_blank'>Nighthawks</a></h2>
              <p>Weekend Bartender handling 300 covers handling service and counter solo. Implemented a cost-effective weekly rotating cocktail menu. Prepared all ingredients for beverage service, including syrups, infusions and garnishes.</p>
          </div>
      </div>
      <div class="container right">
          <div class="content">
              <h2>2017 | <a href="https://www.spamirbeau.com/" target='_blank'>Spa Mirbeau </a>    </h2>
              <p>Reworked wine list in tandem with Execute Chef. Conducted performance reviews. Assisted the team in meeting sales, stock loss, labour objectives and margin goals to increase profitability.
              </p>
          </div>
      </div>
    </Container> 
  );
};

const Container = styled.div`
  align-self: center;
  position: relative;
  margin-bottom: 100px;
  padding-inline-start: inherit;
  padding-inline-end: inherit;
`;


// #resume h2 {
//   /* border: 2px solid white; */
//   font-family: "bungee Hairline";
//   font-size: 35px;
// }

// #resume a {
//   text-decoration-line: none;
//   color: gold;
// }

// #resume a:hover {
//   font-family: "Bungee", cursive;
//   background-color: crimson;
//   border: 2px solid gold;
//   color: gold;
//   transition: 0.3s;
// }

// /* The actual timeline (the vertical ruler)*/
const Timeline = styled.div`
  position: absolute;
  left: calc(50% - 5px);
  width: 10px;
  height: 835px;
  background-color: crimson;

  /* The actual timeline (the vertical ruler) */
  && after {
    content: "";
    position: absolute;
    width: 6px;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    color: crimson;
  }
`;

// const TimelineLink = styled.a`
//   text-decoration-line: none;
//   /* font-size: 60px; */
// `;


// /* Container around content */
// const ContentContainer = styled.div`
//   /* border: 2px solid white; */
//   box-sizing: border-box;
//   height: 150px;
//   padding: 10px 40px;
//   position: relative;
//   background-color: inherit;
//   width: 50%;

// /* The circles on the timeline */
//   && after {
//     content: "";
//     position: absolute;
//     width: 25px;
//     height: 25px;
//     right: -17px;
//     background-color: #0c0529;
//     border: 4px solid gold;
//     top: 15px;
//     border-radius: 50%;
//     z-index: 1;
//   }
// `;

// /* Place the container to the left */
// const Left = styled().left {
//   left: 0;
// }

// /* Place the container to the right */
// .right {
//   left: 50%;
// }

// /* Add arrows to the left container (pointing right) */
// .left::before {
//   content: " ";
//   height: 0;
//   position: absolute;
//   top: 22px;
//   width: 0;
//   z-index: 1;
//   right: 30px;
//   border: medium solid rgb(0, 255, 255);
//   border-width: 10px 0 10px 10px;
//   border-color: transparent transparent transparent rgb(0, 255, 255);
// }

 // /* Add arrows to the right container (pointing left) */
// .right::before {
//   content: " ";
//   height: 0;
//   position: absolute;
//   top: 22px;
//   width: 0;
//   z-index: 1;
//   left: 30px;
//   border: medium solid rgb(0, 255, 255);
//   border-width: 10px 10px 10px 0;
//   border-color: transparent rgb(0, 255, 255);
// }

// /* Fix the circle for containers on the right side */
// .right::after {
//   left: -16px;
// }

// /* The actual content */
// .content {
//   /* border: 2px solid white; */
//   font-family: "Open Sans", sans-serif;
//   font-size: 25px;
//   padding: 20px 30px;
//   /* height: 100px; */
//   color: rgba(0, 255, 255);
//   position: relative;
//   border-radius: 15px;
//   border: 2px solid rgba(0, 255, 255);
//   height: 180px;
//   overflow-y: auto;
// }

// #resume-btn-container img {
//   height: 100px;
//   background-color: rgb(0, 255, 255);
//   fill: red;
//   /* border: 2px solid rgba(0, 255, 255); */
//   border-radius: 15px;
// }

export default TimelineResume;