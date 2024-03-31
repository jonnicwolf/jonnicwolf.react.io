import React from 'react';
import styled from 'styled-components';
import LinkButton from './Button';

const TimeLine = () => {
  return (
    <Container>
      <Header>Corporate Experience</Header>
      <div>
        <Content>
          <h3>2013 | <a href="https://www.jpmorgan.com/global" target='_blank' rel='noreferrer'><LinkButton textContent={'JPMorgan Chase & Co.'} fontSize={'20px'}/></a></h3>
          <h4>Project Management Intern</h4>
          <p>Verified the conditions and equipment used in all server rooms at JPMC HQ at 270 Park Ave. Remediated server rooms at Chase Manhattan Tower. Coordinated team meetings and took meeting minutes for team members across 4 time zones.</p>
        </Content>
      
        <Content>
          <h3>2021 | <a href="https://www.pursuit.org/fellowship?gclid=Cj0KCQjwrsGCBhD1ARIsALILBYoZZTe0XdzsD0GkFi90K4dVpBijEedjBi69BZTan0FS3X1s1DfZiOUaAh4PEALw_wcB" target='_blank' rel='noreferrer'><LinkButton textContent={'Pursuit'} fontSize={'20px'}/></a></h3>
          <h4>Full Stack Web Development Fellow</h4>
          <p>A 12-month, Google-funded software engineering fellowship with a 9% acceptance rate (out of 1500+ applicants) whose graduates are prepared with both technical and professional skills and have been hired as developers at leading companies such as Pinterest, JP Morgan, and Spotify. </p>
        </Content>
        <Content>
          <h3>2022 | <a href="https://seatgeek.com/about" target='_blank' rel='noreferrer'><LinkButton textContent={'SeatGeek'} fontSize={'20px'}/></a></h3>
          <h4>Apprentice Software Engineer</h4>
          <p>Built monitors and alarms in Datadog for capturing errors for client file upload failures, utilizing Terraform for deployment. Created the Matching Tool Search & Match modal feature to increase visibility of ticket items that point to no particular event. Engaged in rotational on-call duties and operated in command centers during the high-demand ticket sales period for Taylor Swift's Eras tour. Added support for the CX team in the Integrated Inventory Card by creating logic to show the primary provider as well as the appropriate league.</p>
        </Content>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Header = styled.div`
  font-family: var(--font-family-rubik);
  padding-bottom: -100px;
  font-size: 2rem;
  font-weight: bold;
`;
const Content = styled.div`
  font-family: var(--font-family-rubik);
  font-size: 25px;
  padding: 20px 30px;
  color: black;
  position: relative;
  border-radius: 15px;
`;

export default TimeLine;