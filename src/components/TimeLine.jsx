import React from 'react';
import styled from 'styled-components';
import LinkButton from './Button';

const TimeLine = () => {
  return (
    <>
      <Header>Corporate Experience</Header>
      <div>
        <Timeline />
        <Right>
          <Content>
            <h3>2013 | <a href="https://www.jpmorgan.com/global" target='_blank' rel='noreferrer'><LinkButton textContent={'JPMorgan Chase & Co.'} fontSize={'25px'}/></a></h3>
            <h4>Project Management Intern</h4>
            <p>Verified the conditions and equipment used in all server rooms at JPMC HQ at 270 Park Ave. Remediated server rooms at Chase Manhattan Tower. Coordinated team meetings and took meeting minutes for team members across 4 time zones.</p>
          </Content>
        </Right>
        <Left>
          <Content>
            <h3>2021 | <a href="https://www.pursuit.org/fellowship?gclid=Cj0KCQjwrsGCBhD1ARIsALILBYoZZTe0XdzsD0GkFi90K4dVpBijEedjBi69BZTan0FS3X1s1DfZiOUaAh4PEALw_wcB" target='_blank' rel='noreferrer'><LinkButton textContent={'Pursuit'} fontSize={'25px'}/></a></h3>
            <h4>Full Stack Web Development Fellow</h4>
            <p>A 12-month, Google-funded software engineering fellowship with a 9% acceptance rate (out of 1500+ applicants) whose graduates are prepared with both technical and professional skills and have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify.</p>
          </Content>
        </Left>
        <Right>
          <Content>
            <h3>2022 | <a href="https://seatgeek.com/about" target='_blank' rel='noreferrer'><LinkButton textContent={'SeatGeek'} fontSize={'25px'}/></a></h3>
            <h4>Apprentice Software Engineer</h4>
            <p>Built monitors and alarms in Datadog for capturing errors for client file upload failures, utilizing Terraform for deployment. Created the Matching Tool Search & Match modal feature to increase visibility of ticket items that point to no particular event. Engaged in rotational on-call duties and operated in command centers during the high-demand ticket sales period for Taylor Swift's Eras tour. Added support for the CX team in the Integrated Inventory Card by creating logic to show the primary provider as well as the appropriate league.</p>
          </Content>
        </Right>
      </div>
    </>
  );
};

const Header = styled.div`
  font-family: var(--font-family-rubik);
  padding-bottom: -100px;
  font-size: 2rem;
  font-weight: bold;
`;
const Timeline = styled.div`
  position: absolute;
  left: calc(50% - 5px);
  width: 5px;
  height: 51vh;
  background-color: black;
  border-radius: 14px;
`;
const Side = styled.div`
  display: flex;
  align-self: center;
  position: relative;
  margin-bottom: 100px;
  margin-bottom: 1px;
  padding-inline-start: inherit;
  padding-inline-end: inherit;
  width: 45vw;
`;

const Left = styled(Side)`
  left: -53%;

  &&::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    z-index: 1;
    right: -10px;
    border: medium solid rgb(0, 0, 0);
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent rgb(0, 0, 0);
  }
`;
const Right = styled(Side)`
  left: 52%;

  &::after {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    border: medium solid rgb(0, 255, 255);
    border: medium solid rgb(0,0,0);
    border-width: 10px 10px 10px 0;
    border-color: transparent rgb(0, 255, 255);
    border-color: transparent rgb(0, 0, 0);
  }
    
  /* Fix the circle for containers on the right side */
  &&::after {
      left: -10px;
  }
`;
const Content = styled.div`
  font-family: var(--font-family-rubik);
  font-size: 25px;
  padding: 20px 30px;
  color: black;
  position: relative;
  border-radius: 15px;
  border: 2px solid black;
  height: 180px;
  overflow-y: auto;
`;

export default TimeLine;
