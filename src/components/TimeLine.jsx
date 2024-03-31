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
          <p>
            During my tenure as a Project Management Intern at JPMorgan Chase & Co., I meticulously verified the conditions and equipment used in all server rooms at the prestigious JPMC HQ located at 270 Park Ave. Additionally, I took charge of remediating server rooms at Chase Manhattan Tower, ensuring optimal functionality and efficiency.
          </p>

          <p>
            Moreover, I demonstrated exceptional coordination skills by effectively managing team meetings and meticulously recording meeting minutes for team members spanning across four different time zones. My proactive approach ensured seamless communication and collaboration, contributing to the success of our projects.
          </p>
        </Content>
      
        <Content>
          <h3>2021 | <a href="https://www.pursuit.org/fellowship?gclid=Cj0KCQjwrsGCBhD1ARIsALILBYoZZTe0XdzsD0GkFi90K4dVpBijEedjBi69BZTan0FS3X1s1DfZiOUaAh4PEALw_wcB" target='_blank' rel='noreferrer'><LinkButton textContent={'Pursuit'} fontSize={'20px'}/></a></h3>
          <h4>Full Stack Web Development Fellow</h4>
          <p>
            Embarking on a transformative journey as a Full Stack Web Development Fellow at Pursuit, I embraced a rigorous 12-month Google-funded software engineering fellowship. This program boasted a remarkable acceptance rate of just 9% out of over 1500 applicants, underscoring the competitive nature of the selection process.
          </p>
          <p>
            Throughout the fellowship, I honed not only my technical prowess but also crucial professional skills, equipping myself with a well-rounded skill set essential for success in the industry. Pursuit's comprehensive curriculum prepared me to tackle real-world challenges, enabling me to emerge as a proficient developer ready to make meaningful contributions.
          </p>
          <p>
            As a testament to Pursuit's effectiveness, graduates like myself have been recruited by top-tier companies including Pinterest, JP Morgan, and Spotify, attesting to the program's reputation for producing exceptional talent poised for success in the tech industry.
          </p>
        </Content>
        <Content>
          <h3>2022 | <a href="https://seatgeek.com/about" target='_blank' rel='noreferrer'><LinkButton textContent={'SeatGeek'} fontSize={'20px'}/></a></h3>
          <h4>Apprentice Software Engineer</h4>
          <p>
            Here at SeatGeek, I spearheaded the development of crucial monitoring systems using Datadog, ensuring swift detection and resolution of client file upload errors. Leveraging Terraform, I seamlessly deployed these monitors and alarms, enhancing our operational efficiency.
          </p>
          <p>
            Furthermore, I championed the creation of the Matching Tool Search & Match modal feature, a game-changer that significantly boosted the visibility of ticket items without specific event associations. This innovative   addition not only improved user experience but also contributed to increased ticket sales.
          </p>
          <p>
            During high-pressure moments like Taylor Swift's Eras tour ticket sales frenzy, I proudly stepped up to the plate, participating in rotational on-call duties and command center operations. My dedication ensured seamless operations during peak demand periods, maintaining SeatGeek's reputation for reliability and customer satisfaction.
          </p>
          <p>
            In addition, I played a pivotal role in enhancing the Integrated Inventory Card by providing crucial support to our CX team. Through the implementation of logic to display primary providers and relevant league information, I empowered our team to better serve our customers, ultimately driving improved user engagement and loyalty.
          </p>
        </Content>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (max-width: 767px) {
    width: auto;
  }
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
