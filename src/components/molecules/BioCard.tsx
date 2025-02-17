import { Dispatch, FC, SetStateAction } from 'react';
// @ts-ignore
import styled from 'styled-components';
import LinkButton from '../../assets/buttons/LinkButton';

interface Props {
  viewSetter: Dispatch<SetStateAction<string>>,
}

const BioCard: FC<Props> = ({ viewSetter }) => {
  const headshot = 'https://res.cloudinary.com/dhah4xjvr/image/upload/f_auto,q_auto/v1/fezz.dev/photos/photos/kzdwwh2b4yepik7c5amm';

  return (
    <Wrap>
      <Headshot src={headshot} />

      <BioContainer>
        <IntroText>
          I'm Fezz, a Full-Stack Developer based in the heart of NYC.
        </IntroText>

        <P>
          I've spent the past years working with elite teams to create user-centric products that are both intuitive and visually appealing. My expertise lies in front-end development, with proficiency in JavaScript, Python, and Swift.
        </P>

        <P>
        These days, my time is spent collaborating with talented teams to craft seamless interfaces. I also delve into cloud architecture, game engines, and generative art, which continuously inform and elevate my work.
        </P>

        <P>
          Outside of coding, you'll find me exploring new tech, diving into creative projects, and always on the lookout for inspiring collaborations.
        </P>

        <Buttons>
          <LinkButton
            onClick={() => viewSetter('contact')}
            textContent='GET IN TOUCH'
            isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
          <LinkButton
            onClick={() => viewSetter('exp')}
            textContent='WORK HISTORY'
            isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
          <LinkButton
            onClick={() => viewSetter('tech')}
            textContent='TECH'
            isScaleAnimation padding={false} buttonSize={''} subDirectory={''} />
        </Buttons>
      </BioContainer>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    height: 100%;
    gap: 20px;
    padding: 0;
    margin: 0;
  }
`;
const Headshot = styled.img`
  height: 100%;
  width: 60%;
  margin: 0;
  object-fit: cover;
  box-shadow: -2rem 2rem 20rem;

  @media screen and (max-width: 900px) {
    width: 100vw;
    height: 55%;
    box-shadow: none;
  }
`;
const BioContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 30px;
  font-size: 1rem;
  gap: 20px;

  @media screen and (max-width: 600px) {
    width: 85vw;
    height: 50%;
    justify-content: center;
    padding: 0;
  }
`;
const IntroText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  font-family: Michroma;

  @media screen and (max-width: 600px) {
    font-size: 2rem;
    font-size: 1.5rem;
    text-align: center;
  }
`;
const P = styled.p`
  font-size: 1rem;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export default BioCard;
