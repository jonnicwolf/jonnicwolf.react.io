import React from 'react';
import styled from 'styled-components';

import ExternalButton from '../assets/buttons/ExternalButton';

export default function ExperienceCard({ darkMode, company_name, link, position, content }) {
  function renderContent (content) {
    const result = content
      .split('  ')
      .map(item =>
        <p>{item}</p>
      );

      return result;
  };

  return (
    <Container darkMode={ darkMode }>
      <h3>2022 |
        <ExternalButton
          link={link}
          text={company_name}
          buffer={true}
          fontSize={'20px'}
          darkModeGetter={darkMode} />
      </h3>
      <h4>{ position }</h4>
      { renderContent(content) }
    </Container>
  );
};

const Container = styled.div`
  font-family: var(--font-family-rubik);
  font-size: 20px;
  padding: 20px 30px;
  color: ${props => props.darkMode ? 'white' : 'black'};
  @media only screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
