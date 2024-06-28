import React from 'react';
import Youtube from 'react-youtube';
import styled from 'styled-components';

import ExperienceCard from './ExperienceCard';
import P5_TORUS from './p5/P5_TORUS';

const TimeLine = ({ darkMode }) => {
  const [ content_SG, content_pursuit, content_JPMC ] = 
    [`Here at SeatGeek, I spearheaded the development of crucial monitoring systems using Datadog, ensuring swift detection and resolution of client file upload errors. Leveraging Terraform, I seamlessly deployed these monitors and alarms, enhancing our operational efficiency.  Furthermore, I championed the creation of the Matching Tool Search & Match modal feature, a game-changer that significantly boosted the visibility of ticket items without specific event associations. This innovative addition not only improved user experience but also contributed to increased ticket sales.  During high-pressure moments like Taylor Swift's Eras tour ticket sales frenzy, I proudly stepped up to the plate, participating in rotational on-call duties and command center operations. My dedication ensured seamless operations during peak demand periods, maintaining SeatGeek's reputation for reliability and customer satisfaction.  In addition, I played a pivotal role in enhancing the Integrated Inventory Card by providing crucial support to our CX team. Through the implementation of logic to display primary providers and relevant league information, I empowered our team to better serve our customers, ultimately driving improved user engagement and loyalty.`,
      `Embarking on a transformative journey as a Full Stack Web Development Fellow at Pursuit, I embraced a rigorous 12-month Google-funded software engineering fellowship. This program boasted a remarkable acceptance rate of just 9% out of over 1500 applicants, underscoring the competitive nature of the selection process.  Throughout the fellowship, I honed not only my technical prowess but also crucial professional skills, equipping myself with a well-rounded skill set essential for success in the industry. Pursuit's comprehensive curriculum prepared me to tackle real-world challenges, enabling me to emerge as a proficient developer ready to make meaningful contributions.  As a testament to Pursuit's effectiveness, graduates like myself have been recruited by top-tier companies including Pinterest, JP Morgan, and Spotify, attesting to the program's reputation for producing exceptional talent poised for success in the tech industry.
      `,
      `During my tenure as a Project Management Intern at JPMorgan Chase & Co., I meticulously verified the conditions and equipment used in all server rooms at the prestigious JPMC HQ located at 270 Park Ave. Additionally, I took charge of remediating server rooms at Chase Manhattan Tower, ensuring optimal functionality and efficiency.  Moreover, I demonstrated exceptional coordination skills by effectively managing team meetings and meticulously recording meeting minutes for team members spanning across four different time zones. My proactive approach ensured seamless communication and collaboration, contributing to the success of our projects.
      `];

  const timeline = [
    {
      company_name: 'SeatGeek',
      position: 'Apprentice Software Engineer',
      link: 'https://seatgeek.com/about',
      video_link: 'QnWS61EMljU',
      content: content_SG,
      year: 2023,
    },
    {
      company_name: 'Pursuit',
      position: 'Full Stack Web Development Fellow',
      link: 'https://www.pursuit.org/fellowship?gclid=Cj0KCQjwrsGCBhD1ARIsALILBYoZZTe0XdzsD0GkFi90K4dVpBijEedjBi69BZTan0FS3X1s1DfZiOUaAh4PEALw_wcB',
      video_link: 'LYnWuKGKNrg',
      content: content_pursuit,
      year: 2020,
    },
    {
      company_name: 'JPMorgan Chase & Co.',
      position: 'Project Management Intern',
      link: 'https://www.jpmorgan.com/global',
      video_link: 'VF74MZ0yELA',
      content: content_JPMC,
      year: 2013,
    },
  ];

  return (
    <Container>
      <ContentContainer>
        {timeline.map((item, i) =>
          <ExperienceContainer>
            <Video videoId={item.video_link} opts={{width: "100%", height: '100%'}} />
            <ExperienceCardWrap>
              <ExperienceCard
                key={i}
                company_name={item.company_name}
                position={item.position}
                link={item.link}
                content={item.content}
                year={item.year}
                darkMode={darkMode} />
            </ExperienceCardWrap>
          </ExperienceContainer>
        )}

        <P5_1 position='relative'>
          <P5_TORUS strokeColor={180} />
        </P5_1>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.darkMode ? 'white' : 'black'};
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 20vw;
  width: 80vw;
`;
const Video = styled(Youtube)`
  width: 50%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 50%;
  }
`;
const ExperienceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40vh;
  border: 1px solid transparent;
  box-shadow: 0 0 110px rgba(0,0,0,1);
  z-index: 2;
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    height: 50vh;
  }
`;
const ExperienceCardWrap = styled.div`
  width: 55%;
  overflow: auto;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;
const P5Project = styled.div`
  position: ${props => props.position};
  z-index: 1;
`;
const P5_1 = styled(P5Project)`
  left: 30%;
  position: absolute;
  position: fixed;
  transform: translateY(-35%);
  z-index: 1;
  opacity: 0.5;
`;

export default TimeLine;
