import React from 'react';
import styled from 'styled-components';
import ExternalButton from '../assets/buttons/ExternalButton';
import LinkButton from '../assets/buttons/LinkButton';
import P5_TORUS from './p5/P5_TORUS';

const TimeLine = ({ darkMode }) => {
  return (
    <Container>
      <Header darkMode={darkMode}>Corporate Experience</Header>
      <ContentContainer>
        <Content darkMode={darkMode}>
          <h3>2022 |
            <ExternalButton
              link={"https://seatgeek.com/about"}
              text={'SeatGeek'}
              fontSize={'20px'}/>
          </h3>
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

        <Content darkMode={darkMode}>
          <h3>2021 | 
            <ExternalButton
              link={"https://www.pursuit.org/fellowship?gclid=Cj0KCQjwrsGCBhD1ARIsALILBYoZZTe0XdzsD0GkFi90K4dVpBijEedjBi69BZTan0FS3X1s1DfZiOUaAh4PEALw_wcB"}text={'Pursuit'}
              fontSize={'20px'} />
          </h3>
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

        <Content darkMode={darkMode}>
          <h3>2013 | 
            <ExternalButton
              link={"https://www.jpmorgan.com/global"}
              text={'JPMorgan Chase'}
              fontSize={'20px'}/></h3>
          <h4>Project Management Intern</h4>
          <p>
            During my tenure as a Project Management Intern at JPMorgan Chase & Co., I meticulously verified the conditions and equipment used in all server rooms at the prestigious JPMC HQ located at 270 Park Ave. Additionally, I took charge of remediating server rooms at Chase Manhattan Tower, ensuring optimal functionality and efficiency.
          </p>
          <p>
            Moreover, I demonstrated exceptional coordination skills by effectively managing team meetings and meticulously recording meeting minutes for team members spanning across four different time zones. My proactive approach ensured seamless communication and collaboration, contributing to the success of our projects.
          </p>
        </Content>

        <P5_1 position='relative'>
          <P5_TORUS strokeColor={200} />
        </P5_1>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.darkMode ? 'white' : 'black'};
  width: 50vw;
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media only screen and (min-width: 767px) {
    width: 52rem;
  }
`;
const Header = styled.div`
  font-family: var(--font-family-rubik);
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width: 100vw;
`;
const Content = styled.div`
  font-family: var(--font-family-rubik);
  font-size: 20px;
  padding: 20px 30px;
  color: ${props => props.darkMode ? 'white' : 'black'};
`;
const P5Project = styled.div`
  position: ${props => props.position};
  z-index: -1;
`;
const P5_1 = styled(P5Project)`
  left: 30%;
  position: absolute;
  transform: translateY(35%);
  z-index: 2;
`;

export default TimeLine;
